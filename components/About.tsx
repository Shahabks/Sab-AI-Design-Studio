
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-gray-800/95"> {/* Made background semi-transparent */}
      <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <img 
          src="./assets/images/about_placeholder.jpg" // Placeholder, user should replace
          alt="Professional workspace" 
          className="w-60 h-60 md:w-72 md:h-72 rounded-lg shadow-xl object-cover"
        />
        <div className="text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm Alex P. Chen, a passionate professional dedicated to advancing the frontiers of digital design and intelligent automation. My work centers on the intersection of cutting-edge technologies like CAD, CAM, CAE, BIM, and the transformative power of Agent-AI.
          </p>
          <p className="mb-4">
            With a strong foundation in engineering and computer science, I focus on developing data-driven solutions that enhance efficiency, foster innovation, and solve complex challenges in the Architecture, Engineering, Construction (AEC) and manufacturing sectors.
          </p>
          <p>
            My goal is to design and implement intelligent workflows that not only optimize current processes but also unlock new possibilities for future development. I thrive on collaborative projects and am always eager to explore new research avenues.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
// INSTRUCTION FOR USER: Replace "src="./assets/images/about_placeholder.jpg"" with an actual image path.
// For example: src="./assets/images/my_workspace_image.jpg"
// Ensure the image is placed in the `assets/images/` folder.
