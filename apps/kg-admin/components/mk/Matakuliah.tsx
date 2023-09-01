import { TMatakuliah } from '@/types';
import Image from 'next/image';
import React from 'react';

export default function Matakuliah({image, total_student, title, desc}: TMatakuliah) {
  return (
    <div className="w-full flex flex-col justify-start gap-4">
      <Image src={image} alt="pic-mk" width={500} height={500} className='w-full'/>
      <div className="py-1 px-2 w-max bg-warning-200 rounded-lg">
        <p className="font-semibold text-xs">{total_student} Mahasiswa</p>
      </div>
      <h1 className="font-bold text-md">{title}</h1>
      <p className="text-md">
        {desc}
      </p>
    </div>
  );
}
