import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceProgramCardProps } from "./types";
import { Button } from "@kampus-gratis/components/atoms";
// import { TAuthLayoutProps } from './types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export const ChoiceProgramCard: FC<TChoiceProgramCardProps> = (props): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white pb-4 my-5">
      <Image
        src={props.src}
        alt={"card-landing"}
        width={325}
        height={208}
        loading={"lazy"}
        priority={false}
        className="w-auto h-[208px] pt-4 px-4"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-4">
          <p className="w-3/4 text-xs px-2 py-1 text-center rounded-md bg-blue-base text-white ">{props.tag}</p>
          <h1 className="text-black font-semibold text-[20px] mb-2">{props.title}</h1>
        </div>
        <Button type="button" className='text-blue-base border-2 border-blue-base bg-transparent py-3 px-3 text-lg font-semibold rounded-lg flex justify-between items-center'>Telusuri Program <img src="icons/right-arrow.svg" alt="" /> </Button>
      </div>
    </section>
  );
};
