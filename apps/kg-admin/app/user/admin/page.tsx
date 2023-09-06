'use client';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Button from '@/components/button/Button';
import { IconDelete } from '@/components/icons/ic-delete';
import { IconEdit } from '@/components/icons/ic-edit';
import Searchbar from '@/components/searchbar/Searchbar';
import Table from '@/components/table/Table';
import BaseLayout from '@/modules/base/BaseLayout';
import { useUserAdmin } from 'hooks/userAdmin/hook';
import { useSession } from 'next-auth/react';
import React from 'react';

const UserAdminPage = () => {
  const { data } = useUserAdmin();
  console.log(data);
  const { data: session, status } = useSession();
  console.log('session', session, status);
  const userAdminPageBC = [
    {
      name: 'User',
      link: 'not-routing',
    },
    {
      name: 'Admin',
      link: '/user/admin',
    },
  ];
  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="max-w-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <Breadcrumb items={userAdminPageBC} />
            <div className="flex">
              <Button
                plus="&#43;"
                title="Pengguna"
                buttonStyle="flex items-center justify-center bg-primary-base w-full px-3 rounded text-white"
                onClick={undefined}
              />
              <Searchbar placeholder="Cari Mahasiswa" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <Table>
              <tr>
                <th>No</th>
                <th>Nama Pengguna</th>
                <th>Role</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {data?.data?.map((user: any, i) => (
                <tr key={user.id}>
                  <td>{i+1}</td>
                  <td>{user.full_name}</td>
                  <td>{user.Roles.map((role : any) => role.name.toLowerCase())}</td>
                  <td>admin1@gmail.com</td>
                  <td>
                    <div className="flex gap-3 justify-center items-center">
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
};

export default UserAdminPage;
