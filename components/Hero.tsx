
import React from 'react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/90 to-gray-800/90 p-6 animate-fade-in-up" style={{paddingTop: '64px'}}> {/* Adjust paddingTop if navbar height changes, made gradient semi-transparent */}
      <div className="max-w-3xl">
        <img 
          src="./assets/images/profile_placeholder.jpg" // Placeholder, user should replace this with their actual photo e.g. ./assets/images/alex_chen_profile.jpg
          alt="Alex P. Chen" 
          className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-8 border-4 border-secondary shadow-xl"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-light-text">
          Alex P. Chen
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-300">
          Pioneering Digital Realities: AI-Enhanced Design & Intelligent Automation.
        </p>
        <p className="text-md sm:text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
          Bridging visionary design with intelligent systems. I specialize in advanced CAD, CAM, CAE, BIM, and AEC solutions, augmented by bespoke Agent-AI workflows, to engineer transformative outcomes and shape the future of industries.
        </p>
        <button
          onClick={scrollToAbout}
          className="bg-secondary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Hero;
// INSTRUCTION FOR USER: Replace "src="./assets/images/profile_placeholder.jpg"" with the actual path to your profile picture.
// For example: src="./assets/images/my_profile_photo.jpg"
// Ensure the image is placed in the `assets/images/` folder you create.
