import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'green' | 'cyan';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'green',
  className = '',
}) => {
  const variantClass = variant === 'cyan' ? 'chip-cyan' : '';
  return (
    <span className={`chip ${variantClass} ${className}`}>
      {children}
    </span>
  );
};
