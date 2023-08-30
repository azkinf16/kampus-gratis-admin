import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import React, { FC } from 'react';

const InvitationSection: FC = () => {
  return (
    <section className="flex flex-col py-10 w-full px-2 md:px-8 justify-center ">
      <main
        className={`md:flex max-w-5xl mx-auto w-full justify-center items-center rounded-md md:rounded-lg bg-white mt-10 h-[350px]  relative overflow-hidden p-4`}
      >
        <div className=" px-4 pt-2 pb-2 lg:px-8 md:w-1/2 w-full">
          <h1 className="font-bold lg:font-bold text-lg md:text-3xl lg:text-4xl md:py-4">
            Segera daftarkan dirimu!
          </h1>
          <p className="text-xs lg:py-4  md:text-lg lg:text-lg">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>

          <Button
            type="button"
            className={`text-white my-4 bg-blue-base py-2 px-3 lg:py-3 lg:px-8 font-semibold text-xs rounded-lg mr-2 md:mr-4 lg:mr-6`}
          >
            Daftar Sekarang{' '}
          </Button>
          <Button
            type="button"
            className={`text-blue-base my-4 bg-transparent border-2 border-blue-base py-2 px-3 lg:py-3 lg:px-8 font-semibold text-xs rounded-lg`}
          >
            Lihat Detail{' '}
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-end object-cover">
          <Image
            src="/images/invitation-1.png"
            width={515}
            height={515}
            alt="Partner Logo"
            loading="lazy"
            priority={false}
            className="md:h-[500px] h-[100%] z-10 block md:absolute right-0 top-0 object-cover"
          />
        </div>
      </main>
    </section>
  );
};

export default InvitationSection;
