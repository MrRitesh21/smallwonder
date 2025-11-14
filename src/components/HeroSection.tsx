import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Sparkles, BookOpen, Phone, MessageCircle } from 'lucide-react';
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 md:pt-0" style={{ perspective: '1500px' }}>
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        transform: 'rotateX(60deg) translateZ(-200px)',
        transformOrigin: 'center center'
      }}></div>

      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute w-32 h-32 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDuration: `${20 + i * 5}s`,
              animationDelay: `${i * 2}s`,
              transform: `translate3d(${mousePosition.x * (i % 3 + 1)}px, ${mousePosition.y * (i % 3 + 1)}px, ${i * 50}px) rotateX(${i * 30}deg) rotateY(${i * 45}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 shadow-2xl"></div>
          </div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ transform: `translate3d(${mousePosition.x * 3}px, ${mousePosition.y * 3}px, 100px)` }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ transform: `translate3d(${-mousePosition.x * 3}px, ${-mousePosition.y * 3}px, 100px)`, animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6" style={{ transform: `translate3d(${mousePosition.x * 2}px, ${mousePosition.y * 2}px, 50px)`, transformStyle: 'preserve-3d' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl px-5 py-3 rounded-full shadow-2xl border border-purple-400/50 mt-4 md:mt-0 animate-bounce-slow">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-bold text-white">Trusted Since 2011</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight" style={{ transformStyle: 'preserve-3d' }}>
              <span className="block text-white/80 mb-2 animate-fade-in" style={{ transform: 'translateZ(20px)' }}>Welcome to</span>
              <span className="block" style={{ transform: 'translateZ(40px)' }}>
                {'Small Wonder'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-bubble-letter"
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.8)) drop-shadow(0 0 40px rgba(236,72,153,0.6))',
                      textShadow: '0 0 80px rgba(168,85,247,0.5)'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
              <span className="block text-white/90 mt-2 animate-fade-in" style={{ animationDelay: '0.5s', transform: 'translateZ(30px)' }}>Pre-School</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-purple-200 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.7s', transform: 'translateZ(25px)' }}>
              Where imagination blooms and every child discovers the joy of learning through play, creativity, and love.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in" style={{ animationDelay: '0.9s', transform: 'translateZ(30px)' }}>
              <Button
                onClick={() => (window as any).openAdmissionForm?.()}
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 rounded-2xl border border-purple-400/50"
                style={{ transform: 'translateZ(10px)', boxShadow: '0 20px 60px rgba(168,85,247,0.4)' }}
              >
                <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
                Enroll Now
              </Button>
              <Button
                onClick={() => navigate('/about')}
                size="lg"
                className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 text-white px-8 py-6 text-lg font-bold transition-all duration-300 rounded-2xl shadow-xl"
                style={{ transform: 'translateZ(10px)' }}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '1.1s', transform: 'translateZ(20px)' }}>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-white/20">
                <div className="flex -space-x-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white/50 shadow-lg"></div>
                  ))}
                </div>
                <span className="text-sm font-bold text-white">500+ Families</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-white/20">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-bold text-white ml-1">5.0 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Scene */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s', transform: `translate3d(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px, 100px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`, transformStyle: 'preserve-3d' }}>
            {/* Main Image Card with 3D Effect */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-400/50" style={{ boxShadow: '0 30px 80px rgba(168,85,247,0.5), inset 0 0 40px rgba(168,85,247,0.2)' }}>
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
            
            {/* 3D Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-green-400/50 animate-float hover:scale-110 transition-transform" style={{ transform: 'translateZ(50px)', boxShadow: '0 20px 40px rgba(16,185,129,0.4)' }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <div className="text-xs font-black text-white">CCTV Monitored</div>
                  <div className="text-xs text-green-200">Safe & Secure</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-blue-400/50 animate-float hover:scale-110 transition-transform" style={{ animationDelay: '1s', transform: 'translateZ(50px)', boxShadow: '0 20px 40px rgba(59,130,246,0.4)' }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏆</div>
                <div>
                  <div className="text-xs font-black text-white">Certified</div>
                  <div className="text-xs text-blue-200">Excellence</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-purple-400/50 animate-float hover:scale-110 transition-transform" style={{ animationDelay: '2s', transform: 'translateZ(50px)', boxShadow: '0 20px 40px rgba(168,85,247,0.4)' }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">👥</div>
                <div>
                  <div className="text-xs font-black text-white">Expert Staff</div>
                  <div className="text-xs text-purple-200">Caring Team</div>
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
          <span className="text-purple-200 text-sm font-semibold">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
