'use client';

import { FC, ReactElement } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { ProfileSidebar } from './sidebar';
import { ViewProfileBreadCumbs } from '../../utils/constantProfile';
import { ViewProfileModule } from './section/view-profile';
import { EditProfileSection } from './section/edit-profile';
import { ChangePasswordSection } from './section/change-password';

export const ProfileModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  // const pathname = router.asPat?h;

  const eventPath = [
    '/profile',
    '/profile/edit-profile',
    '/profile/ubah-password',
    // '/profile/cv-portofolio',
  ];

  if (!eventPath.includes(pathname)) {
    router.push('/profile');
  }

  return (
    <div className="w-full bg-neutral-100  pb-20">
      <section className="min-h-[120vh] w-full mx-auto max-w-[1440px]">
        <BreadCrumb
          items={ViewProfileBreadCumbs}
          textColor="text-version2-400"
        />
        <header className="px-8 pb-6 md:px-14 lg:px-16">
          <h1 className="text-xl font-bold text-neutral-800">Profile</h1>
        </header>
        <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
          <ProfileSidebar />
          <section className="col-span-2">
            {pathname === '/profile' && <ViewProfileModule />}
            {pathname === '/profile/edit-profile' && <EditProfileSection />}
            {/* {pathname === '/profile/cv-portofolio' && <CVPortofolioModule />} */}
            {pathname === '/profile/ubah-password' && <ChangePasswordSection />}
          </section>
        </section>
      </section>
    </div>
  );
};
