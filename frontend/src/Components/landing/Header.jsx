import React from 'react';

const Header = ({ onHomeClick }) => (
  <header className="bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-700">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#" onClick={onHomeClick} className="flex items-center space-x-2">
            <svg className="h-8 w-auto text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
            <span className="text-2xl font-bold text-gray-100">SkillEvalAI</span>
          </a>
        </div>
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <a href="#features" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Features</a>
          <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">About</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;

