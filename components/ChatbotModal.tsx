
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import type { ChatMessage, GroundingSource } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { SendIcon } from './icons/SendIcon';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Store chat history for Gemini context
  const [geminiChatHistory, setGeminiChatHistory] = useState<{role: string, parts: {text: string}[]}[]>([]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      if (messages.length === 0) {
         setMessages([{ id: 'initial-bot-message', text: "Hello! I'm your AI research assistant. Ask me anything about digital design, AI, or related topics!", sender: 'ai' }]);
      }
    } else {
      // Optionally clear messages or keep history
      // setMessages([]); 
      // setInputValue('');
      // setError(null);
    }
  }, [isOpen]);


  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);
    
    // Add user message to Gemini history
    const updatedGeminiHistory = [...geminiChatHistory, { role: "user", parts: [{ text: userMessage.text }] }];

    // Add a temporary loading message for AI
    const loadingBotMessageId = `bot-loading-${Date.now()}`;
    setMessages((prevMessages) => [...prevMessages, {id: loadingBotMessageId, text: '...', sender: 'ai', isLoading: true}]);

    try {
      const response = await sendMessageToGemini(userMessage.text, updatedGeminiHistory);
      
      const aiMessage: ChatMessage = {
        id: Date.now().toString() + '-ai',
        text: response.text,
        sender: 'ai',
        sources: response.sources,
      };
      
      // Update messages: remove loading and add AI response
      setMessages((prevMessages) => 
        prevMessages.filter(msg => msg.id !== loadingBotMessageId)
      );
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

      // Add AI response to Gemini history
      setGeminiChatHistory([...updatedGeminiHistory, { role: "model", parts: [{ text: response.text }] }]);

    } catch (apiError: any) {
      const errorMessage = apiError.message || "An unexpected error occurred.";
      setError(errorMessage);
      const errorBotMessage: ChatMessage = {
        id: Date.now().toString() + '-error',
        text: `Error: ${errorMessage}`,
        sender: 'ai',
      };
      setMessages((prevMessages) => 
        prevMessages.filter(msg => msg.id !== loadingBotMessageId)
      );
      setMessages((prevMessages) => [...prevMessages, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, geminiChatHistory]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-primary shadow-2xl rounded-lg w-full max-w-lg h-[80vh] max-h-[700px] flex flex-col overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-700">
          <h3 className="text-xl font-semibold text-secondary">AI Research Assistant</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-gray-700/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg shadow ${
                msg.sender === 'user' 
                ? 'bg-secondary text-white' 
                : 'bg-gray-600 text-light-text'
              }`}>
                {msg.isLoading ? (
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse delay-0"></span>
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse delay-200"></span>
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse delay-400"></span>
                    </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                )}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-500">
                    <p className="text-xs font-semibold mb-1 text-gray-300">Sources:</p>
                    <ul className="space-y-1">
                      {msg.sources.map((source, index) => (
                        <li key={index}>
                          <a
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-300 hover:underline truncate block"
                            title={source.uri}
                          >
                            {source.title || source.uri}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* For auto-scrolling */}
        </div>

        {error && <p className="p-2 text-center text-red-400 text-sm bg-red-900/50">{error}</p>}

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              placeholder="Ask about CAD, AI, or search the web..."
              className="flex-grow p-3 bg-gray-700 text-light-text rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-secondary hover:bg-blue-700 text-white p-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <SendIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
