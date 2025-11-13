import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sparkles, BookOpen, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import welcomeBack from '@/assets/hero/welcome-back.jpg';
import summerVibes from '@/assets/hero/summer-vibes.jpg';
import buildingBlocks from '@/assets/hero/building-blocks.jpg';

const heroSlides = [
  { image: welcomeBack, title: 'Welcome Back to School' },
  { image: summerVibes, title: 'Fun Summer Activities' },
  { image: buildingBlocks, title: 'Building Bright Futures' },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 animate-fade-in">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-semibold text-gray-700">Trusted Since 2011</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900 mb-2">Welcome to</span>
              <span className="block">
                {'Small Wonder'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-bubble-letter"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
              <span className="block text-gray-700 mt-2">Pre-School</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Where every child's potential meets excellence through play, learning, and love.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => (window as any).openAdmissionForm?.()}
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
              <Button
                onClick={() => navigate('/about')}
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-pink-600 hover:bg-pink-50 px-8 py-6 text-lg font-semibold transition-all"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">500+ Families</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-medium text-gray-600 ml-1">5.0 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
              
              {/* Slide indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-pop-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">CCTV Monitored</div>
                  <div className="text-xs text-gray-600">Safe & Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gray-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;