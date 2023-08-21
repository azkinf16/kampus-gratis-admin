'use client';

import { usePopupForgotPass } from '../../../hooks';
import { validationSchemaForgot } from '../../../config';
import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PopupModal } from '@kampus-gratis/components/molecules';
import { Button, TextField } from '@kampus-gratis/components/atoms';
import Link from 'next/link';

type ValidationSchema = z.infer<typeof validationSchemaForgot>;

export const ForgotModule: FC = () => {
  const { setPopupStatus, getPopupStatus } = usePopupForgotPass();
  const {
    control,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaForgot),
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  return (
    <PopupModal
      onClose={() => setPopupStatus(false)}
      lookup={getPopupStatus}
      className="!w-[100%] text-md md:px-16 sm:px-14"
      popupTitle="Lupa Kata Sandi"
    >
      <div className="mb-5 lg:text-[16px] md:text-[14px]">
        Masukkan alamat email Anda yang terdaftar. Kami akan
        <br />
        mengirimkan kode OTP untuk dapat mengatur ulang kata sandi Anda.
      </div>

      <form className="flex flex-col w-full !justify-end">
        <label className="text-start font-[500] text-[16px] mb-1">
          Email
          <TextField
            type="email"
            variant="lg"
            name={'email'}
            control={control}
            placeholder="Masukan Email Anda"
            status={errors.email ? 'error' : 'none'}
            message={errors.email?.message}
          />
        </label>

        <div className="flex justify-center text-center w-full">
          <Link href={'/auth/otp'}>
            <Button
              type="submit"
              disabled={!isValid}
              className=" w-fit px-8 py-3 disabled:bg-neutral-400 h-auto text-[16px] text-white rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[600] tracking-wide"
            >
              Kirim
            </Button>
          </Link>
        </div>
      </form>
    </PopupModal>
  );
};
