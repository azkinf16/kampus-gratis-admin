import Link from 'next/link'
import React, { FC } from 'react'

const FooterCredit:FC = () => {
  return (
    <section className="w-full text-center md:flex md:px-14 lg:px-16 bg-neutral-100 text-[#737373] py-16">
    <div className="w-full md:flex md:w-1/2">
    <h1 className="text-sm">2022 - www.kampusgratis.id - Hak Cipta Dilindungi.</h1>
    </div>
    <div className="w-full md:w-1/2 md:flex justify-end text-sm gap-x-8">
    <Link href={"/"}>Terms of use</Link>
    <Link href={"/"}>Privacy policy</Link>
    </div>
  </section>
  )
}

export default FooterCredit