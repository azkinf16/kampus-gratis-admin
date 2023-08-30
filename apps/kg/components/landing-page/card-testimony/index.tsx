import { FC, ReactElement } from 'react';
import { TChoiceTestimonyCardProps } from './types';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components

export const TestimonyCard: FC<TChoiceTestimonyCardProps> = (
  props
): ReactElement => {
  return (
    <div className="flex flex-col bg-white w-auto h-[254px] rounded-md shadow-md p-6">
      <div className="flex gap-3">
        <Image
          src={props.src}
          alt="card-testimony"
          width={70}
          height={70}
          loading={'lazy'}
          priority={false}
          className="rounded-full bg-yellow-500"
        />
        <span className="py-2 px-2">
          <p className="text-[18px] font-semibold font-700">{props.name}</p>
          <p className="text-neutral-500 text-[16px]">{props.job}</p>
        </span>
      </div>
      <div>
        <p className="text-neutral-500 text-[16px] pt-[24px]">
          {props.desc.substring(0, 100)}
        </p>
      </div>
    </div>
  );
};
