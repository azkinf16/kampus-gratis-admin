'use client';

import BaseLayout from '@/modules/base/BaseLayout';
import Image from 'next/image';
import React from 'react';
import Table from '../../components/table/Table';
export default function PengajuanPage() {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1165px] mt-5 mb-16">
          <div className="flex justify-between">
            <p className="flex justify-center place-items-center">
              Program Studi Akuntansi
            </p>
            <div className="flex">
              <button className="bg-primary w-[200px] rounded text-white">
                Buat KRS Mahasiswa
              </button>
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
                    <Image
                      src={'/assets/ic-search-mhs.svg'}
                      alt="search-icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="ml-4 w-[300px] h-[40px] p-4 pl-10 text-sm text-gray-900"
                    placeholder="Cari Mahasiswa"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <Table></Table>
        </div>
      </div>
    </BaseLayout>
  );
}
