import { USER_PROFILE_COMPLETE } from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import {
  TAvatarPayload,
  TAvatarResponse,
  TUserCompletePayload,
  TProfilePayload,
  TUserDetailResponse,
  TPasswordResponse,
  TPasswordPayload,
} from '../../types/profile';

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get('/user/profile/me');
  return data;
};

export const profileCompleteRequest =
  async (): Promise<TUserCompletePayload> => {
    const { data } = await api.get(USER_PROFILE_COMPLETE);
    return data;
  };

export const UpdateUserProfile = async (
  payload: TProfilePayload
): Promise<TUserDetailResponse> => {
  const { data } = await api.put('/user/profile/me', payload);
  return data;
};

export const UpdateAvatarProfile = async (
  payload: TAvatarPayload
): Promise<TAvatarResponse> => {
  const { data } = await api.post('/user/profile/avatar', payload);
  return data;
};

export const UpdatePassword = async (
  payload: TPasswordPayload
): Promise<TPasswordResponse> => {
  const { data } = await api.put('/auth/change-password', payload);
  return data;
};
