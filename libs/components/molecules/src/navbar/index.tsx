'use client';

import { FC, Fragment, ReactElement, Suspense } from 'react';
import { TNavbarProps } from './types';
import { lazily } from 'react-lazily';
import { LBottomNav, LTopNav } from './section';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

const { BottomNav, TopNav } = lazily(() => import('./section'));

export const Navbar: FC<TNavbarProps> = (props): ReactElement => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <Fragment>
      <header className="bg-white  sticky w-full top-0 z-50 py-[14px] md:py-[16px] lg:py-[18px] px-6 md:px-14 lg:px-16 flex justify-between  transition-all ease-in-out duration-300 flex-col">
        <Suspense fallback={<LTopNav />}>
          <TopNav {...props} />
        </Suspense>
      </header>
      {session && props.bottomNavRules?.includes(pathname) && (
        <Suspense fallback={<LBottomNav />}>
          <BottomNav {...props} />
        </Suspense>
      )}
    </Fragment>
  );
};
