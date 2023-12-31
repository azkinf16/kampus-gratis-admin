'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  useForgotPasswordVerify,
  useOtpRequest,
  useOtpVerify,
  usePopupForgotPassword,
  usePopupOtp,
} from '../../../hooks/authentications/hook';
import { TOTPProps } from '../../../types/authentications';
import { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { PopupModal } from '@kampus-gratis/components/molecules';
import OTPInput from 'react-otp-input';

export const OtpModule: FC<TOTPProps> = (props) => {
  const [isError, setIsError] = useState(false);
  const { setPopupOtp, getPopupOtp } = usePopupOtp();

  const [otp, setOtp] = useState('');
  const { mutate: request } = useOtpRequest();
  const { mutate: verifyRegister } = useOtpVerify();
  const { mutate: verifyForgot } = useForgotPasswordVerify();
  const { push } = useRouter();
  const pathname = usePathname();

  const [timer, setTimer] = useState(60);

  const intervalRef = useRef<any>();

  const decreaseNum = () => setTimer((prev) => prev - 1);
  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (otp.length === 6) {
      if (pathname === '/auth/login') {
        verifyForgot(
          {
            email: props.email,
            otp,
          },
          {
            onSuccess: (data) => {
              setPopupOtp(false);
              push(`/auth/reset-password/${data?.data?.token}`);
            },
          }
        );
      } else {
        verifyRegister(
          {
            email: props.email,
            otp,
          },
          {
            onSuccess: () => {
              setPopupOtp(false);
              push('/auth/verify-success');
            },
            onError: (error) => {
              setOtp('');
              setIsError(true);
            },
          }
        );
      }
    }
  }, [otp]);

  const inputStyle = clsx(
    '!w-[64px] text-black focus:outline-none outline-none placeholder:text-black placeholder:p-2 !h-[64px] text-[28px] p-2 rounded-lg ',
    {
      'border border-neutral-100  bg-neutral-200': !isError,
      'border border-error-base bg-error-100': isError,
    }
  );

  return (
    <PopupModal
      onClose={() => setPopupOtp(false)}
      lookup={getPopupOtp}
      className="w-[659px] h-[455px] text-md"
      popupTitle="Verifikasi OTP"
      description="Masukkan kode OTP yang telah dikirimkan ke email Anda"
    >
      <div className="flex flex-col w-full">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus
          inputStyle={inputStyle}
          containerStyle={'w-full flex gap-x-6 items-center justify-center'}
          inputType="number"
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div className="flex w-full justify-end py-2 px-20">
        <span>
          Belum menerima kode?{' '}
          <span
            onClick={() => {
              setTimer(60);
              request({
                email: props.email,
              });
            }}
            ref={intervalRef}
            className="text-primary-base font-bold"
          >
            {timer < 0 ? 'Kirim Ulang' : timer}
          </span>
        </span>
      </div>
    </PopupModal>
  );
};
