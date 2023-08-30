'use client';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';
import BaseLayout from '@/modules/base/BaseLayout';

import React from 'react';

const UserMahasiswaPage = () => {

  const mahasiswaPageBC = [
    {
      name: 'User',
      link: 'not-routing',
    },
    {
      name: 'Mahasiswa',
      link: '/user/mahasiswa',
    },
  ];

  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="max-w-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <Breadcrumb items={mahasiswaPageBC} />
            <div className="flex">
              <Button
                plus="&#43;"
                title="Buat KRS Mahasiswa"
                buttonStyle="flex items-center justify-center bg-primary-base w-[200px] rounded text-white"
                onClick={undefined}
              />
              <Searchbar placeholder="Cari Mahasiswa" />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default UserMahasiswaPage;
