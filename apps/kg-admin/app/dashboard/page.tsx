'use client';

import { Card } from '@/components/card/Card';
import BaseLayout from '@/modules/base/BaseLayout';
import Image from 'next/image';
import React from 'react';

export default function DashboardPage() {
  return (
    <BaseLayout>
      <div className="absolute top-[15%] ml-10">
        <div className="w-[1350px] mt-5 mb-16 mr-6">
          <div className="flex justify-between">
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex justify-end my-6 font-bold">
            <u>Lihat Semua</u>
          </div>

          <div className="mt-10 mb-12">
            <h1 className="font-bold text-lg mb-3">Mata Kuliah</h1>
            <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex justify-between py-10 px-14">
                <div className="w-[600px] flex flex-col justify-start gap-4">
                  <Image
                    src="/assets/pic-mk.png"
                    alt="pic" //altnya belum di fix
                    width={600}
                    height={600}
                  />
                  <div className="py-1 px-2 w-max bg-warning-200 rounded-lg">
                    <p className="font-semibold text-sm">322 Mahasiswa</p>
                  </div>
                  <h1 className="font-bold text-xl">Manajemen Keuangan</h1>
                  <p className="font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    velit repellat cupiditate hic rerum quos nisi enim at
                    similique necessitatibus, quia, nostrum officia ducimus,
                    odit deserunt ad explicabo aperiam magni?
                  </p>
                </div>
                <div className="w-[600px] flex flex-col justify-start gap-4">
                  <Image
                    src="/assets/pic-mk.png"
                    alt="pic" //altnya belum di fix
                    width={600}
                    height={600}
                  />
                  <div className="py-1 px-2 w-max bg-warning-200 rounded-lg">
                    <p className="font-semibold text-sm">322 Mahasiswa</p>
                  </div>
                  <h1 className="font-semibold text-xl">Manajemen Keuangan</h1>
                  <p className="font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    velit repellat cupiditate hic rerum quos nisi enim at
                    similique necessitatibus, quia, nostrum officia ducimus,
                    odit deserunt ad explicabo aperiam magni?
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-6 pb-10 pr-12 font-bold">
                <u>Lihat Semua</u>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-lg mb-3">Jadwal Mata Kuliah</h1>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex justify-between py-14 px-24 flex-wrap gap-12">
              <div className="flex justify-between">
                <Image
                  src="/assets/pic-jmk.png"
                  alt="pic" //altnya belum di fix
                  width={250}
                  height={250}
                />
                <div className="flex items-center ml-7">
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-xl">
                      Webinar Cyber Security
                    </h1>
                    <p className="text-lg">Selasa, 28 Februari 2023</p>
                    <p className="text-lg">Pukul 19:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Image
                  src="/assets/pic-jmk.png"
                  alt="pic" //altnya belum di fix
                  width={250}
                  height={250}
                />
                <div className="flex items-center ml-7">
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-xl">
                      Webinar Cyber Security
                    </h1>
                    <p className="text-lg">Selasa, 28 Februari 2023</p>
                    <p className="text-lg">Pukul 19:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Image
                  src="/assets/pic-jmk.png"
                  alt="pic" //altnya belum di fix
                  width={250}
                  height={250}
                />
                <div className="flex items-center ml-7">
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-xl">
                      Webinar Cyber Security
                    </h1>
                    <p className="text-lg">Selasa, 28 Februari 2023</p>
                    <p className="text-lg">Pukul 19:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Image
                  src="/assets/pic-jmk.png"
                  alt="pic" //altnya belum di fix
                  width={250}
                  height={250}
                />
                <div className="flex items-center ml-7">
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-xl">
                      Webinar Cyber Security
                    </h1>
                    <p className="text-lg">Selasa, 28 Februari 2023</p>
                    <p className="text-lg">Pukul 19:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Image
                  src="/assets/pic-jmk.png"
                  alt="pic" //altnya belum di fix
                  width={250}
                  height={250}
                />
                <div className="flex items-center ml-7">
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-xl">
                      Webinar Cyber Security
                    </h1>
                    <p className="text-lg">Selasa, 28 Februari 2023</p>
                    <p className="text-lg">Pukul 19:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Image
                  src="/assets/pic-jmk.png"
                  alt="pic" //altnya belum di fix
                  width={250}
                  height={250}
                />
                <div className="flex items-center ml-7">
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-xl">
                      Webinar Cyber Security
                    </h1>
                    <p className="text-lg">Selasa, 28 Februari 2023</p>
                    <p className="text-lg">Pukul 19:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-6 pb-10 pr-12 font-bold">
              <u>Lihat Semua</u>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
