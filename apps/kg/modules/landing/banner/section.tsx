"use client"

import { ChoiceBannerCard } from 'apps/kg/components/landing-page/card-banner'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContentCardBanner } from './constant'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay} from 'swiper/modules';
import Image from 'next/image';

const BannerSection:FC = () => {
  return (
    <section className='flex flex-col py-10 w-full px-2 md:px-8 justify-center'>  
        <div className="">
        <Swiper
      slidesPerView={1}
        spaceBetween={32}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        rewind={true}
        modules={[Autoplay]}
        className="flex justify-center gap-3 mt-6 items-center min-h-fit"
      >
        {ContentCardBanner.map((card, key) => (
          <SwiperSlide className="" key={key}>
          <ChoiceBannerCard {...card} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  )
}

export default BannerSection