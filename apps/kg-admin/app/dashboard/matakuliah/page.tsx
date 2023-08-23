import Matakuliah from '@/components/mk/Matakuliah';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

function MatakuliahPage() {
  return (
    <BaseLayout>
      <div className="absolute w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <h1 className="text-center font-bold mb-5">Matakuliah</h1>
          <div className="grid grid-cols-2 py-10 px-14 gap-12">
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
