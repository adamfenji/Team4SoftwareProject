import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  alignItems: string;
  borderRadius: string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    width,
    alignItems,
    borderRadius,
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         height,
         width,
         alignItems,
         borderRadius,
      }}
  
    >
    {children}
    </button>
  );
}

export default Button;