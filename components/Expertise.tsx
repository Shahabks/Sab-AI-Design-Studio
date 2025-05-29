
import React from 'react';
import Section from './Section';
import { EXPERTISE_AREAS } from '../constants';

interface ExpertiseCardProps {
  name: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ name, description }) => (
  <div className="bg-gray-800/95 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"> {/* Made background semi-transparent */}
    <h3 className="text-xl font-semibold mb-3 text-accent">{name}</h3>
    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
  </div>
);

const Expertise: React.FC = () => {
  return (
    <Section id="expertise" title="Core Expertise"> {/* This section will use bg-primary/95 from App.tsx if not overridden by Section's className */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EXPERTISE_AREAS.map((area) => (
          <ExpertiseCard key={area.name} name={area.name} description={area.description} />
        ))}
      </div>
    </Section>
  );
};

export default Expertise;