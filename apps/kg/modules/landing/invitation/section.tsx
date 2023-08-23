import { Button } from '@kampus-gratis/components/atoms'
import Image from 'next/image'
import React, { FC } from 'react'

const InvitationSection:FC = () => {
  return (
    <section className='flex flex-col py-10 w-full px-2 md:px-8 justify-center '>  
    
    <main className={`flex max-w-5xl mx-auto w-full justify-center items-center shadow-lg border-2 rounded-md md:rounded-lg bg-white mt-10 h-[350px]  relative overflow-hidden`}>
    <div className=" px-4 lg:px-8 w-1/2">
    <h1 className="font-bold lg:font-semibold text-lg md:text-3xl lg:text-5xl md:py-4">Segera daftarkan dirimu!</h1>
    <p className="text-xs font-semibold md:text-lg lg:text-xl">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
    <Button type="button" className={`text-white my-4 bg-orange-base py-2 px-3 lg:py-3 lg:px-8 font-semibold text-xs rounded-lg`}>Lihat Semua </Button>
    </div>
    <div className="w-1/2 flex justify-end">
    <Image
    src="/images/invitation-1.png"
    width={515}
    height={515}
    alt="Partner Logo"
    loading="lazy"
    priority={false}
    className="h-[500px] z-10 absolute right-0 top-0"
    />
    </div>
  </main>

</section>
  )
}

export default InvitationSection