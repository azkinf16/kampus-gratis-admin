'use client';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';
import Table from '@/components/table/Table';
import BaseLayout from '@/modules/base/BaseLayout';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="max-w-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <Breadcrumb items={mahasiswaPageBC} />
            <div className="flex">
              <Button
                plus="&#43;"
                title="Pengguna"
                buttonStyle="flex items-center justify-center bg-primary-base w-full px-3 rounded text-white"
                onClick={() => router.push('/user/tambah-user')}
              />
              <Searchbar placeholder="Cari Pengguna" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <Table>
              <tr>
                <th>No</th>
                <th>Nama Pengguna</th>
                <th>Role</th>
                <th>Email</th>
                <th>Berkas</th>
                <th>Action</th>
              </tr>
              {/* {users.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name?.firstname}</td>
                  <td>{user.name?.lastname}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="flex justify-evenly">
                      <IconAccept />
                      <IconReject />
                    </div>
                  </td>
                </tr>
              ))} */}
            </Table>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default UserMahasiswaPage;
