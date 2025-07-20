import React from 'react';

const Hero = ({ onStartAnalysis }) => (
  <div className="bg-slate-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-100 tracking-tight">
        <span className="block">Your Personal AI Coach for</span>
        <span className="block text-indigo-500">Landing Your Dream Tech Job</span>
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400">
        SkillEvalAI evaluates your GitHub, resume, and portfolio to assess your readiness for roles like Backend Intern or ML Engineer. Get personalized feedback, identify skill gaps, and receive an actionable learning roadmap.
      </p>
      <div className="mt-8 flex justify-center gap-x-4">
        <button onClick={onStartAnalysis} className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5">
          Get Your Free Analysis
        </button>
      </div>
    </div>
  </div>
);

export default Hero;


