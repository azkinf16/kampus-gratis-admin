'use client';

import { TSidebarProp } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({ children, dataSidebar }: TSidebarProp) => {
  const normalLink =
    'group flex gap-[6px] rounded-md cursor-pointer p-[8px] items-center text-neutral-600 hover:bg-primary hover:text-white';
  return (
    <div className="flex justify-normal w-full">
      <aside
        id="separator-sidebar"
        className="fixed lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-[250px] h-full transition-transform text-black"
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4  text-black bg-white">
          <div>
            <Image
              src="/assets/ic-logo.svg"
              alt="logo"
              className="m-6"
              width={100}
              height={100}
            />
          </div>
          <div className="py-4 font-medium w-full">
            {dataSidebar?.map((x, i) => {
              return (
                <div key={i} className="my-[12px]">
                  <Link className={normalLink} href={x.path}>
                    <span className="p-1">{x.icon}</span>
                    <span className="text-md">{x.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
      <div className="bg-white shadow-lg w-[calc(100%-250px)] h-[72px]">
        <div className="pr-5 pt-3">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
