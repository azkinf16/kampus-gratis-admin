import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { AuthLayout } from '../../../components';
import { FC, Suspense } from 'react';

export const LoginModule: FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthLayout
        h="screen"
        error={'Error'}
        title="Masuk"
        description="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
      >
        halo
      </AuthLayout>
    </Suspense>
  );
};
