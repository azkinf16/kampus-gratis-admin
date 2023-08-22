import { StaticImageData } from "next/image";

export type TChoiceArticleCardProps = {
  title: string;
  date?: string;
  tag: string;
  views?: string;
  src: string | StaticImageData;
};
