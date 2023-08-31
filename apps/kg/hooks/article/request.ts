import { ARTICLE, ARTICLE_FILTER } from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import { TArticleResponse } from '../../types/articles';

export const articleGetRequest = async (): Promise<TArticleResponse> => {
    const { data } = await api.get(`${ARTICLE_FILTER}?page=1&limit=10&sort_by=TITLE`);
    return data;
}