import { TBaseLayout } from '../../types';
import Sidebar from '../../components/sidebar/Sidebar';
import React from 'react';
import { IconDashboard } from '../../components/icons/ic-dashboard';

const BaseLayout = ({ children }: TBaseLayout) => {
  const DataSidebar = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
  ];
  return (
    <Sidebar dataSidebar={DataSidebar}>
      {/* belum lengkap */}
      <div className="flex justify-end mr-4">Welcome</div>
      <section>{children}</section>
    </Sidebar>
  );
};

export default BaseLayout;
