'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  DashedText,
  LoadingSpinner,
  TextField,
} from '@kampus-gratis/components/atoms';
import {
  useOtpRequest,
  usePopupOtp,
  useRegister,
} from '../../../hooks/authentications/hook';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useForm } from 'react-hook-form';
import { lazily } from 'react-lazily';
import { z } from 'zod';
import { validationSchemaRegister } from '../../../config';
import { OtpModule } from '../otp';
import { signIn } from 'next-auth/react';

const { AuthLayout } = lazily(() => import('../../../components'));

type ValidationSchema = z.infer<typeof validationSchemaRegister>;

export const RegisterModule: FC = () => {
  // const router = useRouter();
  const [error, setError] = useState<string | null>('');
  const { setPopupOtp, getPopupOtp } = usePopupOtp();

  const {
    control,
    watch,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaRegister),
    mode: 'all',
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
      password_confirmation: '',
    },
  });

  const { mutate: request } = useOtpRequest();
  const { mutate, isLoading } = useRegister();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        request(
          {
            email: data.email,
          },
          {
            onSuccess: () => {
              setPopupOtp(true);
            },
          }
        );
      },
      onError: (e) => {
        console.log(e.response?.data.message);
        setError(e.response?.data.message as string);
      },
    });
  });

  const onGoogleLogin = async () => {
    await signIn('google', {
      redirect: false,
    });
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthLayout
        h="full"
        error={error as string}
        title="Daftar Akun"
        description="Silahkan isi data berikut untuk melakukan pendaftaran"
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full justify-start"
        >
          <TextField
            type="text"
            variant="lg"
            control={control}
            name={'full_name'}
            placeholder="Masukkan Nama Lengkap Anda"
            label="Nama Lengkap"
            status={errors.full_name ? 'error' : 'none'}
            message={errors.full_name?.message}
          />
          <TextField
            type="email"
            variant="lg"
            control={control}
            name={'email'}
            placeholder="Masukkan Email Anda"
            label="Email"
            status={errors.email ? 'error' : 'none'}
            message={errors.email?.message}
          />
          <TextField
            type="password"
            variant="lg"
            control={control}
            name={'password'}
            placeholder="Masukkan Kata Sandi"
            label="Kata Sandi"
            status={errors.password ? 'error' : 'none'}
            message={errors.password?.message}
          />
          <h1 className="-mt-2 pb-2 text-sm text-neutral-500">
            Minimal 8 karakter variasi huruf besar, huruf kecil, dan angka
          </h1>
          <TextField
            type="password"
            variant="lg"
            control={control}
            name={'password_confirmation'}
            placeholder="Konfirmasi Kata Sandi"
            label="Konfirmasi Kata Sandi"
            status={errors.password_confirmation ? 'error' : 'none'}
            message={errors.password_confirmation?.message}
          />
          <div className="flex flex-col my-4">
            <Button
              type="submit"
              disabled={!isValid}
              loading={isLoading ? 'Sedang Memuat...' : ''}
              className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
            >
              Daftar Sekarang
            </Button>

            <DashedText text="Atau" />

            <Button
              onClick={onGoogleLogin}
              type="button"
              className="w-auto h-auto text-[18px] text-black p-3 rounded-lg border-2 border-neutral-300 appearance-none bg-white font-[700] flex items-center justify-center gap-x-4"
            >
              <Image
                src="/icons/Google.svg"
                width={24}
                height={24}
                alt="google"
              />{' '}
              <span>Daftar Dengan Google</span>
            </Button>
            <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
              <span>Sudah punya akun?</span>
              <Link className="text-primary-600" href={'/auth/login'}>
                Masuk Disini
              </Link>
            </div>
          </div>
        </form>
      </AuthLayout>
      <OtpModule email={watch('email')} />
    </Suspense>
  );
};
