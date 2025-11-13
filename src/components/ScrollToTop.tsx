import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-56 right-6 z-50 bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transform hover:scale-110 transition-all duration-300 animate-bounce-slow border-2 border-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
