'use client'

import { TMetaErrorResponse } from "@kampus-gratis/utils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TArticleResponse } from "../../types/articles";
import { articleGetRequest } from "./request";

export const useGetArticle = (): UseQueryResult<TArticleResponse, TMetaErrorResponse> => useQuery({
    queryKey: ["article-get"],
    queryFn: async () => await articleGetRequest(),
})