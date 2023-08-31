import { TModal } from '@/types';
import React from 'react';

const Modal = ({ isVisible, children }: TModal) => {
  return (
    <>
      {isVisible && (
        <div
          id="wrapper"
          className="z-50 fixed inset-0 bg-black bg-opacity-25
    backdrop-blur-sm flex justify-center items-center"
        >
          <div className="bg-white rounded-lg p-9">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
