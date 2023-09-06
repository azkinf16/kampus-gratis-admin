'use client';

import { Card } from '@/components/card/Card';
import { RequestChart } from '@/components/chart-user/ChartUser';
import Dropdown from '@/components/dropdown/Dropdown';
import { IconArrowCircleDown } from '@/components/icons/ic-arrowcircle-down';
import { IconBoard } from '@/components/icons/ic-board';
import { IconBuilding } from '@/components/icons/ic-building';
import { IconFilter } from '@/components/icons/ic-filter';
import { IconMedalFirst } from '@/components/icons/ic-medal-1';
import { IconMedalSecond } from '@/components/icons/ic-medal-2';
import { IconMedalThird } from '@/components/icons/ic-medal-3';
import { IconMultiUser } from '@/components/icons/ic-multiuser';
import { IconUser } from '@/components/icons/ic-user';
import { JadwalMk } from '@/components/jadwal-mk/JadwalMk';
import Matakuliah from '@/components/mk/Matakuliah';
import Table from '@/components/table/Table';
import BaseLayout from '@/modules/base/BaseLayout';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default function DashboardPage() {
  const options1 = [
    'Mahasiswa dengan nilai tugas tertinggi',
    'Mahasiswa dengan poin tertinggi',
    'Mahasiswa dengan IPK tertinggi',
    'Mahasiswa dengan IPS tertinggi',
  ];
  const options2 = ['Global', 'Fakultas', 'Prodi', 'Semester'];

  const acaraKampusData = [
    {
      image: '/assets/pic-jmk.png',
      title: 'Webinar Cyber Security',
      dateEven: 'Selasa, 28 Februari 2023',
      time: 'Pukul 19:00 WIB',
    },
    {
      image: '/assets/pic-jmk.png',
      title: 'Webinar Cyber Security',
      dateEven: 'Selasa, 28 Februari 2023',
      time: 'Pukul 19:00 WIB',
    },
    {
      image: '/assets/pic-jmk.png',
      title: 'Webinar Cyber Security',
      dateEven: 'Selasa, 28 Februari 2023',
      time: 'Pukul 19:00 WIB',
    },
    {
      image: '/assets/pic-jmk.png',
      title: 'Webinar Cyber Security',
      dateEven: 'Selasa, 28 Februari 2023',
      time: 'Pukul 19:00 WIB',
    },
  ];

  const cardItems = [
    {
      amount: 2500,
      title: 'Pendaftar',
      icon: <IconUser />,
    },
    {
      amount: 1000,
      title: 'Mahasiswa',
      icon: <IconMultiUser />,
    },
    {
      amount: 50,
      title: 'Matakuliah',
      icon: <IconBoard />,
    },
    {
      amount: 3,
      title: 'Fakultas',
      icon: <IconBuilding />,
    },
  ];

  const mkData = [
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
  ];

  //datadummy for table
  const generateNumbers = (): number[] => {
    const numbers: number[] = [];
    for (let i = 1; i <= 100; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const angka = generateNumbers();

  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="max-w-full mt-5 mb-16 pr-10">
          <div className="flex justify-between gap-7">
            {cardItems.map((card, i) => (
              <Card
                amount={card.amount}
                title={card.title}
                logo={card.icon}
                key={i}
              />
            ))}
          </div>

          <div className="flex justify-end my-6 font-bold">
            <Link href="/dashboard/analitik">
              <p className="text-sm text-primary-base">Lihat Semua</p>
            </Link>
          </div>

          <div className="w-full border border-neutral-300"></div>

          <div className="grid grid-cols-2 gap-y-20 gap-x-7 mt-7 mb-20">
            <div className="h-full w-full">
              <h1 className="font-bold text-lg mb-3">Grafik Pengguna</h1>
              <div className="flex w-full justify-center items-center bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <RequestChart />
              </div>
            </div>

            <div className="h-full w-full">
              <div className="flex justify-between">
                <h1 className="font-bold text-lg mb-3">Papan Skor</h1>
                <Dropdown
                  dataOptions={options2}
                  placeholder="Filter"
                  icons={<IconFilter />}
                  reverse={true}
                  textCentre={false}
                  shadow={true}
                  bold={true}
                />
              </div>
              <div className="relative bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex flex-col gap-5 p-5">
                  <Dropdown
                    dataOptions={options1}
                    placeholder="Mahasiwa dengan nilai tugas tertinggi"
                    icons={<IconArrowCircleDown />}
                    reverse={false}
                    textCentre={false}
                    shadow={false}
                    bold={false}
                  />
                  <div className="max-h-96 overflow-y-scroll no-scrollbar">
                    <Table>
                      {angka.map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="w-full px-2 flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <Image
                                  src="/assets/pic-jmk.png"
                                  alt="user"
                                  width={50}
                                  height={50}
                                  className="rounded-full w-10 h-10"
                                />
                                <div className="flex flex-col items-start">
                                  <p className="text-sm font-bold">Mknows Jaya!</p>
                                  <p className="text-sm text-primary-base">
                                    7000 Poin
                                  </p>
                                </div>
                              </div>
                              {item === 1 ? (
                                <IconMedalFirst />
                              ) : item === 2 ? (
                                <IconMedalSecond />
                              ) : item === 3 ? (
                                <IconMedalThird />
                              ) : (
                                <p className="pr-3">{item}</p>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </Table>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 pb-5 pr-8 font-bold">
                  <Link href="/dashboard/papan-skor">
                    <p className="text-sm text-primary-base">Lihat Semua</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-full w-full">
              <h1 className="font-bold text-lg mb-3">Jadwal Acara Kampus</h1>
              <div className="relative bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="grid grid-cols-1 p-5 gap-5">
                  {acaraKampusData.map((even, i) => (
                    <Fragment key={i}>
                      <JadwalMk
                        image={even.image}
                        title={even.title}
                        dateEven={even.dateEven}
                        time={even.time}
                        position="hor"
                      />
                    </Fragment>
                  ))}
                </div>

                <div className="absolute bottom-0 right-0 pb-5 pr-8 font-bold">
                  <Link href="/dashboard/jadwal-acara-kampus">
                    <p className="text-sm text-primary-base">Lihat Semua</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-full w-full">
              <h1 className="font-bold text-lg mb-3">Mata Kuliah</h1>
              <div className="relative bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex justify-between p-5 gap-10">
                  {mkData.slice(0, 1).map((mk, i) => (
                    <Matakuliah
                      key={i}
                      image={mk.image}
                      total_student={mk.total_student}
                      title={mk.title}
                      desc={mk.desc}
                    />
                  ))}
                </div>

                <div className="absolute bottom-0 right-0 pb-5 pr-8 font-bold">
                  <Link href="/dashboard/matakuliah">
                    <p className="text-sm text-primary-base">Lihat Semua</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
