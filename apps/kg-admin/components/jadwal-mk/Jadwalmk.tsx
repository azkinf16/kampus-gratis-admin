import Image from 'next/image';
import React from 'react';

export const Jadwalmk = () => {
  return (
    <div className="flex justify-between">
      <Image
        src="/assets/pic-jmk.png"
        alt="pic" //altnya belum di fix
        width={250}
        height={250}
      />
      <div className="flex items-center ml-7">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Webinar Cyber Security</h1>
          <p className="text-lg">Selasa, 28 Februari 2023</p>
          <p className="text-lg">Pukul 19:00 WIB</p>
        </div>
      </div>
    </div>
  );
};
