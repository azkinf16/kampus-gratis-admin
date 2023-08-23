import { JadwalMkGrid } from '@/components/jadwal-mk-grid/Jadwalmk-grid';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

const EventKampusPage = () => {
  return (
    <BaseLayout>
      <div className="absolute w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <h1 className="text-center font-bold mb-7">Jadwal Acara Kampus</h1>
          <h2 className="font-semibold my-9">Selasa, 28 Februari 2023</h2>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="grid grid-cols-3 gap-5 px-14 py-10">
              <JadwalMkGrid />
              <JadwalMkGrid />
              <JadwalMkGrid />
            </div>
          </div>
          <h2 className="font-semibold my-9">Selasa, 28 Februari 2023</h2>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="grid grid-cols-3 gap-5 flex-wrap px-14 py-10">
              <JadwalMkGrid />
              <JadwalMkGrid />
              <JadwalMkGrid />
            </div>
          </div>
          <h2 className="font-semibold my-9">Selasa, 28 Februari 2023</h2>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="grid grid-cols-3 gap-5 flex-wrap px-14 py-10">
              <JadwalMkGrid />
              <JadwalMkGrid />
              <JadwalMkGrid />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default EventKampusPage;
