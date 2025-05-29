
import React from 'react';

interface IconProps {
  className?: string;
}

export const BotIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3.375a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1-.75-.75V7.125Zm7.5 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1-.75-.75V7.125Zm-7.5 5.625a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5h-11.25a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
);
