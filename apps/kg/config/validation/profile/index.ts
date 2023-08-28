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
