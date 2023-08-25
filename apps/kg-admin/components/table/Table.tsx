'use client';

import React from 'react';
import { TTable } from '@/types';

const Table = ({ children }: TTable) => {
  return (
    <div className="rounded-lg">
      <div className="p-4">
        <table className="w-full table-auto">
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
