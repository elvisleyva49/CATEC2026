import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glowOnHover = true,
}) => {
  return (
    <div className={`glass-container ${glowOnHover ? 'glow-hover' : ''} ${className}`}>
      {children}
    </div>
  );
};
