'use client';

import { Card } from '@/components/card/Card';
import { JadwalMkFlex } from '@/components/jadwal-mk-flex/Jadwalmk-flex';
import Matakuliah from '@/components/mk/Matakuliah';
import BaseLayout from '@/modules/base/BaseLayout';
import Link from 'next/link';
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
            <Link href="/dashboard/analitik">
              <p className="text-sm underline">Lihat Semua</p>
            </Link>
          </div>

          <div className="mt-10 mb-12">
            <h1 className="font-bold text-lg mb-3">Mata Kuliah</h1>
            <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex justify-between py-10 px-14">
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
            <div className="flex justify-between py-14 px-24 flex-wrap gap-12">
              <JadwalMkFlex />
              <JadwalMkFlex />
              <JadwalMkFlex />
              <JadwalMkFlex />
              <JadwalMkFlex />
              <JadwalMkFlex />
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
