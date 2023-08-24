import { TButton } from '@/types';
import React from 'react';

const Button = ({ title, buttonStyle, plus }: TButton) => {
  return (
    <button className={buttonStyle}>
      <span className="mr-1 text-xl font-medium">{plus}</span>
      {title}
    </button>
  );
};

export default Button;
