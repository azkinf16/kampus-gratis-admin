import { Card } from '@/components/card/Card';
import { IconBoard } from '@/components/icons/ic-board';
import { IconMultiUser } from '@/components/icons/ic-multiuser';
import { IconUser } from '@/components/icons/ic-user';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

const AnalitikPage = () => {
  return (
    <BaseLayout>
      <div className="right-0 absolute w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <h1 className="text-center font-bold mb-7 ">Analitik</h1>
          <div className="grid grid-cols-3 justify-between gap-10">
            <Card amount={2500} title="Pendaftar" logo={<IconUser />} />
            <Card amount={1000} title="Mahasiswa" logo={<IconMultiUser />} />
            <Card amount={50} title="Mata Kuliah" logo={<IconBoard />} />
            <Card amount={2500} title="Fakultas" logo={<IconUser />} />
            <Card
              amount={1000}
              title="Program Studi"
              logo={<IconMultiUser />}
            />
            <Card amount={50} title="Acara Kampus" logo={<IconBoard />} />
            <Card amount={2500} title="Sekilas Ilmu" logo={<IconUser />} />
            <Card amount={1000} title="Penugasan" logo={<IconMultiUser />} />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AnalitikPage;
