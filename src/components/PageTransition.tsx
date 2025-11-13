import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-4'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;