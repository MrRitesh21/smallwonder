import { useEffect, useState } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-7xl">
      <div
        className={`transition-all duration-300 rounded-full border border-white/20 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl'
            : 'bg-white/70 backdrop-blur-lg shadow-xl'
        }`}
      >
        {/* Colorful border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 to-purple-500 opacity-20 blur-sm"></div>
        
        <div className="relative px-6">
          <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <img 
              src={logo} 
              alt="Small Wonder Pre-School" 
              className="h-16 w-auto group-hover:scale-110 transition-transform duration-300" 
            />
            
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 hover:text-pink-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2 pl-4 border-l-2 border-gray-200">
              <a href="https://www.facebook.com/smallwonderplayschool" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/smallwonder_pre_school" className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            
            <Button
              onClick={() => (window as any).openAdmissionForm?.()}
              className="ml-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white btn-playful shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Enroll Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-2 animate-pop-in bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left py-3 px-5 font-semibold transition-all duration-300 rounded-full ${
                  location.pathname === item.path 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 hover:text-pink-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-3 pt-4 mt-4 border-t border-gray-200">
              <a href="https://www.facebook.com/smallwonderplayschool" className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/smallwonder_pre_school" className="p-3 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
              <Button
                onClick={() => (window as any).openAdmissionForm?.()}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white btn-playful shadow-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;