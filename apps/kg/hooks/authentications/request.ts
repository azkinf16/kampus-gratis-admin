import {
  TForgotPasswordPayload,
  TLoginByGooglePayload,
  TLoginByGoogleResponse,
  TLoginPayload,
  TLoginResponse,
  TOTPPayload,
  TOTPRequestPayload,
  TRegisterPayload,
} from '../../types/authentications';
import {
  EMAIL_VERIFICATION_REQUEST,
  EMAIL_VERIFICATION_VERIFY,
  LOGIN,
  REGISTER,
  TMetaItem,
} from '@kampus-gratis/utils';
import { api } from '../../config';
import axios from 'axios';

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
  const { data } = await axios.post<TLoginResponse>(LOGIN, payload);
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
