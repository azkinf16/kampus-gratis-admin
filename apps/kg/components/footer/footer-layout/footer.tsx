import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import logo from "../assets/logo.svg";
import { FooterDesc } from "./desc";
import { FooterIcons } from "./icons";
import { FooterLinks } from "./links";
import { FooterAddress } from "./address";
import { AiFillCopyrightCircle } from "react-icons/ai";

export const LayoutFooter: FC = (): ReactElement => {
  return (
    <>
    <div className="z-40 bg-neutral-100  px-8 md:px-14 lg:px-16 py-6 gap-x-10 gap-y-10 lg:gap-x-14 xl:gap-y-20 grid grid-cols-3">
      <section className="pr-0  mb-4 col-span-3  lg:col-span-1">
        <Link href={"/"} passHref>
          <Image
            src={logo}
            alt="M-Know Logo's"
            className="w-auto h-6 md:h-9 lg:h-11"
            width={100}
            height={60}
            loading="eager"
            quality={40}
          />
        </Link>
        <FooterDesc />
        <FooterIcons />
      </section>
      <section className="flex gap-x-20 gap-y-10 flex-wrap xl:flex-nowrap col-span-3 lg:col-span-2">
        <FooterLinks />
        <FooterAddress />
      </section>
      
    </div>
    <section className="w-full text-center md:flex md:px-14 lg:px-16 bg-neutral-100 text-[#737373] py-16">
        <div className="w-full md:flex md:w-1/2">
        <h1 className="text-sm">2022 - www.kampusgratis.id - Hak Cipta Dilindungi.</h1>
        </div>
        <div className="w-full md:w-1/2 md:flex justify-end text-sm gap-x-8">
        <Link href={"/"}>Terms of use</Link>
        <Link href={"/"}>Privacy policy</Link>
        </div>
      </section>
    </>
  );
};
