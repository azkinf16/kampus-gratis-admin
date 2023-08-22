import { TCard } from '@/types';
import Image from 'next/image';

export const Card = ({ amount, title }: TCard) => {
  return (
    // belum dikasih props
    <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="bg-white px-32 py-9 rounded-t-lg flex flex-col justify-center items-center gap-5">
        <Image
          src="/assets/ic-avatar.svg"
          alt="avatar"
          width={100}
          height={100}
        />
        <p className="font-bold text-sm">{title}</p>
      </div>
      <div className="px-32 py-6 bg-primary rounded-b-lg">
        <p className="text-center font-semibold text-white text-3xl">
          {amount}
        </p>
      </div>
    </div>
  );
};
