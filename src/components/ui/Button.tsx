import React from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', icon, children, className = '', ...rest } = props;
  const classes = `btn btn-${variant} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, external = true, ...anchorRest } = rest as ButtonAsLink;
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...anchorRest}
      >
        {children}
        {icon && <span className="btn-icon-wrapper">{icon}</span>}
      </a>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
    </button>
  );
};
