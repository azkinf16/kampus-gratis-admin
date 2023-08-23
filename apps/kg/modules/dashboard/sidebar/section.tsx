import { FC } from 'react';
import { ResumeSection } from './resume/section';

export const SideBarSection: FC = () => {
  return (
    <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
      <div className="flex xl:flex-col gap-x-10 md:flex-row flex-col">
        <ResumeSection />
      </div>
    </div>
  );
};
