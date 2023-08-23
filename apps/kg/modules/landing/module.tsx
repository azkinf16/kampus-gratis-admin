import React, { FC } from 'react'
import HeroSection from './hero/section'
import FeatureSection from './feature/section'
import GlimpseSection from './glimpse/section'
import AdvantageSection from './advantage/section'
import FacultySection from './faculty/section'
import ProgramSection from './program/section'
import PartnerSection from './partner/section'
import ArticleSection from './article/section'
import { TestimonySection } from './testimony'
import BannerSection from './banner/section'


export const LandingPageModules: FC = () => {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <ProgramSection/>
    <BannerSection/>
    <PartnerSection/>
    <GlimpseSection/>
    <AdvantageSection/>
    <FacultySection/>
    <TestimonySection/>
    <ArticleSection/>
    </>
  )
}