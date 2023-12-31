'use client';

import React, { useState } from 'react';
import { TDropdown } from '@/types';

const Dropdown = ({
  dataOptions,
  placeholder,
  icons,
  reverse,
  textCentre,
  shadow,
  bold
}: TDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleOptionSelect = (dataOptions: string) => {
    setSelectedOption(dataOptions);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          reverse ? 'flex-row-reverse' : ''
        } ${shadow ? 'drop-shadow-md' : ''} w-full bg-white border border-[#D4D4D4] text-neutral-600 font-medium text-sm px-4 py-1 rounded-[3px] focus:outline-none flex justify-between items-center gap-5`}
      >
        {selectedOption}
        {icons}
      </button>
      {isOpen && (
        <div className="z-50 absolute mt-2 py-2 w-full bg-white rounded-[3px] shadow-lg">
          {dataOptions?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`${
                textCentre ? 'text-center' : 'text-start'
              } block w-full p-3 text-neutral-600 hover:bg-primary-base hover:text-white focus:outline-none`}
            >
              <p className={`${bold ? 'font-semibold' : ''}`}>{option}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
