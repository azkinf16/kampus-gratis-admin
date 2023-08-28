import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[calc(100%-270px)] h-[72px] flex items-center justify-end z-50">
      <div className="flex gap-3 mr-4">
        <div className="flex flex-col justify-start font-medium">
          <p>Welcome,</p>
          <p className="text-sm">Admin 01</p>
        </div>

        <div className="border border-primary-base rounded-full flex justify-center items-center p-[1px]">
          <Image
            src="/assets/pic-mk.png"
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
