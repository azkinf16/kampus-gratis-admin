'use client';

import {
  TForgotPasswordPayload,
  TLoginPayload,
  TLoginResponse,
  TOTPPayload,
  TOTPRequestPayload,
  TOtpPopup,
  TRegisterPayload,
  TusePopupForgotPass,
} from '../../types/authentications';
import { TMetaErrorResponse, TMetaItem } from '@kampus-gratis/utils';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  forgotPasswordRequest,
  loginRequest,
  otpEmailRequest,
  otpVerifyRequest,
  registerRequest,
} from './request';
import { useRecoilState } from 'recoil';
import { PopupModalForgotPass, PopupOtp } from '../../recoil';

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

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  null
> => {
  return useMutation({
    mutationKey: ['login-kg'],
    mutationFn: (params) => loginRequest(params),
  });
};

export const useForgot = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TForgotPasswordPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['forgot-password-post'],
    mutationFn: async (payload) => await forgotPasswordRequest(payload),
  });

export const usePopupForgotPass = (): TusePopupForgotPass => {
  const [get, set] = useRecoilState(PopupModalForgotPass);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
