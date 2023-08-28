'use client';

import { TSidebarProp } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({ children, dataSidebar }: TSidebarProp) => {
  const normalLink =
    'group flex gap-[6px] rounded-md cursor-pointer p-[8px] items-center text-sm text-neutral-600 hover:bg-primary-base hover:text-white';
  return (
    <div className="flex justify-normal w-full">
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-50 lg:sm:translate-x-0 w-[250px] h-screen transition-transform text-black"
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
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
                <div key={i} className="my-[0.5px]">
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
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
