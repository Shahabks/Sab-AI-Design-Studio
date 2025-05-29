
import React from 'react';
import Section from './Section';
import { GALLERY_DATA } from '../constants';
import type { GalleryItem } from '../types';

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
  <div className="bg-gray-800/95 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"> {/* Made background semi-transparent */}
    <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-accent mb-1">{item.title}</h3>
      <span className="text-xs bg-secondary text-white px-2 py-0.5 rounded-full">{item.category}</span>
      {item.description && <p className="text-gray-400 text-sm mt-2">{item.description}</p>}
    </div>
  </div>
);

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" title="Project Gallery" className="bg-gray-800/95"> {/* Made background semi-transparent */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {GALLERY_DATA.length > 0 ? (
          GALLERY_DATA.map((item) => <GalleryCard key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-400 sm:col-span-2 lg:col-span-3 xl:col-span-4">Gallery is currently empty. Check back soon!</p>
        )}
      </div>
    </Section>
  );
};

export default Gallery;