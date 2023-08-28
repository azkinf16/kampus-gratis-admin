'use client';

import BaseLayout from '@/modules/base/BaseLayout';
import React, { useEffect, useState } from 'react';
import Table from '../../components/table/Table';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';
import axios from 'axios';
import { UserData } from '@/types';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';
export default function PengajuanPage() {
  const [showModal, setShowModal] = useState(false);
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
                title="Mahasiswa"
                buttonStyle="flex items-center justify-center bg-primary w-[200px] rounded text-white"
                onClick={() => setShowModal(true)}
              />
              <Searchbar placeholder="Cari Mahasiswa" />
            </div>
            <Modal isVisible={showModal}>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image
                  src="/assets/ic-avatar.svg"
                  alt="img"
                  width={100}
                  height={100}
                />
                <h1 className="font-semibold">Konfirmasi</h1>
                <p className="font-light">
                  Apakah anda ingin menghapus Lowongan Pekerjaan ini?
                </p>
                <div className="w-full flex flex-between gap-5">
                  <Button
                    title="Ya, Hapus"
                    plus=""
                    buttonStyle="flex items-center justify-center border-2 bg-transparent border-primary w-full h-[40px] rounded text-primary"
                    onClick={() => setShowModal(false)}
                  />
                  <Button
                    title="Tidak, Terimakasih"
                    plus=""
                    buttonStyle="flex items-center justify-center bg-primary w-full h-[40px] rounded text-white"
                    onClick={() => setShowModal(false)}
                  />
                </div>
              </div>
            </Modal>
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
