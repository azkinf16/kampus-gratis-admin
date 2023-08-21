import { TBaseLayout } from '../../types';
import Sidebar from '../../components/sidebar/Sidebar';
import React from 'react';
import { IconDashboard } from '@/components/icons/ic-dashboard';
import { IconPengajuan } from '@/components/icons/ic-pengajuan';
import { IconAdministrasi } from '@/components/icons/ic-administrasi';
import { IconRencanaStudi } from '@/components/icons/ic-rencana-studi';
import { IconNilaiSertifikat } from '@/components/icons/ic-nilai-sertifikat';
import { IconRuangDiskusi } from '@/components/icons/ic-ruang-diskusi';
import { IconKonsulLayanan } from '@/components/icons/ic-konsul-layanan';
import { IconKalender } from '@/components/icons/ic-kalender';
import { IconSekilasIlmu } from '@/components/icons/ic-sekilas-ilmu';
import { IconAcaraKampus } from '@/components/icons/ic-acara-kampus';
import { IconSalurKerja } from '@/components/icons/ic-salur-kerja';

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
      title: 'Administrasi',
      path: '/administrasi',
      icon: <IconAdministrasi />,
    },
    {
      title: 'Rencana Studi',
      path: '/rencana-studi',
      icon: <IconRencanaStudi />,
    },
    {
      title: 'Nilai & Sertifikat',
      path: '/nilai-sertifikat',
      icon: <IconNilaiSertifikat />,
    },
    {
      title: 'Ruang Diskusi',
      path: '/ruang-diskusi',
      icon: <IconRuangDiskusi />,
    },
    {
      title: 'Konsultasi & Layanan',
      path: '/konsultasi-layanan',
      icon: <IconKonsulLayanan />,
    },
    {
      title: 'Kalender Saya',
      path: '/kalender',
      icon: <IconKalender />,
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
  ];
  return (
    <Sidebar dataSidebar={DataSidebar}>
      {/* belum lengkap */}
      <div className="flex justify-end mr-4">Welcome</div>
      <section className="absolute top-[20%]">{children}</section>
    </Sidebar>
  );
};

export default BaseLayout;
