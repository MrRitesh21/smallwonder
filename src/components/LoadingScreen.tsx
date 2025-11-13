import { useEffect, useState } from 'react';
import flowerIcon from '@/assets/flower-icon.png';
import logo from '@/assets/logo.png';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-bubble-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-indigo-200 to-violet-200 rounded-full blur-3xl opacity-30 animate-bounce-slow"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo with animation */}
        <div className="mb-8 animate-pop-in">
          <img
            src={logo}
            alt="Small Wonder Pre-School"
            className="h-24 w-auto mx-auto drop-shadow-2xl"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Rotating circle with flower inside */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Outer spinner ring */}
          <div className="absolute inset-0 rounded-full border-8 border-slate-200/50 border-t-blue-500 animate-spin shadow-2xl" />
          {/* Middle spinner ring */}
          <div className="absolute inset-4 rounded-full border-6 border-blue-100/40 border-r-purple-500 animate-spin shadow-xl" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          {/* Inner spinner ring */}
          <div className="absolute inset-8 rounded-full border-4 border-purple-100/30 border-b-pink-500 animate-spin shadow-lg" style={{ animationDuration: '2s' }} />
          {/* Centered rotating flower */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={flowerIcon}
              alt="Loading"
              className="w-16 h-16 animate-spin-slow drop-shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold text-slate-800 drop-shadow-sm mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {'Small Wonder'.split('').map((letter, index) => (
            <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))} Pre-School
        </h2>
        <p className="text-slate-600 text-lg font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Where Learning Begins with Joy
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-slate-600 text-sm mt-2 font-semibold">{progress}%</p>
        </div>

        {/* Bouncing dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;