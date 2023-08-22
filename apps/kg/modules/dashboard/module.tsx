import { FC } from 'react';
import { SideBarSection } from './sidebar';

export const DashboardModule: FC = () => {
  return (
    <>
      <main className="py-2 bg-neutral-50 min-h-[220vh] w-full overflow-hidden">
        <div className="grid grid-cols-3 gap-x-10 px-6 md:px-8 lg:px-10">
          <SideBarSection />
        </div>
      </main>
    </>
  );
};
