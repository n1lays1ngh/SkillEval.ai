import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles'; 
import { darkTheme } from './theme'; 
import Header from './Components/landing/Header';
import Footer from './Components/landing/Footer';
import LandingPage from './Pages/LandingPage';
import AnalyzerPage from './Pages/AnalyzerPage';

export default function App() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  const goToHome = (e) => {
    if (e) e.preventDefault();
    setShowAnalyzer(false);
  };

  return (
    
    <ThemeProvider theme={darkTheme}>
      <div className="bg-slate-900 min-h-screen font-sans text-gray-300">
        <Header onHomeClick={goToHome} />
        <main>
          {showAnalyzer ? (
            <AnalyzerPage onGoHome={goToHome} />
          ) : (
            <LandingPage onStartAnalysis={() => setShowAnalyzer(true)} />
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}