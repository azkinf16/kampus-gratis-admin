import React, { FC } from 'react'
import HeroSection from './hero/section'
import FeatureSection from './feature/section'
import GlimpseSection from './glimpse/section'
import AdvantageSection from './advantage/section'
import FacultySection from './faculty/section'
import ProgramSection from './program/section'


export const LandingPageModules: FC = () => {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <ProgramSection/>
    <GlimpseSection/>
    <AdvantageSection/>
    <FacultySection/>
    </>
  )
}