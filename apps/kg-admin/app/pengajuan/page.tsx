'use client';

import BaseLayout from '@/modules/base/BaseLayout';
import React, { useEffect, useState } from 'react';
import Table from '../../components/table/Table';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';
import axios from 'axios';
import { UserData } from '@/types';
export default function PengajuanPage() {
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
  return (
    <BaseLayout>
      <div className="absolute w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <p className="flex justify-center place-items-center font-semibold">
              Program Studi Akuntansi
            </p>
            <div className="flex">
              <Button
                plus="&#43;"
                title="Buat KRS Mahasiswa"
                buttonStyle="flex items-center justify-center bg-primary w-[200px] rounded text-white"
              />
              <Searchbar placeholder="Cari Mahasiswa" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <Table>
              {users.map((user: UserData) => (
                <tr key={user.id} className="bg-white">
                  <td>{user.id}</td>
                  <td>{user.name?.firstname}</td>
                  <td>{user.name?.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </Table>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
