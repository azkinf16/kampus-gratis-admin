import { StaticImageData } from "next/image";

export type TChoiceArticleCardProps = {
  title: string;
  date?: string;
  tag: string;
  bg: string;
  views?: string;
  desc?:string;
  src: string | StaticImageData;
};
