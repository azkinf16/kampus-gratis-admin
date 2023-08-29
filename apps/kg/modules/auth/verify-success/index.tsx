import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const VerifySuccessModule: FC = () => {
  return (
    <div className="h-screen bg-primary-500 w-full flex items-center rounded-lg">
      <div className="max-w-[1280px] mx-auto w-full bg-white rounded-md p-8 flex justify-between flex-col sm:flex-row">
        <div className="relative flex items-center">
          <Link href={'/'}>
            <Image
              src={'/images/logo_nav.svg'}
              width={120}
              height={120}
              alt="Logo"
              className="absolute top-0 left-0"
            />
          </Link>
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl tracking-wider font-bold text-primary-500">
              Verifikasi Berhasil
            </h1>
            <p className="text-sm text-gray-500 tracking-wider font-medium mt-1">
              Terimakasih telah memverifikasi akun, silahkan Masuk!
            </p>
            <Link
              href={'/auth/login'}
              className="py-3 px-5 bg-primary-500 text-white font-medium w-fit rounded-lg"
            >
              Masuk
            </Link>
          </div>
        </div>
        <Image
          src={'/images/verify_success.svg'}
          width={350}
          height={350}
          alt="Verify Success"
        />
      </div>
    </div>
  );
};
