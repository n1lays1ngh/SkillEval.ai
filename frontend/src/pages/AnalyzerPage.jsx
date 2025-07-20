import React, { useState } from 'react';
import axios from 'axios';
import StepIndicator from '../Components/analyzer/StepIndicator';
import ProfileForm from '../Components/analyzer/ProfileForm';
import AnalysisView from '../Components/analyzer/AnalysisView';
import RoadmapView from '../Components/analyzer/RoadmapView';
import Loader from '../Components/common/Loader';
import ErrorDisplay from '../Components/common/ErrorDisplay';

const API_BASE_URL = 'http://127.0.0.1:8000';

const AnalyzerPage = ({ onGoHome }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ role: '', skills: '', projects: '', github_username: '' });
  const [analysisResult, setAnalysisResult] = useState(null);
  const [roadmapResult, setRoadmapResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnalyzeProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/analyze-profile`, formData);
      setAnalysisResult(response.data);
      setStep(1);
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Failed to analyze profile. Please check your inputs and try again.';
      setError(typeof errorMessage === 'object' ? JSON.stringify(errorMessage) : errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateRoadmap = async () => {
    if (!analysisResult || !analysisResult.skill_gaps) {
      setError('Cannot generate roadmap without skill gaps from analysis.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRoadmapResult(null);
    const payload = { role: formData.role, gaps: analysisResult.skill_gaps };
    try {
      const response = await axios.post(`${API_BASE_URL}/generate-roadmap`, payload);
      setRoadmapResult(response.data.roadmap);
      setStep(2);
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Failed to generate roadmap.';
      setError(typeof errorMessage === 'object' ? JSON.stringify(errorMessage) : errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleStartOver = () => {
    setStep(0);
    setFormData({ role: '', skills: '', projects: '', github_username: '' });
    setAnalysisResult(null);
    setRoadmapResult(null);
    setError(null);
    setIsLoading(false);
  };

  const renderContent = () => {
    if (isLoading) {
        let loadingText = "Analyzing your profile...";
        if (step === 1) loadingText = "Generating your personalized roadmap...";
        return <Loader text={loadingText} />;
    }
    if (error) {
        return <ErrorDisplay message={error} onRetry={handleStartOver} />;
    }
    switch (step) {
      case 0: return <ProfileForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleAnalyzeProfile} />;
      case 1: return <AnalysisView result={analysisResult} handleGenerateRoadmap={handleGenerateRoadmap} handleStartOver={handleStartOver} />;
      case 2: return <RoadmapView roadmap={roadmapResult} handleStartOver={handleStartOver} />;
      default: return <ProfileForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleAnalyzeProfile} />;
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 max-w-10xl">
       <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 sm:p-10 mb-8 mt-4 flex justify-center">
          <StepIndicator currentStep={step} />
      </div>
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 sm:p-10">
          {renderContent()}
      </div>
       <div className="text-center mt-6">
          <button onClick={onGoHome} className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
              &larr; Back to Home
          </button>
      </div>
    </div>
  );
};

export default AnalyzerPage;
