"use client"

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
import InvitationSection from './invitation/section'
import { LayoutFooter } from 'apps/kg/components/footer'


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
    <InvitationSection/>
    <LayoutFooter/>
    </>
  )
}