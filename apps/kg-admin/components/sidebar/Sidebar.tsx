import { TSidebarProp } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({ children, dataSidebar }: TSidebarProp) => {
  const normalLink =
    'group flex gap-[6px] rounded-md cursor-pointer p-[8px] items-center text-neutral-600 hover:bg-[#106FA4] hover:text-white';
  return (
    <div className="flex justify-normal w-full">
      <aside
        id="separator-sidebar"
        className="absolute lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-80 h-full transition-transform text-black bg-white"
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4  text-black bg-white border-b">
          <div>
            <Image
              src="./assets/ic-logo.svg"
              alt="logo"
              className="w-[200px] h-auto p-6"
              width={20}
              height={20}
            />
          </div>
          <div className="pt-4 font-medium w-full border-[#F5F5F5] ">
            {dataSidebar?.map((x, i) => {
              return (
                <div key={i} className="my-[12px]">
                  <Link className={normalLink} href={x.path}>
                    <span className="p-1">{x.icon}</span>
                    <span>{x.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
      <div className="bg-white shadow-lg w-full h-[72px]">{children}</div>
    </div>
  );
};

export default Sidebar;
