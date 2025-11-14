import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Sparkles, BookOpen, Star, Shield, Users, Award, Phone, MessageCircle } from 'lucide-react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 80,
          y: (e.clientY - rect.top - rect.height / 2) / 80,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pt-24 md:pt-0">
      {/* Animated Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-20 bg-white/40 rounded-full blur-xl animate-float" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-20 w-40 h-24 bg-white/30 rounded-full blur-xl animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-22 bg-white/35 rounded-full blur-xl animate-float" style={{ animationDuration: '30s', animationDelay: '10s' }}></div>
      </div>

      {/* Floating 3D Toy Blocks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🧸', '🎨', '🎪', '🎯', '🎈', '⭐', '🌈', '🎵'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDuration: `${15 + i * 3}s`,
              animationDelay: `${i * 2}s`,
              transform: `translate3d(${mousePosition.x * (i % 3)}px, ${mousePosition.y * (i % 3)}px, 0) rotate(${i * 45}deg)`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Soft Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ transform: `translate3d(${mousePosition.x * 2}px, ${mousePosition.y * 2}px, 0)` }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ transform: `translate3d(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px, 0)`, animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6" style={{ transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg border-2 border-yellow-300/50 mt-4 md:mt-0 animate-bounce-slow">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Trusted Since 2011</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block text-gray-800 mb-2 animate-fade-in">Welcome to</span>
              <span className="block">
                {'Small Wonder'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-bubble-letter"
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      filter: 'drop-shadow(0 4px 8px rgba(168,85,247,0.3))'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
              <span className="block text-gray-700 mt-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>Pre-School</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Where imagination blooms and every child discovers the joy of learning through play, creativity, and love.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button
                onClick={() => (window as any).openAdmissionForm?.()}
                size="lg"
                className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl animate-glow"
              >
                <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
                Enroll Now
              </Button>
              <Button
                onClick={() => navigate('/about')}
                size="lg"
                variant="outline"
                className="group border-3 border-purple-300 hover:border-purple-500 bg-white/90 backdrop-blur-sm hover:bg-purple-50 px-8 py-6 text-lg font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2 h-5 w-5 group-hover:text-purple-600 transition-colors" />
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-md border border-pink-200">
                <div className="flex -space-x-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white shadow-sm"></div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700">500+ Families</span>
              </div>
              <div className="flex items-center gap-1 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-md border border-yellow-200">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-bold text-gray-700 ml-1">5.0</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Scene */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s', transform: `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0)` }}>
            {/* Main Image Card with 3D Effect */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50" style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}>
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
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
              
              {/* Slide indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8 shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-4 border-2 border-green-200 animate-float hover:scale-110 transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-900">CCTV Monitored</div>
                  <div className="text-xs text-gray-600">Safe & Secure</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-4 border-2 border-blue-200 animate-float hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-900">Certified</div>
                  <div className="text-xs text-gray-600">Excellence</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-4 border-2 border-purple-200 animate-float hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-900">Expert Staff</div>
                  <div className="text-xs text-gray-600">Caring Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-24 z-30 flex flex-col gap-3">
        <a
          href="https://wa.me/919415410801"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all animate-bounce-slow hover:scale-110"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
        <a
          href="tel:+919415410801"
          className="group w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all animate-bounce-slow hover:scale-110"
          style={{ animationDelay: '0.5s' }}
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl animate-bounce-slow">🚀</span>
          <span className="text-gray-600 text-sm font-semibold">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
