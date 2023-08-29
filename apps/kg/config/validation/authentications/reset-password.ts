import { z } from 'zod';

export const validationSchemaResetPassword = z
  .object({
    password: z.string().min(1, { message: 'Password harus diisi' }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi kata sandi tidak valid',
    path: ['password_confirmation'],
  });
