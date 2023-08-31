'use client';
import BaseLayout from '@/modules/base/BaseLayout';
import { useRouter, useSearchParams } from 'next/navigation';
// import useArticle from '@/modules/lib/useArticle';
import Pagination from '@/components/pagination/Pagination';
import Table from '@/components/table/Table';
import { useEffect, useState } from 'react';
import { useArticle, useArticleData } from '@/modules/lib/useArticle';
import { IconEdit } from '@/components/icons/ic-edit';
import { IconDelete } from '@/components/icons/ic-delete';
import Button from '@/components/button/Button';
import Searchbar from '@/components/searchbar/Searchbar';

export default function SekilasIlmuPage() {
  // const router = useRouter();
  const { setArticleData, getArticleData } = useArticleData();

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get('page') || '1';

  console.log(page);

  const { data, refetch } = useArticle(page);

  useEffect(() => {
    setArticleData(data);
  }, [data, setArticleData]);

  const handlePageChange = async (page: string) => {
    window.scrollTo(0, 0);
    const { data } = await refetch();
    console.log(data);

    router.push(`/sekilas-ilmu?page=${page}`);
  };

  const addArtikel = () => {
    router.push('/sekilas-ilmu/tambah-artikel');
  };

  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="flex justify-between pr-[50px]">
          <p>Sekilas Ilmu</p>
          <div className="flex">
            <Button
              plus="&#43;"
              title="Artikel"
              buttonStyle="flex items-center justify-center bg-primary-base w-[200px] rounded text-white"
              onClick={addArtikel}
            />
            <Searchbar placeholder="Cari Mahasiswa" />
          </div>
        </div>
        <div className="w-full mt-5 mb-16 pr-10">
          <Table>
            <tr>
              <th>No</th>
              <th>Judul Artikel</th>
              <th>Tanggal Upload</th>
              <th>Disimpan</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
            {getArticleData?.data?.data.map((article: any, i: number) => (
              <tr key={article.id}>
                <td>{i + (Number(page) - 1) * 10 + 1}</td>
                <td>{article.title}</td>
                <td>{article.created_at}</td>
                <td>{article.views}</td>
                <td>{article.tags}</td>
                <td>
                  <div className="flex justify-between">
                    <IconEdit />
                    <IconDelete />
                  </div>
                </td>
              </tr>
            ))}
          </Table>
          <Pagination
            onPageChange={handlePageChange}
            totalPages={getArticleData?.data?.total_data}
            currentPage={page}
          />
        </div>
      </div>
    </BaseLayout>
  );
}
