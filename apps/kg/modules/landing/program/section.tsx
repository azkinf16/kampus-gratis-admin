import React from 'react'
import { ContentCardProgram } from './constant'
import { ChoiceProgramCard } from 'apps/kg/components/landing-page/card-program'

const ProgramSection = () => {
  return (
    <section className="lg:flex flex-col pt-20 px-8">
      <h1 className="text-blue-base font-bold text-[36px] leading-none lg:w-[329px]">Program Kami <span className='text-orange-base '>yang tersedia</span></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 grid-rows-1">
        {ContentCardProgram.map((card, key) => (
          <ChoiceProgramCard key={key} {...card} 
          />
         
        ))}
                       

      </div>
    </section>
  )
}

export default ProgramSection