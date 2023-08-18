import {
  TOTPPayload,
  TOTPRequestPayload,
  TRegisterPayload,
} from '../../types/authentications';
import {
  EMAIL_VERIFICATION_REQUEST,
  EMAIL_VERIFICATION_VERIFY,
  REGISTER,
  TMetaItem,
} from '@kampus-gratis/utils';
import { api } from '../../config';

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
