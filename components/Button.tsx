
import React from "react";

interface Props {
  border: string;
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  alignItems: string;
  borderRadius: string;
  margin: string;
  
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    backgroundColor,
    children,
    height,
    onClick, 
    width,
    alignItems,
    borderRadius,
    margin,
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor,
         border,
         height,
         width,
         alignItems,
         borderRadius,
         margin,
         color
      }}
  
    >
    {children}
    </button>
  );
}

export default Button;