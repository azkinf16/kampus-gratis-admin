'use client';

import React, { useEffect, useState } from 'react';
import { ContentCardProgram } from './constant';
import { ChoiceProgramCard } from '../../../components/landing-page/card-program';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';

const ProgramSection = () => {
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(2);
      } else {
        setScreenWidth(3);
      }
    };

    // Inisialisasi lebar layar awal
    handleResize();

    // Tambahkan event listener untuk memantau perubahan lebar layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="lg:flex flex-col pt-20 px-8">
      <h1 className="text-blue-base font-bold text-[36px] leading-none lg:w-[329px]">
        Program Kami <span className="text-orange-base ">yang tersedia</span>
      </h1>

      <div className="sm:flex justify-center items-center lg:w-full relative w-full">
        <Swiper
          slidesPerView={screenWidth}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="flex justify-center gap-3 mt-6 items-center min-h-fit"
        >
          {ContentCardProgram.map((card, key) => (
            <SwiperSlide key={key} className="flex justify-center">
              <ChoiceProgramCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          className="text-white border-2 border-blue-base bg-blue-base py-3 px-4 font-semibold text-sm rounded-lg flex justify-between items-center"
        >
          Selanjutnya{' '}
          <Image
            width={6}
            height={6}
            src="icons/right-arrow-white.svg"
            alt=""
            className="pl-2 w-6"
          />{' '}
        </Button>
      </div>
    </section>
  );
};

export default ProgramSection;
