import {
  Button,
  Checkbox,
  DashedText,
  LoadingSpinner,
  TextField,
} from '@kampus-gratis/components/atoms';
// import { AuthLayout } from '../../../components';
import { FC, Suspense, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { lazily } from 'react-lazily';
import { ErrorBoundary } from 'react-error-boundary';

const { AuthLayout } = lazily(() => import('../../../components'));

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
  password: z.string().min(1, { message: 'Password harus diisi' }),
  remember: z.boolean().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginModule: FC = () => {
  const router = useRouter();
  const onSubmit = () => '';
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const [loading, setLoading] = useState(false);

  const onGoogleLogin = async () => {
    const res = await signIn('google', {
      redirect: false,
    });
    if (res?.ok) {
      router.push('./dashboard');
    }
  };

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={'Error'}
          title="Masuk"
          description="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
            <TextField
              type="email"
              variant="lg"
              control={control}
              name={'email'}
              placeholder="Masukkan Email"
              label="Email"
              status={errors.email ? 'error' : 'none'}
              message={errors.email?.message}
              required
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
              required
            />
            <div className="flex w-full justify-between my-2">
              <Checkbox
                variant="lg"
                control={control}
                name={'remember'}
                label="Ingat Saya"
              />
              <div
                className="text-primary-base cursor-pointer"
                onClick={() => ''}
              >
                Lupa Kata Sandi?
              </div>
            </div>
            <div className="flex flex-col my-4">
              <Button
                type="submit"
                disabled={!isValid}
                loading={loading ? 'Sedang Masuk..' : ''}
                className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
              >
                Masuk
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
                <span>Masuk Dengan Google</span>
              </Button>
              <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Belum punya akun?</span>
                <Link className="text-primary-600" href={'/auth/register'}>
                  Daftar Disini
                </Link>
              </div>
            </div>
          </form>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
