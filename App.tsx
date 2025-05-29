
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotModal from './components/ChatbotModal';
import { ChatIcon } from './components/icons/ChatIcon';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'expertise', title: 'Expertise' },
    { id: 'publications', title: 'Publications' },
    { id: 'awards', title: 'Awards' },
    { id: 'gallery', title: 'Gallery' },
    { id: 'contact', title: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen flex flex-col bg-primary/95"> {/* Applied semi-transparent background */}
      <Navbar navLinks={navLinks} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        <Publications />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 bg-secondary hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110 animate-pulse-subtle"
        aria-label="Open AI Chatbot"
      >
        <ChatIcon className="w-6 h-6" />
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
         <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-6 bg-accent hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg z-50 transition-opacity duration-300"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>
      )}

      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </div>
  );
};

export default App;