
import React, { useState } from 'react';
import type { NavLink } from '../types';

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu on link click
  };

  return (
    <nav className="bg-primary/80 backdrop-blur-md text-light-text p-4 fixed w-full z-40 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home');}} className="text-2xl font-bold text-secondary hover:text-blue-300 transition-colors">
          Alex P. Chen
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id);}}
              className="hover:text-secondary transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 py-2 bg-primary shadow-md rounded-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id);}}
              className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-secondary transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
