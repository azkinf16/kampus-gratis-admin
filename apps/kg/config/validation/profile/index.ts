import { z } from 'zod';

export const validationSchemaEditProfile = z.object({
  full_name: z.string().min(1, { message: 'Nama lengkap harus diisi' }),
  user_name: z.string().min(1, { message: 'Username harus diisi' }),
  phone_number: z.string().min(1, { message: 'Nomor handphone harus diisi' }),
  email: z.string().optional(),
});

export const validationSchemaUpdatePhoto = z.object({
  avatar: z.any(),
});

export const validationSchemaChangePassword = z
  .object({
    old_password: z.string().min(1, { message: 'Password harus diisi' }),
    new_password: z.string().min(1, { message: 'Password harus diisi' }),
    new_password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: 'Konfirmasi kata sandi tidak valid',
    path: ['new_password_confirmation'],
  });
