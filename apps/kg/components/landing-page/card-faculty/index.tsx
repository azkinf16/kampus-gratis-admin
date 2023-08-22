import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceFacultyCardProps } from "./types";

export const ChoiceFacultyCard: FC<TChoiceFacultyCardProps> = (props): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white pb-4 my-5">
      <Image
        src={props.src}
        alt={"card-landing"}
        width={325}
        height={208}
        loading={"lazy"}
        priority={false}
        className="w-auto h-auto pt-4 px-4"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-6">
          <div className="w-1/3 text-xs px-2 py-1 text-center rounded-md bg-blue-base text-white ">{props.tag}</div>
          <h1 className="text-black font-semibold text-[20px]">{props.title}</h1>
        </div>
      </div>
    </section>
  );
};
