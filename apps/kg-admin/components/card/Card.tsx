import Image from 'next/image';

export const Card = () => {
  return (
    // belum dikasih props
    <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="bg-white px-40 py-9 rounded-t-lg flex flex-col justify-center items-center gap-5">
        <Image
          src="/assets/ic-avatar.svg"
          alt="avatar"
          width={100}
          height={100}
        />
        <p className="font-bold text-lg">Pendaftar</p>
      </div>
      <div className="px-40 py-6 bg-primary rounded-b-lg">
        <p className="text-center font-semibold text-white text-3xl">2500</p>
      </div>
    </div>
  );
};
