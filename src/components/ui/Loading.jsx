import React from 'react';

const Loading = ({ text = 'Loading...', fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-[#200101] z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-amber-500/50 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-white font-medium text-lg">{text}</p>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="w-14 h-14 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-14 h-14 border-4 border-transparent border-r-amber-500/30 rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/80 font-medium text-base">{text}</p>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;