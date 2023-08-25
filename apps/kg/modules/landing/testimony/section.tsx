'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import { TestimonyCard } from '../../../components/landing-page/card-testimony';
import { ContentCardTestimony } from './constant';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

export const TestimonySection: FC = (): ReactElement => {
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(1);
      } else {
        setScreenWidth(2);
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
    <section className="lg:flex overflow-y-hidden bg-primary-500 rounded-md  h-[580px] lg:h-[544px] mx-[8] lg:mx-[72px] justify-start px-8  items-center my-20 relative">
      <div className="flex flex-col text-white text-left w-full lg:w-1/2 py-10 z-10">
        <p className="text-sm tracking-wide">Testimoni</p>
        <h1 className="text-2xl lg:text-4xl font-bold font-700 py-5">
          Apa kata mahasiswa Kampus Gratis?
        </h1>
        <p className="text-[16px]">
          Kampus Gratis telah mencetak talenta hebat yang berkontribusi untuk
          negeri. Mari kita simak pendapat mereka terhadap kami
        </p>
        <div className="absolute z-0 right-0 -top-40 md:top-40 lg:top-0 g:pt-[250px]">
          <Image
            src="/images/testimony-fire.png"
            width={600}
            height={600}
            alt={'Banner 1'}
            loading="lazy"
            className="rounded-tr-lg md:block rounded-br-lg"
          />
        </div>
        <div className="flex flex-col lg:w-1/2 cursor-default z-10">
          <Swiper
            direction={'vertical'}
            slidesPerView={screenWidth}
            spaceBetween={40}
            mousewheel={true}
            centeredSlides={false}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[Mousewheel, Autoplay]}
            className="justify-center h-screen px-4"
          >
            {ContentCardTestimony.map((card, key) => (
              <SwiperSlide className="flex items-center" key={key}>
                <TestimonyCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2 cursor-default z-10">
        <Swiper
          direction={'vertical'}
          slidesPerView={screenWidth}
          spaceBetween={40}
          mousewheel={true}
          centeredSlides={false}
          modules={[Mousewheel]}
          className="justify-center h-screen px-4"
        >
          {ContentCardTestimony.map((card, key) => (
            <SwiperSlide className="flex items-center" key={key}>
              <TestimonyCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
