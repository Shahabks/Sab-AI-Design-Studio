
import type { Publication, Award, GalleryItem } from './types';

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'pub1',
    title: 'Advancements in Agent-AI for AEC Workflow Automation',
    authors: ['Alex P. Chen', 'Maria J. Rodriguez'],
    journal: 'Journal of Computational Design and Engineering',
    year: 2023,
    link: 'https://example.com/pub1',
    abstract: 'This paper explores novel methodologies for integrating agent-based AI systems into traditional Architecture, Engineering, and Construction (AEC) workflows, demonstrating significant improvements in efficiency and decision-making processes.'
  },
  {
    id: 'pub2',
    title: 'Data-Driven Parametric Design in Modern CAM Processes',
    authors: ['Alex P. Chen', 'Kenji Tanaka'],
    journal: 'International Journal of Advanced Manufacturing Technology',
    year: 2022,
    link: 'https://example.com/pub2',
    abstract: 'Investigating the role of big data analytics in shaping parametric design strategies for Computer-Aided Manufacturing (CAM), focusing on material optimization and waste reduction.'
  },
];

export const AWARDS_DATA: Award[] = [
  {
    id: 'award1',
    title: 'Innovation in Digital Construction Award',
    organization: 'Global AEC Summit',
    year: 2023,
    description: 'Recognized for pioneering work in AI-driven BIM solutions that enhance project collaboration and lifecycle management.',
    certificateLink: './assets/images/awards/innovation_award_cert.jpg' // Replace with your actual file path
  },
  {
    id: 'award2',
    title: 'Young Researcher Excellence Grant',
    organization: 'National Science Foundation (Placeholder)',
    year: 2021,
    description: 'Awarded for promising research in the field of generative design and AI agents for complex system modeling.',
    certificateLink: './assets/images/awards/research_grant_cert.pdf' // Replace with your actual file path
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal1',
    title: 'Parametric Facade Design',
    // Replace with your actual image path, e.g., './assets/images/gallery/parametric_facade.jpg'
    imageUrl: './assets/images/gallery/parametric_facade_placeholder.jpg', 
    description: 'A generative design for a high-performance building facade, optimized for solar gain and natural ventilation.',
    category: 'CAD/CAE'
  },
  {
    id: 'gal2',
    title: 'AI-Optimized Manufacturing Cell',
    // Replace with your actual image path, e.g., './assets/images/gallery/ai_manufacturing.png'
    imageUrl: './assets/images/gallery/ai_manufacturing_placeholder.jpg',
    description: 'Simulation of an AI agent controlling a robotic manufacturing cell for adaptive production.',
    category: 'CAM/AI'
  },
  {
    id: 'gal3',
    title: 'BIM Model for Smart City Infrastructure',
    // Replace with your actual image path, e.g., './assets/images/gallery/bim_smart_city.jpg'
    imageUrl: './assets/images/gallery/bim_city_placeholder.jpg',
    description: 'A comprehensive Building Information Model integrating IoT data for smart city management.',
    category: 'BIM/AEC'
  },
  {
    id: 'gal4',
    title: 'Agent-AI Swarm Robotics Simulation',
    // Replace with your actual image path, e.g., './assets/images/gallery/ai_swarm_robotics.gif'
    imageUrl: './assets/images/gallery/ai_swarm_placeholder.jpg',
    description: 'Visualization of a swarm robotics system performing complex construction tasks coordinated by AI agents.',
    category: 'Agent-AI'
  },
];

export const EXPERTISE_AREAS = [
    { name: "CAD (Computer-Aided Design)", description: "Leveraging advanced CAD tools for intricate 2D/3D modeling and design automation." },
    { name: "CAM (Computer-Aided Manufacturing)", description: "Optimizing manufacturing processes through CAM simulations and toolpath generation." },
    { name: "CAE (Computer-Aided Engineering)", description: "Applying CAE for structural analysis, fluid dynamics, and performance simulation." },
    { name: "BIM (Building Information Modeling)", description: "Developing and managing information-rich BIM models for AEC projects." },
    { name: "AEC (Architecture, Engineering, Construction)", description: "Innovating in the AEC sector with digital workflows and data-driven insights." },
    { name: "Agent-AI Workflow Design", description: "Designing intelligent agent systems to automate complex tasks and decision-making." },
];
// INSTRUCTIONS FOR USER:
// 1. Create a folder structure: `/assets/images/gallery/` and `/assets/images/awards/` in your project root.
// 2. Place your images/certificate files in these folders.
// 3. Update the `imageUrl` in GALLERY_DATA and `certificateLink` in AWARDS_DATA to point to your actual file names.
// Example: './assets/images/gallery/my_project_image.jpg'
// Example: './assets/images/awards/my_certificate.pdf'
// 4. For the global wallpaper, update the URL in the <style> tag in index.html. You can use a local path like './assets/images/my_wallpaper.jpg'.
