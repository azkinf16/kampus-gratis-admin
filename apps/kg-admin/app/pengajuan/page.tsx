'use client';

import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';
import Table from '../../components/table/Table';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';
export default function PengajuanPage() {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1165px] mt-5 mb-16">
          <div className="flex justify-between mb-10">
            <p className="flex justify-center place-items-center">
              Program Studi Akuntansi
            </p>
            <div className="flex">
              <Button title="Buat KRS Mahasiswa" />
              <Searchbar placeholder="Cari Mahasiswa" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <div className="border">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
