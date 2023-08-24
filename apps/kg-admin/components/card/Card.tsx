import { TCard } from '@/types';

export const Card = ({ amount, title, logo }: TCard) => {
  return (
    <div className="bg-white w-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="bg-white rounded-t-lg flex flex-col justify-center items-center gap-5 py-7">
        <span>{logo}</span>
        <p className="font-bold text-sm">{title}</p>
      </div>
      <div className=" bg-primary rounded-b-lg py-5">
        <p className="text-center font-semibold text-white text-3xl">
          {amount}
        </p>
      </div>
    </div>
  );
};
