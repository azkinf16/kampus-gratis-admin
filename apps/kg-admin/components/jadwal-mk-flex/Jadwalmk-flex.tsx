import Image from 'next/image';
import React from 'react';

export const JadwalMkFlex = () => {
  return (
    <div className="flex justify-between">
      <Image src="/assets/pic-jmk.png" alt="pic-jmk" width={200} height={200} />
      <div className="flex items-center ml-7">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-lg">Webinar Cyber Security</h1>
          <p className="text-md">Selasa, 28 Februari 2023</p>
          <p className="text-md">Pukul 19:00 WIB</p>
        </div>
      </div>
    </div>
  );
};
