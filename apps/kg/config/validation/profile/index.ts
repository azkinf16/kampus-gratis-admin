import { z } from 'zod';

export const validationSchemaEditProfile = z.object({
  avatar: z.any().optional(),
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
  full_name: z.string().min(1, { message: 'Nama lengkap harus diisi' }),
  phone_number: z.string().min(1, { message: 'Nomor handphone harus diisi' }),
  gender: z.string().min(1, { message: 'Gender harus dipilih' }),
});
