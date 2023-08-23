import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceBannerCardProps } from "./types";
import { Button } from "@kampus-gratis/components/atoms";


export const ChoiceBannerCard: FC<TChoiceBannerCardProps> = (props): ReactElement => {
  return (
    <main className={`flex w-full justify-center items-center ${props.bg}`}>
    <div className="w-1/2">
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    </div>
    <div className="w-1/2">
    <Image
    src={props.src}
    width={431}
    height={431}
    alt="Partner Logo"
    loading="lazy"
    priority={false}
    className="object-cover"
    />
    </div>
  </main>
  );
};
