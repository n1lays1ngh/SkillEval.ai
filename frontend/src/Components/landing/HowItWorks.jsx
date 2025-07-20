import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Comprehensive Profile Analysis",
    category: "GitHub, Resume & Portfolio",
    description: "Our AI deeply analyzes your GitHub repositories, resume, and project portfolio to create a holistic view of your current skills.",
    level: "Step 1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-400"><path d="M20 6 9 17l-5-5"></path></svg>
    )
  },
  {
    title: "In-Depth Skill Gap Report",
    category: "Target Role Readiness",
    description: "Compare your profile against the requirements for roles like Backend Intern or Full-Stack Developer to identify specific skill gaps.",
    level: "Step 2",
     icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-400"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 19 9.2 19 7.5a3 3 0 0 0-6 0c0 1.7 1.3 2.7 2.5 3.5.8.8 1.3 1.5 1.5 2.5"></path><path d="M9 12H4.5a2.5 2.5 0 0 1 0-5H9"></path><path d="M10 9.5a2.5 2.5 0 0 1 5 0"></path><path d="m21 2-9.6 9.6"></path><path d="M3.5 12H4a2.5 2.5 0 0 1 5 0H10"></path></svg>
    )
  },
  {
    title: "Actionable Learning Roadmap",
    category: "Personalized Learning Plan",
    description: "Receive a custom, step-by-step learning plan with project ideas and exercises to close your skill gaps effectively.",
    level: "Step 3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-400"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
    )
  },
  {
    title: "Powered by Advanced LLMs",
    category: "Cutting-Edge AI",
    description: "Our analysis and roadmap generation are powered by advanced Large Language Models for nuanced and human-like feedback.",
    level: "Technology",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-400"><path d="M15.5 8.5 19 5l-3.5-3.5L12 5l-3.5-3.5L5 5l3.5 3.5L5 12l3.5 3.5L5 19l3.5 3.5L12 19l3.5 3.5L19 19l-3.5-3.5L19 12z"></path><path d="m12 5 3.5 3.5L12 12l-3.5-3.5L12 5z"></path><path d="m12 12 3.5 3.5L12 19l-3.5-3.5L12 12z"></path></svg>
    )
  }
];

const HowItWorks = () => (
  <div id="features" className="bg-slate-900 border-t border-slate-800 py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">How SkillEvalAI Prepares You</h2>
        <p className="mt-4 text-lg text-gray-400">A simple, powerful process to get you job-ready.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {features.map(f => <FeatureCard key={f.title} feature={f} />)}
      </div>
    </div>
  </div>
);

export default HowItWorks;

