'use client';

import { FC, ReactElement } from 'react';
import { GlimpseKnowledgeCard } from './Card/GlimpseKnowledgeCard';
import { GlimpseKnowledgeSearch } from './Search/GlimpseKnowledgeMain';
import Link from 'next/link';
import { useGetArticle } from '../../../hooks/article/hook';

export const GlimpseKnowledgeMain: FC = (): ReactElement => {
  const { data } = useGetArticle();

  const allArticleData = data?.data;

  // console.log(allArticleData);

  return (
    <main className="px-8 pb-20 md:px-14 lg:px-16">
      <section className="bg-neutral-100 h-[56px] mb-10 mt-10 w-full rounded-md shadow-sm">
        <GlimpseKnowledgeSearch />
      </section>
      <section>
        <section>
          <div className="flex gap-x-4 text-center">
            <div>
              <Link href={'/sekilas-ilmu'}>Sekilas Ilmu</Link>
              <span className="h-[4px] w-28 bg-[#0B568D] block rounded-md mt-2 mb-10"></span>
            </div>
            <div>
              <Link href={'/sekilas-ilmu/favorite'}>Disimpan</Link>
              <span className="h-[4px] w-24 bg-[#0B568D] block rounded-md mt-2 mb-10"></span>
            </div>
          </div>
        </section>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* <SuspenseError loadingFallback={<CardLoading />}> */}
        {allArticleData?.data?.map((item: any) => (
          <GlimpseKnowledgeCard key={item.id} data={item} />
        ))}
        {/* <GlimpseKnowledgeCard /> */}
        {/* </SuspenseError> */}
      </section>
    </main>
  );
};
