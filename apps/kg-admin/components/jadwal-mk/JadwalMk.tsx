import { TJadwalMk} from '@/types';
import Image from 'next/image';
import React, { Fragment } from 'react';

export const JadwalMk = ({
  image,
  title,
  dateEven,
  time,
  position
}: TJadwalMk) => {
  let content = null;

  if (position === 'hor') {
    content = (
      <div className="flex justify-start">
        <Image
          src="/assets/pic-jmk.png"
          alt="pic-jmk"
          width={134}
          height={134}
        />
        <div className="flex items-center ml-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-md">Webinar Cyber Security</h1>
            <p className="text-sm">Selasa, 28 Februari 2023</p>
            <p className="text-sm">Pukul 19:00 WIB</p>
          </div>
        </div>
      </div>
    );
  } else if (position === 'vert') {
    content = (
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Image src={image} alt="pic-jmk" width={320} height={280} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-md">{dateEven}</p>
          <p className="text-md">{time}</p>
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};
