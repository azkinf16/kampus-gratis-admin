import { Card } from '@/components/card/Card';
import { IconBoard } from '@/components/icons/ic-board';
import { IconMultiUser } from '@/components/icons/ic-multiuser';
import { IconUser } from '@/components/icons/ic-user';
import { JadwalMkHor } from '@/components/jadwal-mk-horizontal/Jadwalmk-hor';
import Matakuliah from '@/components/mk/Matakuliah';
import BaseLayout from '@/modules/base/BaseLayout';
import Link from 'next/link';
import React from 'react';

export default function DashboardPage() {
  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="max-w-full mt-5 mb-16 pr-10">
          <div className="flex justify-between gap-10">
            <Card amount={2500} title="Pendaftar" logo={<IconUser />} />
            <Card amount={1000} title="Mahasiswa" logo={<IconMultiUser />} />
            <Card amount={50} title="Mata Kuliah" logo={<IconBoard />} />
          </div>

          <div className="flex justify-end my-6 font-bold">
            <Link href="/dashboard/analitik">
              <p className="text-sm underline">Lihat Semua</p>
            </Link>
          </div>

          <div className="mt-10 mb-12">
            <h1 className="font-bold text-lg mb-3">Mata Kuliah</h1>
            <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex justify-between py-10 px-14 gap-10">
                <Matakuliah />
                <Matakuliah />
              </div>

              <div className="flex justify-end pt-6 pb-10 pr-12 font-bold">
                <Link href="/dashboard/matakuliah">
                  <p className="text-sm underline">Lihat Semua</p>
                </Link>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-lg mb-3">Jadwal Mata Kuliah</h1>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="grid grid-cols-2 py-14 px-20 gap-12">
              <JadwalMkHor />
              <JadwalMkHor />
              <JadwalMkHor />
              <JadwalMkHor />
              <JadwalMkHor />
              <JadwalMkHor />
            </div>

            <div className="flex justify-end pt-6 pb-10 pr-12 font-bold">
              <Link href="/dashboard/jadwal-acara-kampus">
                <p className="text-sm underline">Lihat Semua</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
