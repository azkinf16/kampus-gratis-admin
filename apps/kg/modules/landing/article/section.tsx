import { ChoiceArticleCard } from '../../../components/landing-page/card-article';
import React from 'react';
import { ContentCardArticle } from './constant';
import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ArticleSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sekilas-ilmu');
  };

  return (
    <section className="lg:flex flex-col gap-y-[20px] px-8 max-w-[1440px] mx-auto">
      <div className="py-10 relative">
        <div className="relative z-10">
          <h1 className="font-bold text-4xl text-center">Sekilas Ilmu</h1>
          <p className="font-medium text-xl text-center ">
            Informasi untuk membantu karirmu
          </p>
        </div>
        <Image
          src="/images/article-stars.png"
          alt={'card-landing'}
          width={131}
          height={131}
          loading={'lazy'}
          priority={false}
          className="absolute z-0 top-0 right-0 md:right-36 lg:right-80"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[15px]">
        {ContentCardArticle.map((card, key) => (
          <ChoiceArticleCard key={key} {...card} />
        ))}
      </div>
      <div className="flex w-full justify-center items-center pt-8">
        <Button
          type="button"
          className="bg-blue-base text-white font-semibold p-3 rounded-lg w-[328px]"
          onClick={handleClick}
        >
          Lihat Semua
        </Button>
      </div>
    </section>
  );
};

export default ArticleSection;
