import React from 'react'

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant: "primary";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {

  const baseStyle = "cursor-pointer text-center px-10 py-3 rounded-full";

  const variantStyles: Record<ButtonProps["variant"], string> = {
    primary: "hover:bg-primary-hover bg-primary text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyles[variant]}`}>
      {label}
    </button>
  )
}

export default Button
