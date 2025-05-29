
import { GoogleGenAI, GenerateContentResponse, Content, Part } from "@google/genai"; // Corrected import
import type { GroundingSource } from '../types';

// Ensure API_KEY is accessed correctly, assuming it's set in the environment
// The build process or hosting environment must replace process.env.API_KEY
// For local development, you can set this via a .env file and a build tool like Vite or Webpack
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.error("API_KEY environment variable not set. Chatbot functionality will be limited.");
}

export interface GeminiChatResponse {
  text: string;
  sources: GroundingSource[];
}

export const sendMessageToGemini = async (message: string, chatHistory: {role: string, parts: Part[]}[]) : Promise<GeminiChatResponse> => {
  if (!ai) {
    return { 
      text: "API Key not configured. Please ensure the API_KEY environment variable is set.", 
      sources: [] 
    };
  }

  try {
    // Construct full conversation history for context
    const contents: Content[] = [
        ...chatHistory.map(entry => ({ role: entry.role, parts: entry.parts })),
        { role: "user", parts: [{ text: message }] }
    ];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: contents, // Send the full history
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    let sources: GroundingSource[] = [];

    if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
      sources = response.candidates[0].groundingMetadata.groundingChunks
        .filter(chunk => chunk.web && chunk.web.uri && chunk.web.title)
        .map(chunk => ({
          uri: chunk.web!.uri!,
          title: chunk.web!.title!,
        }));
    }
    
    return { text, sources };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    let errorMessage = "An error occurred while processing your request. Please try again.";
    if (error instanceof Error) {
        // You might want to check for specific error types from the GenAI SDK if available
        // For example, if (error.name === 'GoogleGenerativeAIError') { ... }
        errorMessage = error.message;
    }
    return { 
      text: `Sorry, I encountered an issue: ${errorMessage}`, 
      sources: [] 
    };
  }
};
