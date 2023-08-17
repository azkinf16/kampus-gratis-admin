import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  DashedText,
  LoadingSpinner,
  TextField,
} from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useForm } from 'react-hook-form';
import { lazily } from 'react-lazily';
import { z } from 'zod';

const { AuthLayout } = lazily(() => import('../../../components'));
const validationSchema = z
  .object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    full_name: z.string().min(2, { message: 'Nama Lengkap harus diisi' }),
    password: z
      .string()
      .min(1, { message: 'Password harus diisi' })
      .min(7, { message: 'Password harus diisi' })
      .min(8, { message: 'Password setidaknya ada 8 karakter' })
      .refine((data) => data.match(/[A-Z]/g), {
        message: 'Password harus mengandung huruf besar',
      })
      .refine((data) => data.match(/[0-9]/g), {
        message: 'Password harus mengandung angka',
      }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus diisi' }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi kata sandi tidak valid',
    path: ['password_confirmation'],
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export const RegisterModule: FC = () => {
  const router = useRouter();
  const {
    control,
    watch,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
      password_confirmation: '',
    },
  });

  const onSubmit = handleSubmit(() => 'submit');
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="full"
          error={'error'}
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
                onClick={() => ''}
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
      </Suspense>
    </ErrorBoundary>
  );
};
