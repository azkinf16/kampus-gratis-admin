import { TMetaResponse } from '@kampus-gratis/utils';
import { StaticImageData } from 'next/image';

export type TChoiceArticleCardProps = {
  title: string;
  date?: string;
  tag: string;
  bg: string;
  views?: string;
  desc?: string;
  src: string | StaticImageData;
};

export type TArticleResponse = {
  data: {
    data: TArticleItem[];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TArticleItem = {
  id: string;
  title: string;
  thumbnail: string;
  slug: string;
  author: Author;
  category: string;
  tags: string[];
};

// export type TArticleResponse2 = TMetaResponse<TArticleItem>;
