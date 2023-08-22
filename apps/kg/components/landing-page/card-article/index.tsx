import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceArticleCardProps } from "./types";

export const ChoiceArticleCard: FC<TChoiceArticleCardProps> = (props): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white justify-between">
      <Image
        src={props.src}
        alt={"card-landing"}
        width={282}
        height={208}
        loading={"lazy"}
        priority={false}
        className="w-auto h-auto"
      />
      <div className="flex flex-col p-[10px]">
        <div className="flex flex-col justify-between gap-y-6">
          <div className="flex justify-between w-full">
            <p className="text[12px] bg-primary-100 p-1 w-auto rounded-md"># {props.tag}</p>
            <p className="flex text-[12px] text-neutral-500 justify-center items-center">
              {props.date}
            </p>
          </div>
          <div>
            <h1 className="text-black font-bold text-[18px]">{props.title}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 py-2">
        <p className="flex text-[12px] text-neutral-500 justify-end items-end">172 views</p>
        <Image
         src="icons/article-save.svg"
         alt={"card-landing"}
         width={30}
         height={30}
         loading={"lazy"}
         priority={false}
         className="w-auto h-auto"
        />
      </div>
    </section>
  );
};
