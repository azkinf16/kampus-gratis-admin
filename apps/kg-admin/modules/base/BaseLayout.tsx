import { TBaseLayout } from '@/types';
import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';
import { IconDashboard } from '@/components/icons/ic-dashboard';
import { IconUserMenu } from '@/components/icons/ic-user-menu';
import { IconSekilasIlmu } from '@/components/icons/ic-sekilas-ilmu';
import Navbar from '@/components/navbar/Navbar';
import { IconPengajuan } from '@/components/icons/ic-pengajuan';
import { IconRencanaStudi } from '@/components/icons/ic-rencana-studi';
import { IconNilaiSertifikat } from '@/components/icons/ic-nilai-sertifikat';
import { IconKonsulLayanan } from '@/components/icons/ic-konsul-layanan';
import { IconAcaraKampus } from '@/components/icons/ic-acara-kampus';
import { IconSalurKerja } from '@/components/icons/ic-salur-kerja';
import { IconRuangDiskusi } from '@/components/icons/ic-ruang-diskusi';

const BaseLayout = ({ children }: TBaseLayout) => {
  const DataSidebar = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Pengajuan',
      path: '/pengajuan',
      icon: <IconPengajuan />,
    },
    {
      title: 'User',
      path: '/user',
      icon: <IconUserMenu />,
    },
    {
      title: 'Rencana Studi',
      path: '/rencana-studi',
      icon: <IconRencanaStudi />,
    },
    {
      title: 'Nilai dan Sertifikat',
      path: '/nilai-sertifikat',
      icon: <IconNilaiSertifikat />,
    },
    {
      title: 'Konsultasi & Layanan',
      path: '/konsultasi-layanan',
      icon: <IconKonsulLayanan />,
    },
    {
      title: 'Sekilas Ilmu',
      path: '/sekilas-ilmu',
      icon: <IconSekilasIlmu />,
    },
    {
      title: 'Acara Kampus',
      path: '/acara-kampus',
      icon: <IconAcaraKampus />,
    },
    {
      title: 'Penyaluran Kerja',
      path: '/penyaluran-kerja',
      icon: <IconSalurKerja />,
    },
    {
      title: 'Ruang Diskusi',
      path: '/ruang-diskusi',
      icon: <IconRuangDiskusi />,
    },
    {
      title: 'Perencanaan Karir',
      path: '/perencanaan-karir',
      icon: <IconSalurKerja />,
    },
  ];
  return (
    <Sidebar dataSidebar={DataSidebar}>
      <div className="flex justify-end">
        <Navbar />
      </div>
      <section>{children}</section>
    </Sidebar>
  );
};

export default BaseLayout;
