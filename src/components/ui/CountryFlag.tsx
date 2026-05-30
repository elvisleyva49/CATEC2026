import React from 'react';

export type CountryCode = 'pe' | 'co' | 'ar' | 'cl';

interface CountryFlagProps {
  code: CountryCode;
  label: string;
  size?: number;
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  code,
  label,
  size = 18,
  className = '',
}) => {
  const height = Math.round(size * 0.72);

  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width={size}
      height={height}
      alt={`Bandera de ${label}`}
      title={label}
      className={`country-flag ${className}`.trim()}
      loading="lazy"
      decoding="async"
    />
  );
};
