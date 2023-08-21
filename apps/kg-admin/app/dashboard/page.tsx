'use client';

import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

export default function DashboardPage() {
  return (
    <BaseLayout>
      <div className="absolute top-[20%] ml-10">
        <div className="w-full">
          <div className="mt-3 flex justify-between">
            <div className="bg-white w-[310px] h-[223px]">
              <div className="bg-white py-10 rounded-xl shadow-inner grid place-content-center">
                <p className="">halo</p>
                <p className="">halo</p>
              </div>
              <div className="py-10 bg-blue-500 rounded-b-lg">
                <p className="text-center font-semibold">anjing</p>
              </div>
            </div>
            <div className="bg-white w-[400px] h-[300px]">
              <div className="bg-white py-10 rounded-xl shadow-inner grid place-content-center">
                <p className="">halo</p>
                <p className="">halo</p>
              </div>
              <div className="py-10 bg-blue-500 rounded-b-lg">
                <p className="text-center font-semibold">anjing</p>
              </div>
            </div>
            <div className="bg-white w-[310px] h-[223px]">
              <div className="bg-white py-10 rounded-xl shadow-inner grid place-content-center">
                <p className="">halo</p>
                <p className="">halo</p>
              </div>
              <div className="py-10 bg-blue-500 rounded-b-lg">
                <p className="text-center font-semibold">anjing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
