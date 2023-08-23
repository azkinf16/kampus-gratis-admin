import { ChoiceBannerCard } from 'apps/kg/components/landing-page/card-banner'
import React, { FC } from 'react'
import { ContentCardBanner } from './constant'

const BannerSection:FC = () => {
  return (
    <section className='flex py-10 w-full'>  
        <div className="grid md:grid-cols-2 lg:grid-cols-1  grid-rows-1">
        {ContentCardBanner.map((card, key) => (
          <ChoiceBannerCard key={key} {...card} />
        ))}
      </div>
    </section>
  )
}

export default BannerSection