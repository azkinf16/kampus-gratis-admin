import React, { FC } from 'react';
import { ContentCardFaculty } from './constant';
import { ChoiceFacultyCard } from '../../../components/landing-page/card-faculty';
import Image from 'next/image';

const FacultySection: FC = () => {
  return (
    <section className="lg:flex flex-col gap-y-[20px] py-5 px-8 mx-auto max-w-[1440px]">
      <h1 className="absolute z-40 text-black font-[700] text-[36px]">
        Pilihan Fakultas
      </h1>
      <div className="flex absolute z-0 mt-4">
        <Image
          src="/images/faculty-bg-text.svg"
          alt={'card-landing'}
          width={316}
          height={43}
          loading={'lazy'}
          priority={false}
        />
      </div>

      <p className="mt-16 font-semibold tracking-normal text-xl">
        Tersedia 3 fakultas unggulan Kampus Gratis{' '}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 grid-rows-1">
        {ContentCardFaculty.map((card, key) => (
          <ChoiceFacultyCard key={key} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
