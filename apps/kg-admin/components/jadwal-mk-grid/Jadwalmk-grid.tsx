import Image from 'next/image';
import React from 'react';

export const JadwalMkGrid = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <Image
          src="/assets/pic-jmk.png"
          alt="pic-jmk"
          width={280}
          height={280}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg">Webinar Cyber Security</h1>
        <p className="text-md">Selasa, 28 Februari 2023</p>
        <p className="text-md">Pukul 19:00 WIB</p>
      </div>
    </div>
  );
};
