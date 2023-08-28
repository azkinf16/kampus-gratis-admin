'use client';

import Image from 'next/image';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import router from 'next/router';
import Link from 'next/link';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const userInfoSchema = z.object({
    email: z.string().email({ message: 'Masukkan Email' }),
    password: z.string().min(3, { message: 'Masukkan password' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(userInfoSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn('login', {
      email: data.email,
      password: data.password,
    });
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col md:flex-row sm:mx-8 mx-5  rounded-md p-8 "
        style={{ backgroundColor: '#e9f6fd', width: '1080px' }}
      >
        <div className="p-4 relative flex justify-center md:w-1/2 ">
          <div className="absolute left-5">
            <Image
              src={'./assets/ic-logo.svg'}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <Image
            src="./assets/ic-login.svg"
            alt="logo"
            width={253}
            height={245}
          />
        </div>
        <div className="md:w-1/2 md:p-7 p-4">
          <h2 className="text-2xl font-bold mb-4 text-center tracking-wide">
            Masuk
          </h2>
          <h3 className="text-[13px] font-semibold mb-4 text-center">
            Silahkan masuk menggunakan email dan kata sandi yang terdaftar
          </h3>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email"
                disabled={isSubmitting}
                {...register('email')}
              />
              {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
                disabled={isSubmitting}
                {...register('password')}
              />
              {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>
            <div className="flex justify-end pb-2 text-blue-900">
              <a href="">
                <p>Lupa Kata Sandi ?</p>
              </a>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: '#0B568D' }}
              className="text-white p-2 rounded-md hover:bg-blue-600 w-full"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
