'use client';
import BaseLayout from '@/modules/base/BaseLayout';
import { UserData } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      <div className="absolute top-[20%]">Ini Isi SekilasIlmu</div>
    </BaseLayout>
  );
}
