import { api } from 'config/apiConfig';
import { TArticleResponse } from '@/types';

export const articleRequest = async (page: string): Promise<TArticleResponse> => {
    const { data } = await api.get(
      `/article/filter?page=${page}&limit=5`
    );
  
    return data;
  };