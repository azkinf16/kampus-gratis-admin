'use client';
import BaseLayout from '@/modules/base/BaseLayout';
import { useRouter, useSearchParams } from 'next/navigation';
// import useArticle from '@/modules/lib/useArticle';
import { useQuery } from '@tanstack/react-query';
import AxiosInstance from '@/modules/lib/Axios';
import { Provider } from '../../app/utils/Provider';
import Pagination from '@/components/pagination/Pagination';
import Table from '@/components/table/Table';
import { IconAccept } from '@/components/icons/ic-accept';
import { IconReject } from '@/components/icons/ic-reject';
import { useEffect, useState } from 'react';
import { useArticle, useArticleData } from '@/modules/lib/useArticle';

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

  // console.log(getArticleData);

  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <div className="flex justify-between">
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
                  <td>{article.title}3 </td>
                  <td>{article.created_at}</td>
                  <td>test</td>
                  <td>{article.tags}</td>
                  <td>
                    <div className="flex justify-evenly">
                      <IconAccept />
                      <IconReject />
                    </div>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
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
