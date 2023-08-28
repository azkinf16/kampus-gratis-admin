import { useRecoilState } from 'recoil';
import {
  useProfile,
  useUpdateUserProfile,
} from '../../../../hooks/profile/hook';
import { editPhotoState } from '../../../../recoil/atoms/profile';
import { validationSchemaEditProfile } from '../../../../config/validation/profile';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  SelectField,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { AiFillCamera } from 'react-icons/ai';
import Image from 'next/image';
import Avatar from 'react-avatar';

type ValidationSchema = z.infer<typeof validationSchemaEditProfile>;

export const EditProfileSection = () => {
  const { data, refetch } = useProfile();

  const { mutate, isLoading } = useUpdateUserProfile();
  const [isEditPhoto, setEditPhoto] = useRecoilState(editPhotoState);

  const userData = data?.data?.user;

  const genders = [
    { id: 1, value: 'LAKI-LAKI', label: 'Laki-Laki' },
    { id: 2, value: 'PEREMPUAN', label: 'Perempuan' },
  ];

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaEditProfile),
    mode: 'all',
    defaultValues: {
      user_name: userData?.user_name,
      full_name: userData?.full_name,
      phone_number: userData?.phone_number,
    },
  });

  const onCancel = () => reset(userData);

  const onSubmit = handleSubmit(async (data) => {
    const { user_name, full_name, phone_number } = data;
    const editData = {
      user_name,
      full_name,
      phone_number,
    };
    console.log(data);

    await mutate(editData);
    await refetch();
    await onCancel();
  });

  return (
    <main className="bg-neutral-50 px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[80vh]">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-neutral-800">Edit Profile</h1>
      </header>
      <main className="w-full">
        <section className="grid w-full py-16 place-items-center">
          <figure className="bg-neutral-200 h-[140px] w-[140px] rounded-full relative">
            {userData?.avatar !== null ? (
              <Image
                src={userData?.avatar as string}
                width={140}
                height={140}
                alt="Profile"
              />
            ) : (
              <Avatar
                name={userData?.full_name || 'a'}
                color="#F26800"
                className="min-w-[140px] min-h-[140px]"
                round
              />
            )}
            <section className="absolute bottom-0 right-2">
              <div
                className="grid bg-yellow-100 rounded-full shadow-md cursor-pointer w-9 h-9 place-items-center"
                onClick={() => {
                  setEditPhoto(!isEditPhoto);
                }}
              >
                <AiFillCamera className="text-xl text-yellow-500 " />
              </div>
              <form
                className={`${
                  isEditPhoto ? 'absolute' : 'hidden'
                }  flex flex-col border-[1px] h-[4.3rem] overflow-hidden  border-neutral-100 rounded-md  transition-all duration-100 ease-in-out shadow-sm w-36 text-xs mt-2 `}
              >
                <p
                  className="text-neutral-700 cursor-pointer bg-neutral-50 hover:bg-neutral-100 px-4 py-2 border-b-[0.5px] border-neutral-200"
                  onClick={() => {
                    setEditPhoto(false);
                  }}
                >
                  Ambil Foto
                </p>
                <label
                  htmlFor="avatar"
                  className="px-4 py-2 cursor-pointer text-neutral-700 bg-neutral-50 hover:bg-neutral-100"
                  onClick={() => {
                    setEditPhoto(false);
                  }}
                >
                  Unggah Foto
                  {/* <UploadField
                    variant="sm"
                    name={'avatar'}
                    control={control}
                    className="hidden"
                  /> */}
                </label>
              </form>
            </section>
          </figure>
        </section>
        <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
          <TextField
            control={control}
            placeholder={userData?.email}
            label="Email"
            type={'email'}
            name="email"
            variant={'md'}
            disabled
          />

          <TextField
            control={control}
            placeholder="Masukkan Username"
            label="Username"
            type={'text'}
            value={userData?.user_name}
            name="user_name"
            variant={'md'}
            status={errors.user_name ? 'error' : undefined}
            message={errors.user_name?.message}
          />
          <TextField
            control={control}
            placeholder="Masukkan Nama Lengkap"
            label="Nama Lengkap"
            type={'text'}
            value={userData?.full_name}
            name="full_name"
            variant={'md'}
            status={errors.full_name ? 'error' : undefined}
            message={errors.full_name?.message}
          />
          <TextField
            control={control}
            placeholder="Masukkan Nomor Handphone"
            label="Nomor Handphone"
            type={'text'}
            value={userData?.phone_number}
            name="phone_number"
            status={errors.phone_number ? 'error' : undefined}
            variant={'md'}
            message={errors.phone_number?.message}
          />
          <section className="flex justify-end w-full col-span-2">
            <Button
              type={'button'}
              onClick={onCancel}
              loading={isLoading ? 'Sedang Mereset' : undefined}
              className="text-white cursor-pointer font-[700] bg-error-500 rounded-lg p-3"
            >
              Batalkan
            </Button>
            <Button
              type={'submit'}
              loading={isLoading ? 'Sedang Menyimpan' : undefined}
              disabled={!isValid}
              className="text-white disabled:bg-neutral-400 cursor-pointer font-[700] bg-primary-500 rounded-lg p-3"
            >
              Simpan
            </Button>
          </section>
        </form>
      </main>
    </main>
  );
};
