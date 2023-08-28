import React, { useState } from 'react';
import { IconArrowDown } from '../icons/ic-arrow-down';
import { TDropdown } from '@/types';

const Dropdown = ({dataOptions}: TDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Pilih Opsi');

  const handleOptionSelect = (dataOptions: string) => {
    setSelectedOption(dataOptions);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-[#D4D4D4] text-black font-semibold px-4 py-2 rounded-md focus:outline-none flex items-center gap-3"
      >
        {selectedOption}
        <IconArrowDown />
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-full bg-white border border-[#D4D4D4] rounded-md shadow-lg">
          {dataOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100 focus:outline-none"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
