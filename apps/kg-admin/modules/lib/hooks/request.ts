import {
  TForgotPasswordPayload,
  TLoginByGooglePayload,
  TLoginByGoogleResponse,
  TLoginPayload,
  TLoginResponse,
  TOTPPayload,
  TOTPRequestPayload,
  TRefreshTokenPayload,
  TRefreshTokenResponse,
  TRegisterPayload,
  TResetPasswordPayload,
  TResetPasswordVerifyResponse,
} from '../../types/authentications';
import {
  EMAIL_VERIFICATION_REQUEST,
  EMAIL_VERIFICATION_VERIFY,
  LOGIN,
  REGISTER,
  RESET_PASSWORD_VERIFY,
  TMetaItem,
} from '@kampus-gratis/utils';
import { api } from 'config/apiConfig';
import { signOut } from 'next-auth/react';

export const registerRequest = async (
  payload: TRegisterPayload
): Promise<TMetaItem> => await api.post(REGISTER, payload);

export const otpVerifyRequest = async (
  payload: TOTPPayload
): Promise<TMetaItem> => {
  const { data } = await api.post(EMAIL_VERIFICATION_VERIFY, payload);

  return data;
};

export const otpEmailRequest = async (
  payload: TOTPRequestPayload
): Promise<TMetaItem> => {
  const { data } = await api.post(EMAIL_VERIFICATION_REQUEST, payload);
  return data;
};

export const loginRequest = async (
  payload?: TLoginPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>(LOGIN, payload);
  return data;
};

export const loginByGoogleRequest = async (
  payload: TLoginByGooglePayload
): Promise<TLoginByGoogleResponse> => {
  const { data } = await api.post<TLoginByGoogleResponse>(
    '/auth/login/google/callback',
    payload
  );
  return data;
};

export const forgotPasswordRequest = async (
  payload: TForgotPasswordPayload
): Promise<TMetaItem> => {
  const { data } = await api.post<TMetaItem>(
    '/reset-password/request',
    payload
  );
  return data;
};

export const forgotPasswordVerifyRequest = async (
  payload: TOTPPayload
): Promise<TResetPasswordVerifyResponse> => {
  const { data } = await api.post(RESET_PASSWORD_VERIFY, payload);

  return data;
};

export const logoutRequest = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => {
  await api.post('/auth/logout', { refresh_token });
  signOut();
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

export const resetPasswordRequest = async (
  payload: TResetPasswordPayload
): Promise<TMetaItem> => {
  const { data } = await api.post('/auth/reset-password', payload);
  return data;
};
