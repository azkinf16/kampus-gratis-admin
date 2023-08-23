import { StaticImageData } from "next/image";

export type TChoiceBannerCardProps = {
  title: string;
  desc: string;
  bg: string
  hidden?: string;
  src: string | StaticImageData;
};
