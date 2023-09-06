import { TUserAdminData } from '@/types';
import { api } from 'config/apiConfig';

export const userAdminRequest = async (): Promise<TUserAdminData> => {
  const { data } = await api.get(`/admin`);

  return data;
};
