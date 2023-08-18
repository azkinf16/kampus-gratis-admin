import {
  TOTPPayload,
  TOTPRequestPayload,
  TOtpPopup,
  TRegisterPayload,
} from '../../types/authentications';
import { TMetaErrorResponse, TMetaItem } from '@kampus-gratis/utils';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { otpEmailRequest, otpVerifyRequest, registerRequest } from './request';
import { useRecoilState } from 'recoil';
import { PopupOtp } from '../../recoil';

export const useRegister = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TRegisterPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: async (payload) => await registerRequest(payload),
  });

export const useOtpVerify = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TOTPPayload
> =>
  useMutation({
    mutationKey: ['otp-verify'],
    mutationFn: async (payload) => otpVerifyRequest(payload),
  });

export const useOtpRequest = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TOTPRequestPayload
> =>
  useMutation({
    mutationKey: ['otp-request'],
    mutationFn: async (payload) => otpEmailRequest(payload),
  });

export const usePopupOtp = (): TOtpPopup => {
  const [get, set] = useRecoilState(PopupOtp);
  return {
    getPopupOtp: get,
    setPopupOtp: (val: boolean) => set(val),
  };
};
