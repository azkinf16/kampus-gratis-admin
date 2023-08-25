import { api } from '../../config/api/apiConfig';
import { TUserDetailResponse } from '../../types/profile';

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get('/user/profile/me');
  return data;
};
