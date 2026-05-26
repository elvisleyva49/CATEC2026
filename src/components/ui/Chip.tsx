import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'purple' | 'cyan' | 'edition' | 'dates';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'purple',
  className = '',
}) => {
  const variantClass =
    variant === 'cyan'
      ? 'chip-cyan'
      : variant === 'edition'
        ? 'chip-edition'
        : variant === 'dates'
          ? 'chip-dates'
          : '';

  return (
    <span className={`chip ${variantClass} ${className}`}>
      {children}
    </span>
  );
};
