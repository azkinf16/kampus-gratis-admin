import { TUserAdminData, TUserAdminDataResponse } from '@/types';
import { api } from 'config/apiConfig';

export const userAdminRequest = async (): Promise<TUserAdminDataResponse> => {
  const { data } = await api.get(`/admin`);

  return data;
};
