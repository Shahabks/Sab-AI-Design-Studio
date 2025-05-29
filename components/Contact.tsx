
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to discussing new projects, collaborations, or ideas. 
          Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:alex.p.chen.portfolio@example.com" 
            className="bg-secondary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
          >
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-light-text font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-light-text font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
