import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  link?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  onMouseOver?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  link,
  href,
  onClick,
  className = '',
  style,
  onMouseOver,
  onMouseOut,
  target,
  rel,
  type = 'button',
  ariaLabel
}) => {
  const baseClasses = "flex items-center gap-2 px-3 py-2 rounded-lg shadow transition-colors";
  const url = link || href;

  if (url) {
    return (
      <a
        href={url}
        target={target}
        rel={rel}
        className={`${baseClasses} ${className}`}
        style={style}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        aria-label={ariaLabel}
      >
        {icon}
        {label && <span>{label}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} cursor-pointer ${className}`}
      style={style}
      onMouseOver={onMouseOver as any}
      onMouseOut={onMouseOut as any}
      aria-label={ariaLabel}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
};

export default IconButton;
