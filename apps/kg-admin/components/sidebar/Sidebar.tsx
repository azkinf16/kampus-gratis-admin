'use client';

import { TSidebarProp } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Popover from '@/components/popover/Popover';

const Sidebar = ({ children, dataSidebar }: TSidebarProp) => {
  const pathname = usePathname();
  const [openUser, setOpenUser] = useState(false);
  const [openRencanaStudi, setOpenRencanaStudi] = useState(false);
  const [openNilaiSertif, setOpenNilaiSertif] = useState(false);
  const [openKonsulLayanan, setOpenKonsulLayanan] = useState(false);

  const menuUserPopover = ['Mahasiswa', 'Admin'];
  const menuRencanaStudiPopover = ['Fakultas', 'Program Studi', 'Mata Kuliah'];
  const menuNilaiSertifPopover = ['Nilai', 'Sertifikat'];
  const menuKonsulLayananPopover = ['Konsultasi', 'Layanan'];
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
              const isActive =
                pathname === x.path || pathname.startsWith(`${x.path}/`);
              const handleClick = () => {
                if (x.path === '/user') {
                  setOpenUser(!openUser);
                  setOpenRencanaStudi(false)
                  setOpenNilaiSertif(false)
                  setOpenKonsulLayanan(false)
                } else if (x.path === '/rencana-studi') {
                  setOpenRencanaStudi(!openRencanaStudi);
                  setOpenUser(false)
                  setOpenNilaiSertif(false)
                  setOpenKonsulLayanan(false)
                } else if (x.path === '/nilai-sertifikat') {
                  setOpenNilaiSertif(!openNilaiSertif);
                  setOpenRencanaStudi(false)
                  setOpenUser(false)
                  setOpenKonsulLayanan(false)
                } else if (x.path === '/konsultasi-layanan') {
                  setOpenKonsulLayanan(!openKonsulLayanan);
                  setOpenRencanaStudi(false)
                  setOpenNilaiSertif(false)
                  setOpenUser(false)
                }
              };
              return (
                <div key={i} className="relative my-[0.5px]">
                  {x.title?.includes('User') && (
                    <>
                      {openUser && (
                        <Popover title="User" menus={menuUserPopover} />
                      )}
                    </>
                  )}
                  {x.title?.includes('Rencana Studi') && (
                    <>
                      {openRencanaStudi && (
                        <Popover
                          title="Rencana Studi"
                          menus={menuRencanaStudiPopover}
                        />
                      )}
                    </>
                  )}
                  {x.title?.includes('Nilai dan Sertifikat') && (
                    <>
                      {openNilaiSertif && (
                        <Popover
                          title="Nilai & Sertifikat"
                          menus={menuNilaiSertifPopover}
                        />
                      )}
                    </>
                  )}
                  {x.title?.includes('Konsultasi & Layanan') && (
                    <>
                      {openKonsulLayanan && (
                        <Popover
                          title="Konsultasi & Layanan"
                          menus={menuKonsulLayananPopover}
                        />
                      )}
                    </>
                  )}
                  <Link
                    className={isActive ? activeLink : normalLink}
                    href={
                      x.path === '/user' ||
                      x.path === '/rencana-studi' ||
                      x.path === '/nilai-sertifikat' ||
                      x.path === '/konsultasi-layanan'
                        ? pathname
                        : x.path
                    }
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
