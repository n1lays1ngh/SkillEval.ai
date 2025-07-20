
import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Topic = ({ title, justification, actionableSteps }) => {
  return (
    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
        <h4 className="font-semibold text-lg text-indigo-400">{title || "Untitled Topic"}</h4>
        {justification && <p className="mt-1 text-sm text-gray-400 italic">{justification}</p>}
        {actionableSteps && actionableSteps.length > 0 && (
          <div className="mt-4">
              <p className="text-sm font-semibold text-gray-300 mb-2">Actionable Steps:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                {actionableSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
              </ul>
          </div>
        )}
    </div>
  );
};


const ModuleDetails = ({ module }) => {
  
  if (!module || !module.topics) {
    return <div className="text-center p-4">Could not load module details.</div>;
  }

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg flex flex-col border border-slate-700 p-6 h-full">
      <h3 className="text-2xl font-bold text-indigo-400">{module.moduleTitle || "Untitled Module"}</h3>
      <p className="text-gray-400 mt-1 mb-4 pb-4 border-b border-slate-700">{module.moduleDescription}</p>
      
      <div className="flex-grow overflow-y-auto pr-2 space-y-4">
        {module.topics.map((topic, index) => (
          <Topic 
            key={index}
            title={topic.topicTitle}
            justification={topic.justification}
            actionableSteps={topic.actionableSteps}
          />
        ))}
      </div>
    </div>
  );
};


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8', 
    },
    background: {
      paper: '#1e293b', 
    },
    text: {
        primary: '#d1d5db', 
        secondary: '#9ca3af', 
    }
  },
  components: {
    MuiStepIcon: {
        styleOverrides: {
            root: {
                '&.Mui-active': {
                    color: '#6366f1', 
                },
                '&.Mui-completed': {
                    color: '#4f46e5', 
                },
            },
        },
    },
  },
});



const RoadmapView = ({ roadmap, handleStartOver }) => {
  const roadmapData = useMemo(() => {
    
    if (typeof roadmap !== 'string' || !roadmap) {
      console.error("Roadmap prop is invalid or undefined. Cannot parse.", roadmap);
      return { error: true, message: "Could not load roadmap. No data was received from the server." };
    }

    try {
      let jsonString = roadmap;
      
      const firstBrace = jsonString.indexOf('{');
      const lastBrace = jsonString.lastIndexOf('}');

      if (firstBrace !== -1 && lastBrace > firstBrace) {
        jsonString = jsonString.substring(firstBrace, lastBrace + 1);
      } else {
        throw new Error("No valid JSON object found in the string.");
      }
      
      const parsedData = JSON.parse(jsonString);

      
      if (!parsedData || !Array.isArray(parsedData.modules)) {
        throw new Error("Parsed JSON is missing the 'modules' array.");
      }

      return parsedData;

    } catch (error) {
      console.error("Failed to parse roadmap JSON:", error);
      return { error: true, message: `The data received was not valid JSON. ${error.message}` };
    }
  }, [roadmap]);

  const [selectedModule, setSelectedModule] = useState(0);

  
  if (roadmapData.error) {
      return (
          <div className="text-center text-red-400 p-8 bg-slate-800 rounded-lg border border-red-700">
              <h2 className="text-2xl font-bold">Error Loading Roadmap</h2>
              <p className="mt-2">{roadmapData.message}</p>
              <button onClick={handleStartOver} className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Try Again
              </button>
          </div>
      )
  }

  const handleStep = (step) => () => {
    setSelectedModule(step);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-100">{roadmapData.title || "Your Personalized Learning Roadmap"}</h2>
        <p className="text-center text-lg text-gray-400 mt-2 max-w-3xl mx-auto">{roadmapData.introduction}</p>
      </div>
      
      
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ width: '100%', bgcolor: 'transparent', mb: 4 }}>
            <Stepper nonLinear activeStep={selectedModule} alternativeLabel>
                {(roadmapData.modules || []).map((mod, index) => (
                    <Step key={mod.moduleTitle}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {mod.moduleTitle || `Module ${index + 1}`}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
      </ThemeProvider>
      
      
      <div>
          {roadmapData.modules.length > 0 && roadmapData.modules[selectedModule] ? (
            <ModuleDetails module={roadmapData.modules[selectedModule]} />
          ) : (
            <div className="text-center p-4">Select a module to see the details.</div>
          )}
      </div>
      
      {roadmapData.generalTips && roadmapData.generalTips.length > 0 && (
          <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-100 mb-3">General Tips for Success</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {roadmapData.generalTips.map((tip, index) => <li key={index}>{tip}</li>)}
              </ul>
          </div>
      )}

      <div className="text-center pt-4">
        <button onClick={handleStartOver} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Analyze Another Profile
        </button>
      </div>
    </div>
  );
};

export default RoadmapView;
