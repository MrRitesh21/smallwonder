import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const headerReveal = useScrollReveal();
  const carouselReveal = useScrollReveal();

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      text: 'Small Wonder has been a blessing for our daughter. The teachers are incredibly caring and the environment is so nurturing. She looks forward to school every day!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      text: 'The best decision we made was enrolling our son here. The holistic approach to education and the focus on individual development is remarkable.',
      rating: 5,
    },
    {
      name: 'Anjali Verma',
      role: 'Parent',
      text: 'Excellent infrastructure, caring staff, and a wonderful learning environment. My child has grown so much in confidence and skills. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Meera Patel',
      role: 'Parent',
      text: 'The personalized attention and creative learning methods have helped my child develop both academically and socially. Truly exceptional!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Parent',
      text: 'Amazing facilities and dedicated teachers. My son has become more confident and curious about learning. Best preschool in the area!',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div ref={headerReveal.ref} className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Quote className="w-12 h-12 text-primary animate-pulse" />
            <span className="text-5xl">💬</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by families for quality education and care
          </p>
        </div>

        <div ref={carouselReveal.ref} className={`relative max-w-4xl mx-auto scroll-reveal-scale ${carouselReveal.isVisible ? 'visible' : ''}`}>
          <div 
            className="relative overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="card-playful bg-white/90 backdrop-blur-sm border-2 border-primary/20 mx-auto max-w-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-bl-3xl"></div>
                    
                    <div className="absolute top-6 left-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                      <Quote className="w-16 h-16" />
                    </div>

                    <div className="p-8 md:p-12 text-center relative z-10">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-8 h-8 fill-yellow-400 text-yellow-500 drop-shadow-lg transform hover:scale-125 transition-transform duration-300" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      
                      <p className="text-lg md:text-xl text-foreground/80 mb-8 italic leading-relaxed font-medium">
                        <span className="text-primary text-3xl font-bold">"</span>
                        {testimonial.text}
                        <span className="text-primary text-3xl font-bold">"</span>
                      </p>
                      
                      <div className="flex items-center justify-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                          <p className="text-muted-foreground text-sm flex items-center gap-1">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-white to-primary/5 hover:from-primary hover:to-secondary border-2 border-primary/30 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-white to-primary/5 hover:from-primary hover:to-secondary border-2 border-primary/30 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            onClick={nextSlide}
          >
            <ChevronRight className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
          </Button>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-gradient-to-r from-primary to-secondary shadow-lg'
                    : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
