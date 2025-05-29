
import React from 'react';

interface IconProps {
  className?: string;
}

export const ChatIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.05 1.05 0 0 1-1.663-1.189l.815-4.233A9.005 9.005 0 0 1 9 19.625a9.005 9.005 0 0 1-4.159-1.931L3.75 21.75a1.05 1.05 0 0 1-1.664-1.189l.815-4.233a9.005 9.005 0 0 1 0-7.072L2.086 5.053a1.05 1.05 0 0 1 1.189-1.664l4.233.815A9.005 9.005 0 0 1 15 4.625c.836 0 1.644.169 2.403.489Z" 
    />
  </svg>
);
