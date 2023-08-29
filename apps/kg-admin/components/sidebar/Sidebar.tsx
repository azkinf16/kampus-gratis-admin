'use client';

import { TSidebarProp } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Sidebar = ({ children, dataSidebar }: TSidebarProp) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeLink =
    'flex rounded-md cursor-pointer gap-2 p-2 items-center bg-white text-neutral-600 shadow-[0_8px_30px_rgb(0,0,0,0.12)]';
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
              const isActive = pathname === x.path;
              const handleClick = () => {
                x.path === 'user' ? setOpen(true) : setOpen(false);
              };
              return (
                <div key={i} className="relative my-[0.5px]">
                  {x.path?.includes('user') && (
                    <>
                      {open && (
                        <div className="flex flex-col absolute bg-white right-0 translate-x-16 shadow-md p-3 rounded-md z-50">
                          <h1 className="text-md font-bold">User</h1>
                          <div className="border border-neutral-300 w-24 mt-1 mb-3"></div>
                          <div className='flex flex-col'>
                            <Link href="/user/mahasiswa">
                              <p className="text-sm text-neutral-600 hover:text-primary-base">
                                Mahasiswa
                              </p>
                            </Link>
                            <Link href="/user/admin">
                              <p className="text-sm text-neutral-600 hover:text-primary-base">
                                Admin
                              </p>
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <Link
                    className={isActive ? activeLink : normalLink}
                    href={x.path === 'user' ? pathname : x.path}
                    onClick={handleClick}
                  >
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
