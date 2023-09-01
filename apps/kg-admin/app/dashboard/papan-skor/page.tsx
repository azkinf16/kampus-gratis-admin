import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Dropdown from '@/components/dropdown/Dropdown';
import { IconArrowCircleDown } from '@/components/icons/ic-arrowcircle-down';
import { IconFilter } from '@/components/icons/ic-filter';
import { IconMedalFirst } from '@/components/icons/ic-medal-1';
import { IconMedalSecond } from '@/components/icons/ic-medal-2';
import { IconMedalThird } from '@/components/icons/ic-medal-3';
import Table from '@/components/table/Table';
import BaseLayout from '@/modules/base/BaseLayout';
import Image from 'next/image';
import React from 'react';

const PapanSkorPage = () => {
  const papanSkorPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Papan Skor',
      link: '/dashboard/papan-skor',
    },
  ];

  const options1 = [
    'Mahasiswa dengan nilai tugas tertinggi',
    'Mahasiswa dengan poin tertinggi',
    'Mahasiswa dengan IPK tertinggi',
    'Mahasiswa dengan IPS tertinggi',
  ];

  const options2 = ['Global', 'Fakultas', 'Prodi', 'Semester'];

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
        <div className="w-max-full mt-5 mb-16 pr-10">
          <div className="flex justify-start">
            <Breadcrumb items={papanSkorPageBC} />
          </div>
          <div className="flex justify-end">
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
          <div className="flex flex-col gap-5 mt-5">
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
                          <div className="flex flex-col">
                            <p className="text-sm font-bold">Asu Kelor</p>
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
        </div>
      </div>
    </BaseLayout>
  );
};

export default PapanSkorPage;
