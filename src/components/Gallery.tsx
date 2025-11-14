import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import flowerIcon from '@/assets/flower-icon.png';
import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import playground from '@/assets/gallery/playground.jpg';
import beadActivity from '@/assets/gallery/bead-activity.jpg';
import fishingActivity from '@/assets/gallery/fishing-activity.jpg';
import navratri from '@/assets/gallery/navratri-celebration.jpg';
import engineerDay from '@/assets/gallery/engineer-day.jpg';
import student1 from '@/assets/gallery/student-1.jpg';
import student2 from '@/assets/gallery/student-2.jpg';

const galleryItems = [
  { url: gallery1, title: 'International Moon Day', description: 'Learning about space' },
  { url: gallery2, title: 'Jungle Safari Theme', description: 'Adventure and exploration' },
  { url: gallery3, title: 'Mango Day Celebration', description: 'Fun with fruits' },
  { url: gallery4, title: 'Umbrella Day', description: 'Colorful celebrations' },
  { url: gallery5, title: 'Independence Day', description: 'Patriotic spirit' },
  { url: playground, title: 'Outdoor Playground', description: 'Active play time' },
  { url: beadActivity, title: 'Learning Through Play', description: 'Creative activities' },
  { url: fishingActivity, title: 'Fishing Activity', description: 'Outdoor fun' },
  { url: navratri, title: 'Navratri Celebration', description: 'Cultural festivities' },
  { url: engineerDay, title: 'Engineer Day Theme', description: 'Building dreams' },
  { url: student1, title: 'Happy Student', description: 'Joyful learning' },
  { url: student2, title: 'Ready to Learn', description: 'Eager minds' },
];

const Gallery = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(Date.now());
  const autoRotationRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate when section enters viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate progress through the section (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        
        // Slower rotation - 1.5 full rotations to see all images
        const totalRotations = 1.5;
        const targetRotation = scrollProgress * 360 * totalRotations;
        
        setRotation(targetRotation);
        autoRotationRef.current = targetRotation;
        lastScrollTime.current = Date.now();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotation when not scrolling
  useEffect(() => {
    let animationId: number;
    const autoRotate = () => {
      const timeSinceScroll = Date.now() - lastScrollTime.current;
      
      // Start auto-rotation after 500ms of no scrolling
      if (timeSinceScroll > 500) {
        autoRotationRef.current += 0.3;
        setRotation(autoRotationRef.current);
      }
      
      animationId = requestAnimationFrame(autoRotate);
    };
    
    animationId = requestAnimationFrame(autoRotate);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  const anglePerItem = 360 / galleryItems.length;

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="relative min-h-[250vh] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto pt-24">
          <div className="text-center mb-0">
            <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {'Small Wonder'.split('').map((letter, index) => (
                <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))} Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scroll to explore our precious moments
            </p>
          </div>

          {/* 3D Circular Gallery */}
          <div 
            className="relative w-full h-[600px] flex items-center justify-center"
            style={{ perspective: '2000px' }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s linear',
              }}
            >
              {galleryItems.map((item, i) => {
                const itemAngle = i * anglePerItem;
                const totalRotation = rotation % 360;
                const relativeAngle = (itemAngle + totalRotation + 360) % 360;
                const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
                const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));
                const scale = Math.max(0.8, 1 - (normalizedAngle / 360));

                return (
                  <div
                    key={i}
                    className="absolute w-[280px] md:w-[320px] h-[380px] md:h-[420px] cursor-pointer"
                    style={{
                      transform: `rotateY(${itemAngle}deg) translateZ(550px) scale(${scale})`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-140px',
                      marginTop: '-190px',
                      opacity: opacity,
                      transition: 'opacity 0.2s linear, transform 0.1s linear'
                    }}
                    onClick={() => setSelectedImage(item.url)}
                  >
                    <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border-2 border-primary/20 bg-white backdrop-blur-lg hover:border-primary/50 transition-all duration-300">
                      <img
                        src={item.url}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground animate-bounce">
              ↓ Scroll to rotate gallery ↓
            </p>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage || ''}
              alt="Gallery"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
