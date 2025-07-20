import React from 'react';

const FeatureCard = ({ feature }) => (
  <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col border border-slate-700">
    <div className="p-6 flex-grow">
      <div className="flex items-start justify-between">
        {feature.icon}
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${ feature.level === 'Technology' ? 'bg-purple-500/20 text-purple-300' : 'bg-indigo-500/20 text-indigo-300' }`}>
          {feature.level}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-100">{feature.title}</h3>
      <p className="mt-1 text-sm font-semibold text-indigo-400">{feature.category}</p>
      <p className="mt-3 text-gray-400 text-base flex-grow">{feature.description}</p>
    </div>
  </div>
);

export default FeatureCard;

