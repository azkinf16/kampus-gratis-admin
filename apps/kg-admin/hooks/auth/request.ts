import { TLoginPayload, TLoginResponse, TRefreshTokenPayload, TRefreshTokenResponse } from '@/types';
import { api } from 'config/apiConfig';

export const loginRequest = async (
  payload?: TLoginPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('/auth/login', payload);
  return data;
};

export const refreshTokenRequest = async (
  payload?: TRefreshTokenPayload
): Promise<TRefreshTokenResponse> => {
  const { data } = await api.post<TRefreshTokenResponse>(
    '/auth/refresh',
    payload
  );
  return data;
};
