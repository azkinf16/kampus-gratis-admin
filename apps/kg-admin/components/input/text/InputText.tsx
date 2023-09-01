import { TextInput } from '@/types';
import React from 'react';

const InputText = ({ id, placeholder, title }: TextInput) => {
  return (
    <div>
      <label htmlFor="tags">
        {title}
        <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="text"
        id={id}
        className="w-full pl-2 border-2 border-[#e5e5e5] py-2 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
