import React from 'react'
import { ContentCardFaculty } from './constant'
import { ChoiceFacultyCard } from 'apps/kg/components'

const FacultySection = () => {
  return (
    <section className="lg:flex flex-col gap-y-[20px] py-5 px-8">
      <h1 className="absolute z-40 text-black font-[700] text-[36px]">Pilihan Fakultas</h1>
      <div className="flex absolute z-0 mt-4">
        <svg
          width="317"
          height="43"
          viewBox="0 0 317 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.2391 0.2102C0.541931 1.03434 -1.46161 2.18797 3.54703 8.28659C9.05647 15.0445 20.5765 16.6933 110.064 19.4954C6.71924 21.4731 -2.79732 23.7807 1.37654 31.5276C6.71908 41.2524 40.9448 40.2635 207.565 40.5931C257.484 40.758 285.199 43.56 299.39 42.9007C319.091 41.9118 314.249 34.3297 306.068 30.8683L310.576 30.0442C322.43 27.9014 315.251 14.3857 300.058 10.4298C286.701 6.96847 209.902 3.34192 135.942 2.68261C38.1067 2.0233 38.4406 -0.778766 18.2391 0.2102Z"
            fill="#FBCB50"
          />
        </svg>
      </div>
   
      <p className='mt-16 font-semibold tracking-normal text-xl'>Tersedia 3 fakultas unggulan Kampus Gratis </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 grid-rows-1">
        {ContentCardFaculty.map((card, key) => (
          <ChoiceFacultyCard key={key} {...card} />
        ))}
      </div>
    </section>
  )
}

export default FacultySection