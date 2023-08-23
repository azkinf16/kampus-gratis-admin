import { JadwalMkGrid } from '@/components/jadwal-mk-grid/Jadwalmk-grid';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

const EventKampusPage = () => {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1165px] mt-5 mb-16">
          <h1 className="text-center font-bold mb-7">Jadwal Acara Kampus</h1>
          <h2 className="font-semibold my-9">Selasa, 28 Februari 2023</h2>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex justify-between flex-wrap px-14 py-10">
              <JadwalMkGrid />
              <JadwalMkGrid />
              <JadwalMkGrid />
            </div>
          </div>
          <h2 className="font-semibold my-9">Selasa, 28 Februari 2023</h2>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex justify-between flex-wrap px-14 py-10">
              <JadwalMkGrid />
              <JadwalMkGrid />
              <JadwalMkGrid />
            </div>
          </div>
          <h2 className="font-semibold my-9">Selasa, 28 Februari 2023</h2>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex justify-between flex-wrap px-14 py-10">
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
