'use client';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { userAdminRequest } from './request';
import { useRecoilState } from 'recoil';
import { userAdminDataState } from 'recoil/atoms/userAdmin';
import { TUserAdminData } from '@/types';

export const useUserAdmin = (): UseQueryResult<TUserAdminData> => {
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
