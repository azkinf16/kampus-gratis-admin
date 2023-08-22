import { Card } from '@/components/card/Card';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

const AnalitikPage = () => {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1165px] mt-5 mb-16">
          <h1 className="text-center font-bold mb-7 ">Analitik</h1>
          <div className="grid grid-cols-3 justify-between gap-9">
            <Card amount={2500} title="Pendaftar" />
            <Card amount={1000} title="Mahasiswa" />
            <Card amount={50} title="Mata Kuliah" />
            <Card amount={2500} title="Fakultas" />
            <Card amount={1000} title="Program Studi" />
            <Card amount={50} title="Acara Kampus" />
            <Card amount={2500} title="Sekilas Ilmu" />
            <Card amount={1000} title="Penugasan" />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AnalitikPage;
