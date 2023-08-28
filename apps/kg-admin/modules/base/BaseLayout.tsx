import { TBaseLayout } from '@/types';
import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';
import { IconDashboard } from '@/components/icons/ic-dashboard';
import { IconUserMenu } from '@/components/icons/ic-user-menu';
import { IconSekilasIlmu } from '@/components/icons/ic-sekilas-ilmu';
import Navbar from '@/components/navbar/Navbar';

const BaseLayout = ({ children }: TBaseLayout) => {
  const DataSidebar = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'User',
      path: '/user',
      icon: <IconUserMenu />,
    },
    {
      title: 'Sekilas Ilmu',
      path: '/sekilas-ilmu',
      icon: <IconSekilasIlmu />,
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
