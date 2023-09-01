import { TButton } from '@/types';
import React from 'react';

const Button = ({ title, buttonStyle, plus, onClick }: TButton) => {
  return (
    <button className={buttonStyle} onClick={onClick}>
      <span className="mr-2 text-xl font-medium">{plus}</span>
      {title}
    </button>
  );
};

export default Button;
