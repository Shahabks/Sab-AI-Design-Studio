
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className} animate-fade-in-up`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-secondary ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
