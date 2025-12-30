import React from 'react';

const Button = ({ 
  text = 'Botão',  
  isImportant = false,
  isBold = false,
  onClick,
  className = "" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${isImportant ? 'bg-purple' : ''}
        ${isBold ? 'font-bold' : ''}
        border 
        text-2xl 
        font-alegraya-sans 
        lowercase 
        shadow-btn 
        transition-all 
        active:scale-95
        hover:shadow-btn2
        hover:brightness-105
        hover:-translate-px
        px-4
        py-1
        cursor-pointer
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;