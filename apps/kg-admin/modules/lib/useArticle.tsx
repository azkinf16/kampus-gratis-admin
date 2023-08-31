import { TArticleResponse } from '@/types';
import axios from 'axios';
import AxiosInstance from './Axios';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { articleDataState } from 'recoil/article';

const articleRequest = async (page: string): Promise<TArticleResponse> => {
  const { data } = await AxiosInstance.get(
    `/article/filter?page=${page}&limit=5`
  );

  return data;
};

export const useArticle = (page: string): UseQueryResult => {
  return useQuery({
    queryKey: ['get-article'],
    queryFn: async () => await articleRequest(page),
  });
};

export const useArticleData = () => {
  const [get, set] = useRecoilState(articleDataState);

  return {
    getArticleData: get as any,
    setArticleData: (val: any) => set(val),
  };
};
