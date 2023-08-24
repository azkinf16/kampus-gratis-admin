'use client';

import React from 'react';
import { TTable } from '@/types';

const Table = ({ children }: TTable) => {
  return (
    <div className="rounded-lg">
      <div className="p-4">
        <table className="w-full table-auto">
          <tbody>
            <tr>
              <th>No</th>
              <th>Nama Mahasiswa</th>
              <th>NIM</th>
              <th>Status KRS</th>
              <th>KRS</th>
              <th>Action</th>
            </tr>

            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
