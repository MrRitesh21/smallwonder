import { useState, useEffect } from 'react';
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

const defaultImages = [
  { id: 1, src: gallery1, alt: 'International Moon Day' },
  { id: 2, src: gallery2, alt: 'Jungle Safari Theme' },
  { id: 3, src: gallery3, alt: 'Mango Day Celebration' },
  { id: 4, src: gallery4, alt: 'Umbrella Day' },
  { id: 5, src: gallery5, alt: 'Independence Day' },
  { id: 6, src: playground, alt: 'Outdoor Playground Fun' },
  { id: 7, src: beadActivity, alt: 'Learning Through Play' },
  { id: 8, src: fishingActivity, alt: 'Outdoor Fishing Activity' },
  { id: 9, src: navratri, alt: 'Navratri Celebration' },
  { id: 10, src: engineerDay, alt: 'Engineer Day Theme' },
  { id: 11, src: student1, alt: 'Happy Student' },
  { id: 12, src: student2, alt: 'Ready to Learn' },
];

const Gallery = () => {
  const [images, setImages] = useState<typeof defaultImages>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Load images from localStorage or use defaults
    const storedImages = localStorage.getItem('galleryImages');
    if (storedImages) {
      try {
        setImages(JSON.parse(storedImages));
      } catch {
        setImages(defaultImages);
      }
    } else {
      setImages(defaultImages);
      localStorage.setItem('galleryImages', JSON.stringify(defaultImages));
    }
  }, []);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {'Small Wonder'.split('').map((letter, index) => (
              <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))} Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing precious moments of joy, learning, and growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                />
                
                {/* Zoom overlay effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Enhanced caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <p className="text-white font-bold text-lg mb-2">{image.alt}</p>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Click to view full size</span>
                    </div>
                  </div>
                </div>
                
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform scale-75 group-hover:scale-100">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                
                {/* Decorative sparkle */}
                <div className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 animate-pulse">
                  ✨
                </div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <img
              src={selectedImage || ''}
              alt="Gallery"
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
