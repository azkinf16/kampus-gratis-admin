import React, { FC } from 'react'
import HeroSection from './hero/section'
import FeatureSection from './feature/section'
import GlimpseSection from './glimpse/section'
import AdvantageSection from './advantage/section'

export const LandingPageModules: FC = () => {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <GlimpseSection/>
    <AdvantageSection/>
    </>
  )
}