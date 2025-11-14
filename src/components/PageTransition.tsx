import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExiting(true);
    setIsVisible(false);
    
    const exitTimer = setTimeout(() => {
      setIsExiting(false);
    }, 300);
    
    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 350);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(enterTimer);
    };
  }, [location.pathname]);

  return (
    <>
      {/* Exit overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 z-50 pointer-events-none transition-all duration-300 ${
          isExiting ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Page content */}
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;