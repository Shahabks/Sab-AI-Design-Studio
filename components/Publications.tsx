
import React from 'react';
import Section from './Section';
import { PUBLICATIONS_DATA } from '../constants';
import type { Publication } from '../types';

const PublicationCard: React.FC<{ publication: Publication }> = ({ publication }) => (
  <div className="bg-gray-800/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Made background semi-transparent */}
    <h3 className="text-xl font-semibold text-accent mb-2">{publication.title}</h3>
    <p className="text-sm text-gray-400 mb-1">Authors: {publication.authors.join(', ')}</p>
    <p className="text-sm text-gray-400 mb-3"><em>{publication.journal}, {publication.year}</em></p>
    {publication.abstract && <p className="text-gray-300 mb-3 text-sm">{publication.abstract}</p>}
    {publication.link && (
      <a
        href={publication.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-blue-400 font-medium transition-colors duration-300 text-sm"
      >
        Read More &rarr;
      </a>
    )}
  </div>
);

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications" className="bg-gray-800/95"> {/* Made background semi-transparent */}
      <div className="space-y-8">
        {PUBLICATIONS_DATA.length > 0 ? (
          PUBLICATIONS_DATA.map((pub) => <PublicationCard key={pub.id} publication={pub} />)
        ) : (
          <p className="text-center text-gray-400">No publications to display at this time.</p>
        )}
      </div>
    </Section>
  );
};

export default Publications;