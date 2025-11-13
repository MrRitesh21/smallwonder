import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-rotation effect
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

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Parents Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by families for quality education and care
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="card-playful bg-white border-2 border-primary/10 mx-auto max-w-2xl">
                    <div className="p-8 md:p-12 text-center">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-500 drop-shadow-md" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-foreground/80 mb-8 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary/40 shadow-lg transition-all duration-300 hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary/40 shadow-lg transition-all duration-300 hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
