import { Card } from '@/components/card/Card';
import { Jadwalmk } from '@/components/jadwal-mk/Jadwalmk';
import Matakuliah from '@/components/mk/Matakuliah';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

export default function DashboardPage() {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1165px] mt-5 mb-16">
          <div className="flex justify-between">
            <Card amount={2500} title="Pendaftar" />
            <Card amount={1000} title="Mahasiswa" />
            <Card amount={50} title="Mata Kuliah" />
          </div>

          <div className="flex justify-end my-6 font-bold">
            <u className="text-sm">Lihat Semua</u>
          </div>

          <div className="mt-10 mb-12">
            <h1 className="font-bold text-lg mb-3">Mata Kuliah</h1>
            <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex justify-between py-10 px-14">
                <Matakuliah />
                <Matakuliah />
              </div>

              <div className="flex justify-end pt-6 pb-10 pr-12 font-bold">
                <u className="text-sm">Lihat Semua</u>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-lg mb-3">Jadwal Mata Kuliah</h1>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex justify-between py-14 px-24 flex-wrap gap-12">
              <Jadwalmk />
              <Jadwalmk />
              <Jadwalmk />
              <Jadwalmk />
              <Jadwalmk />
              <Jadwalmk />
            </div>
            <div className="flex justify-end pt-6 pb-10 pr-12 font-bold">
              <u className="text-sm">Lihat Semua</u>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
