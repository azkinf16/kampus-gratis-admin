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

export type TArticleItem = {
  data: {
        id: string;
        title: string;
        content: string;
        thumbnail: string;
        slug: string;
        views: number;
        category_id: string;
        author_id: string;
        created_at: string;
        tags: [];
      }
};

export type TArticleResponse = TMetaResponse<TArticleItem>;
