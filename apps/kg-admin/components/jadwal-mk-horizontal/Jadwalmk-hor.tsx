import Image from 'next/image';
import React from 'react';

export const JadwalMkHor = () => {
  return (
    <div className="flex justify-start">
      <Image src="/assets/pic-jmk.png" alt="pic-jmk" width={134} height={134}/>
      <div className="flex items-center ml-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-md">Webinar Cyber Security</h1>
          <p className="text-sm">Selasa, 28 Februari 2023</p>
          <p className="text-sm">Pukul 19:00 WIB</p>
        </div>
      </div>
    </div>
  );
};
