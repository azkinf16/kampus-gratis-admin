import { z } from 'zod';

export const validationSchemaRegister = z
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
