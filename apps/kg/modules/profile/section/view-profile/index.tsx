import Image from 'next/image';
import { useProfile, useProfileComplete } from '../../../../hooks/profile/hook';
import { FC, ReactElement } from 'react';
import { AiTwotoneCopy, AiTwotoneLike } from 'react-icons/ai';
import {
  BsBuildingsFill,
  BsClockFill,
  BsDot,
  BsFillChatLeftFill,
} from 'react-icons/bs';
import Avatar from 'react-avatar';
// import { useProfile } from "../profile-edit/hooks";

export const ViewProfileModule: FC = (): ReactElement => {
  const { data } = useProfile();
  const { data: completeData } = useProfileComplete();
  const userData = data?.data?.user;

  return (
    <main className="bg-neutral-50 px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[80vh]">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-neutral-800">View Profile</h1>
      </header>
      {/* Hero Section */}
      <section className="relative w-full">
        <figure className="w-full min-h-[260px] bg-neutral-200 rounded-md shadow-sm"></figure>
        <figure className="w-[120px] h-[120px] rounded-full bg-neutral-300 border-4 border-neutral-50 absolute -bottom-12 left-0">
          {completeData?.data?.avatar !== null ? (
            <Image
              src={completeData?.data?.avatar as string}
              width={120}
              height={120}
              alt="Profile"
            />
          ) : (
            <Avatar
              name={userData?.full_name || 'a'}
              color="#F26800"
              className="min-w-[120px] min-h-[120px]"
              round
            />
          )}
        </figure>
      </section>
      {/* Profile Info */}
      <section className="w-full pl-2 mt-16 capitalize">
        <header className="flex flex-wrap justify-between w-full">
          <h1 className="text-base font-bold text-neutral-800">
            {userData?.full_name}
          </h1>
          <section className="flex items-center gap-2 text-sm text-neutral-500">
            <AiTwotoneCopy className="text-xl cursor-pointer" />
            <p>{userData?.id}</p>
          </section>
        </header>
        <main className="flex items-center w-full gap-0">
          <h1 className="text-sm text-neutral-500">Mahasiswa</h1>
          <BsDot className="text-2xl text-version2-400" />
          <h1 className="text-sm text-neutral-500">Semester 1</h1>
        </main>
        <footer className="flex items-center w-full gap-0">
          <h1 className="text-base text-neutral-600">
            FK. Teknologi Ekonomi Digital
          </h1>
          <BsDot className="text-2xl text-version2-400" />
          <h1 className="text-base text-neutral-600">
            {completeData?.data?.major === 'UNENROLLED'
              ? 'xxxxxxx xxxx'
              : completeData?.data?.major}
          </h1>
        </footer>
      </section>
      {/* Profile Stats */}
      <main className="grid w-full grid-cols-1 gap-4 pt-6 pl-2 md:grid-cols-2">
        <section className="flex items-center gap-5 bg-[#E9F6FD] rounded-md px-6 py-4 shadow-sm text-[#106FA4] font-bold">
          <AiTwotoneLike className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Jumlah like yang didapat</h1>
            <p>{completeData?.data?.discussion_likes}</p>
          </section>
        </section>
        <section className="flex items-center gap-5 bg-[#FEF6D0] rounded-md px-6 py-4 shadow-sm text-[#FAB317] font-bold">
          <BsFillChatLeftFill className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Jumlah Diskusi</h1>

            <p>{completeData?.data?.discussion_posted}</p>
          </section>
        </section>
        <section className="flex items-center gap-5 bg-[#E3FBDA] rounded-md px-6 py-4 shadow-sm text-[#3EB449] font-bold">
          <BsClockFill className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>IPK</h1>
            <p>{completeData?.data?.ipk}</p>
          </section>
        </section>
        <section className="flex items-center gap-5 bg-[#FEDBD7] rounded-md px-6 py-4 shadow-sm text-[#ED3768] font-bold">
          <BsBuildingsFill className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Sertifikat</h1>
            <p>{completeData?.data?.total_certificates}</p>
          </section>
        </section>
      </main>
    </main>
  );
};
