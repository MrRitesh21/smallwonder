import { Card } from './ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import flowerIcon from '@/assets/flower-icon.png';

const About = () => {
  const headerReveal = useScrollReveal();
  const visionReveal = useScrollReveal();
  const foundersReveal = useScrollReveal();
  const logoReveal = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div ref={headerReveal.ref} className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}>
          <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About {'Small Wonder'.split('').map((letter, index) => (
              <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where every child blossoms like a flower in the sunlight
          </p>
        </div>

        <div ref={visionReveal.ref} className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={`card-playful bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 scroll-reveal-left ${visionReveal.isVisible ? 'visible' : ''}`}>
            <div className="p-8">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                "Where Potential Meets Excellence" - Every child is born with unique qualities and innumerable possibilities. 
                At Small Wonder, through well-planned curriculum and daily activities, we provide the elevation by which children 
                not only attain what they deserve & desire but achieve excellence too.
              </p>
            </div>
          </Card>

          <Card className={`card-playful bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 scroll-reveal-right ${visionReveal.isVisible ? 'visible' : ''}`}>
            <div className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                We ensure children get into an environment where they feel safe and secure. Our everyday activities are planned 
                keeping in view the requirements of children who need to be prepared for the competitive world. We lay a strong 
                foundation of knowledge and values, believing that a healthy mind stays in a healthy body.
              </p>
            </div>
          </Card>
        </div>

        {/* Founders Section */}
        <div ref={foundersReveal.ref} className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 scroll-reveal-scale ${foundersReveal.isVisible ? 'visible' : ''}`}>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Our Founders</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-playful border-2 border-primary/20">
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                  GD
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Late Shri Gyan Das</h4>
                <p className="text-sm font-semibold text-secondary mb-3">Founder</p>
                <p className="text-sm text-foreground/70">
                  Civil Engineer and retired Superintendent Engineer who founded Small Wonder in 2011 with a vision 
                  of quality education with strong moral values.
                </p>
              </div>
            </Card>

            <Card className="card-playful border-2 border-secondary/20">
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-4xl font-bold">
                  MV
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Mrs. Manju Verma</h4>
                <p className="text-sm font-semibold text-secondary mb-3">Co-Founder</p>
                <p className="text-sm text-foreground/70">
                  Nature enthusiast and eminent name in Annual flower, fruits and vegetable exhibitions. 
                  Winner of several accolades from the Honorable Governor since 1995.
                </p>
              </div>
            </Card>

            <Card className="card-playful border-2 border-accent/20">
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-danger flex items-center justify-center text-white text-4xl font-bold">
                  MV
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Mrs. Mamta Verma</h4>
                <p className="text-sm font-semibold text-secondary mb-3">Director</p>
                <p className="text-sm text-foreground/70">
                  Master's in Fine Arts, former lecturer at Amity University's Fine Arts department, 
                  and award-winning photography enthusiast.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Logo Meaning */}
        <div ref={logoReveal.ref} className={`mt-16 text-center scroll-reveal ${logoReveal.isVisible ? 'visible' : ''}`}>
          <Card className="card-playful bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-2 border-primary/20 inline-block">
            <div className="p-8">
              <img src={flowerIcon} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
              <p className="text-lg text-foreground/80 max-w-2xl">
                <strong className="text-primary">Our Logo Symbolizes:</strong> Children being like flowers, 
                each having a unique fragrance and features. With love, proper learning and the right environment, 
                they will blossom like flowers in the sunlight, growing from strength to strength.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
