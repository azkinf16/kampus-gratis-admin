import Matakuliah from '@/components/mk/Matakuliah';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

function MatakuliahPage() {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1165px] mt-5 mb-16">
          <h1 className="text-center font-bold mb-5">Matakuliah</h1>
          <div className="flex flex-wrap justify-between py-10 px-14 gap-12">
            <Matakuliah />
            <Matakuliah />
            <Matakuliah />
            <Matakuliah />
            <Matakuliah />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default MatakuliahPage;
