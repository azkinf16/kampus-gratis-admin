import Searchbar from '@/components/searchbar/Searchbar';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

export default function TambahArtikelPage() {
  return (
    <BaseLayout>
      <div className="absolute w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <p className="flex justify-center place-items-center font-semibold">
              Sekilas Ilmu
            </p>
            <div className="flex">
              <Searchbar placeholder="Cari judul Tugas" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <div className="inline-block w-full">
              <label htmlFor="judul-artikel">Judul Artikel</label>
              <input
                type="text"
                id="judul-artikel"
                className="w-full pl-2 border-2 border-[#e5e5e5] py-2 rounded-md"
              />
              <div className="flex justify-center w-full">
                <div className="inline-block">
                  <label htmlFor="tags">
                    Tags<span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="tags"
                    className="w-full pl-2 border-2 border-[#e5e5e5] py-2 rounded-md"
                  />
                </div>
                <div className="inline-block">
                  <label htmlFor="penulis">
                    Penulis<span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="penulis"
                    className="w-full pl-2 border-2 border-[#e5e5e5] py-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
