import { TButton } from '@/types';
import React from 'react';

const Button = ({ title }: TButton) => {
  return (
    <button className="bg-primary w-[200px] rounded text-white">{title}</button>
  );
};

export default Button;
