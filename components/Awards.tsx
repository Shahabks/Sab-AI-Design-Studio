
import React from 'react';
import Section from './Section';
import { AWARDS_DATA } from '../constants';
import type { Award } from '../types';

const AwardCard: React.FC<{ award: Award }> = ({ award }) => (
  <div className="bg-gray-800/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Made background semi-transparent */}
    <h3 className="text-xl font-semibold text-accent mb-2">{award.title}</h3>
    <p className="text-sm text-gray-400 mb-1"><em>{award.organization}, {award.year}</em></p>
    {award.description && <p className="text-gray-300 text-sm mb-3">{award.description}</p>}
    {award.certificateLink && (
      <a
        href={award.certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-blue-400 font-medium transition-colors duration-300 text-sm inline-block mt-2"
      >
        View Certificate &rarr;
      </a>
    )}
  </div>
);

const Awards: React.FC = () => {
  return (
    <Section id="awards" title="Awards & Recognition"> {/* This section will use bg-primary/95 from App.tsx */}
      <div className="grid md:grid-cols-2 gap-8">
        {AWARDS_DATA.length > 0 ? (
          AWARDS_DATA.map((award) => <AwardCard key={award.id} award={award} />)
        ) : (
          <p className="text-center text-gray-400 md:col-span-2">No awards to display at this time.</p>
        )}
      </div>
    </Section>
  );
};

export default Awards;