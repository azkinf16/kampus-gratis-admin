'use client';
import Table from '@/components/table/Table';
import BaseLayout from '@/modules/base/BaseLayout';
import { UserData } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';
import { IconEdit } from '@/components/icons/ic-edit';
import { IconDelete } from '@/components/icons/ic-delete';
import { useRouter } from 'next/navigation';

export default function SekilasIlmuPage() {
  const router = useRouter();
  const [users, setUsers] = useState<UserData[]>([
    {
      id: 0,
      name: { firstname: '', lastname: '' },
      email: '',
      username: '',
    },
  ]);
  const GetData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users');

      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  const handleClick = () => {
    router.push('sekilas-ilmu/tambah-artikel');
  };
  return (
    <BaseLayout>
      <div className="absolute w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <p className="flex justify-center place-items-center font-semibold">
              Sekilas Ilmu
            </p>
            <div className="flex">
              <Button
                title="Artikel"
                buttonStyle="flex items-center justify-center bg-primary w-[200px] rounded text-white"
                onClick={handleClick}
                plus="&#43;"
              />
              <Searchbar placeholder="Cari judul Tugas" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <Table>
              <tr>
                <th>No</th>
                <th>Judul Artikel</th>
                <th>Tanggal Upload</th>
                <th>Tags</th>
                <th>Action</th>
              </tr>
              {users.map((user: UserData) => (
                <tr key={user.id} className="bg-white">
                  <td>{user.id}</td>
                  <td>{user.name?.firstname}</td>
                  <td>{user.name?.lastname}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="flex justify-center gap-3">
                      <IconEdit />
                      <IconDelete />
                    </div>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
