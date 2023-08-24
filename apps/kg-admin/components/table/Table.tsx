'use client';
import React, { useEffect, useState } from 'react';
// import { users } from './data';
import axios from 'axios';
import { UserData } from '@/types';

const Table = () => {
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
    <div className="rounded-lg">
      <div className="p-4">
        <table className="w-full table-auto">
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
        </table>
      </div>
    </div>
  );
};

export default Table;
// function setItems(drinks: any) {
//   throw new Error('Function not implemented.');
// }
