import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { articleDataState } from 'recoil/atoms/article';
import { useRecoilState } from 'recoil';
import { articleRequest } from './request';

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
