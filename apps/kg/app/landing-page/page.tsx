'use client';

import GlimpseSection from 'apps/kg/modules/glimpse/section';
import FeatureSection from 'apps/kg/modules/landing/feature/section';
import HeroSection from 'apps/kg/modules/landing/hero/section';
import { NextPage } from 'next';


const LandingPage: NextPage = () => {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <GlimpseSection/>
    </>
  );
};

export default LandingPage;

