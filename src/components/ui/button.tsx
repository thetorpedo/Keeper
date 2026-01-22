import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string;
  isImportant?: boolean;
  isBold?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text = '',
  isImportant = false,
  isBold = false,
  className = "",
  ...props 
}) => {
  return (
    <button
      {...props}
      className={`
        ${isImportant ? 'bg-purple' : ''}
        ${isBold ? 'font-bold' : ''}
        border text-2xl font-alegraya-sans lowercase shadow-btn transition-all 
        active:translate-1.5 active:shadow-none hover:shadow-btn2 hover:brightness-105 
        hover:-translate-px px-4 py-1 cursor-pointer
        ${className}
      `}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;