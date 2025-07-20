import React from 'react';

const ErrorDisplay = ({ message, onRetry }) => (
    <div className="rounded-md bg-red-900/50 border border-red-700 p-4 min-h-[400px] flex flex-col justify-center">
        <div className="flex">
            <div className="flex-shrink-0"><svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg></div>
            <div className="ml-3">
                <h3 className="text-sm font-medium text-red-300">An Error Occurred</h3>
                <div className="mt-2 text-sm text-red-400"><p>{message}</p></div>
                 {onRetry && (<div className="mt-4"><button onClick={onRetry} type="button" className="text-sm font-medium text-red-300 hover:text-red-200">Try Again</button></div>)}
            </div>
        </div>
    </div>
);

export default ErrorDisplay;


