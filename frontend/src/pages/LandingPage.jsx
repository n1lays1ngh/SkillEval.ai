import React from 'react';
import Hero from '../Components/landing/Hero.jsx';
import HowItWorks from '../Components/landing/HowItWorks.jsx';

const LandingPage = ({ onStartAnalysis }) => {
  return (
    <>
      <Hero onStartAnalysis={onStartAnalysis} />
      <HowItWorks />
    </>
  );
};

export default LandingPage;

