'use client';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { userAdminRequest } from './request';
import { useRecoilState } from 'recoil';
import { userAdminDataState } from 'recoil/atoms/userAdmin';
import { TUserAdminData, TUserAdminDataResponse } from '@/types';
import { TMetaErrorResponse } from 'types/Meta';

export const useUserAdmin = (): UseQueryResult<TUserAdminDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-userAdmin'],
    queryFn: async () => await userAdminRequest(),
  });
};

export const useUserAdminData = () => {
  const [get, set] = useRecoilState(userAdminDataState);

  return {
    getUserAdminData: get as any,
    setUserAdminData: (val: any) => set(val),
  };
};
