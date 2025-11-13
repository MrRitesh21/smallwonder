import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '@/assets/hero/hero-1.jpg';
import hero2 from '@/assets/hero/hero-2.jpg';
import hero3 from '@/assets/hero/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: 'Creative Learning Environment',
    subtitle: 'Where young minds explore and discover'
  },
  {
    image: hero2,
    title: 'Joyful Outdoor Activities',
    subtitle: 'Building strength and confidence through play'
  },
  {
    image: hero3,
    title: 'Artistic Expression',
    subtitle: 'Nurturing creativity and imagination'
  }
];

const HeroSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 12000); // Change every 12 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Text content with glass overlay and CTAs */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 text-white shadow-xl">
              <h2
                className={`text-4xl md:text-6xl font-bold mb-3 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {slide.title}
              </h2>
              <p
                className={`text-xl md:text-2xl transition-all duration-1000 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`mt-6 flex flex-wrap gap-3 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <Button
                  onClick={() => navigate('/programs')}
                  className="bg-gradient-to-r from-primary to-secondary text-white btn-playful"
                  size="lg"
                >
                  Explore Programs
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/20"
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
