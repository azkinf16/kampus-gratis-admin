'use client';

import GlimpseSection from 'apps/kg/modules/landing/glimpse/section';
import FeatureSection from 'apps/kg/modules/landing/feature/section';
import HeroSection from 'apps/kg/modules/landing/hero/section';
import { NextPage } from 'next';
import { LandingPageModules } from 'apps/kg/modules/landing';


const LandingPage: NextPage = () => {
  return (
    <>
    <LandingPageModules/>
    </>
  );
};

export default LandingPage;

