'use client';

import Button from '@/components/button/Button';
import Dropdown from '@/components/dropdown/Dropdown';
import { IconArrowDown } from '@/components/icons/ic-arrow-down';
import Searchbar from '@/components/searchbar/Searchbar';
import Table from '@/components/table/Table';
import BaseLayout from '@/modules/base/BaseLayout';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function UserPage() {
  const route = useRouter();
  const options = ['Mahasiswa', 'Admin'];
  const routeClick = () => {
    route.push('/user/tambah-user');
  };
  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="max-w-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <Dropdown
              dataOptions={options}
              placeholder="User"
              icons={<IconArrowDown />}
              reverse={false}
              textCentre={true}
              shadow={false}
              bold={false}
            />
            <div className="flex">
              <Button
                plus="&#43;"
                title="Buat KRS Mahasiswa"
                buttonStyle="flex items-center justify-center bg-primary-base w-[200px] rounded text-white"
                onClick={routeClick}
              />
              <Searchbar placeholder="Cari Mahasiswa" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <Table>
              <tr>
                <th>No</th>
                <th>Nama Mahasiswa</th>
                <th>NIM</th>
                <th>Status KRS</th>
                <th>KRS</th>
                <th>Action</th>
              </tr>
              {/* {users.map((user: UserData) => (
                <tr key={user.id} className="bg-white">
                  <td>{user.id}</td>
                  <td>{user.name?.firstname}</td>
                  <td>{user.name?.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                </tr>
              ))} */}
            </Table>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
