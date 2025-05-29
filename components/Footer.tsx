
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Alex P. Chen. All rights reserved.</p>
        <p className="text-sm mt-1">Pioneering Digital Design and AI Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
