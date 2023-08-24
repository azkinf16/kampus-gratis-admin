import Image from 'next/image';
import React from 'react';

export default function Matakuliah() {
  return (
    <div className="w-full flex flex-col justify-start gap-4">
      <Image src="/assets/pic-mk.png" alt="pic-mk" width={500} height={500} />
      <div className="py-1 px-2 w-max bg-warning-200 rounded-lg">
        <p className="font-semibold text-xs">322 Mahasiswa</p>
      </div>
      <h1 className="font-bold text-lg">Manajemen Keuangan</h1>
      <p className="font-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit
        repellat cupiditate hic rerum quos nisi enim at similique
        necessitatibus, quia, nostrum officia ducimus, odit deserunt ad
        explicabo aperiam magni?
      </p>
    </div>
  );
}
