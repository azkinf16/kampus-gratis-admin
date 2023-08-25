import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceBannerCardProps } from "./types";
import { Button } from "@kampus-gratis/components/atoms";


export const ChoiceBannerCard: FC<TChoiceBannerCardProps> = (props): ReactElement => {
  return (
    <main className={`flex max-w-5xl mx-auto w-full justify-center items-center shadow-lg border-2 rounded-md md:rounded-lg ${props.bg}  mt-10 ${props.color}`}>
    <div className=" px-4 lg:px-8 w-1/2">
    <h1 className="font-bold lg:font-semibold text-lg md:text-3xl lg:text-5xl md:py-4">{props.title}</h1>
    <p className="text-xs font-semibold md:text-lg lg:text-xl">{props.desc}</p>
    <Button type="button" className={`text-white ${props.hidden} my-4 bg-orange-base py-2 px-3 lg:py-3 lg:px-8 font-semibold text-xs rounded-lg`}>Lihat Semua </Button>
    </div>
    <div className="w-1/2 flex justify-end">
    <Image
    src={props.src}
    width={431}
    height={431}
    alt="Partner Logo"
    loading="lazy"
    priority={false}
    className="h-[178px] md:h-[248px] lg:h-[308px] object-cover overflow-hidden rounded-r-md lg:rounded-r-lg"
    />
    </div>
  </main>
  );
};
