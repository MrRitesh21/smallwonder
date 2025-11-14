import { Card } from '@/components/ui/card';
import flowerIcon from '@/assets/flower-icon.png';

const About = () => {
  return (
    <div className="min-h-screen pt-0">
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              About {'Small Wonder'.split('').map((letter, index) => (
                <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where every child blossoms like a flower in the sunlight
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-playful bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20">
              <div className="p-8">
                <div className="text-5xl mb-4">🌟</div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  "Where Potential Meets Excellence" - Every child is born with unique qualities and innumerable possibilities. 
                  At {'Small Wonder'.split('').map((letter, index) => (
                    <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}, through well-planned curriculum and daily activities, we provide the elevation by which children 
                  not only attain what they deserve & desire but achieve excellence too.
                </p>
              </div>
            </Card>

            <Card className="card-playful bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
              <div className="p-8">
                <div className="text-5xl mb-4">🎯</div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  We ensure children get into an environment where they feel safe and secure. Our everyday activities are planned 
                  keeping in view the requirements of children who need to be prepared for the competitive world. We lay a strong 
                  foundation of knowledge and values, believing that a healthy mind stays in a healthy body.
                </p>
              </div>
            </Card>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Story</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              At {'Small Wonder'.split('').map((letter, index) => (
                <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))} Pre School, your standards and expectations assure quality schooling and learning outcomes 
              necessary for your kids by early childhood play and providing them an opportunity to develop creative and 
              social skills.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {'Small Wonder'.split('').map((letter, index) => (
                <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))} kids enjoy the opportunity with supervision, guided activities and their personal learning 
              programs designed by our experienced and loving teachers. Since our establishment in 2011, we have been 
              committed to nurturing young minds and helping them reach their full potential.
            </p>
          </div>

          {/* Founders Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Meet Our Founders</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visionaries who transformed a dream into reality
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary to-secondary p-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold border-4 border-white">
                    GD
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-1">Late Shri Gyan Das</h3>
                  <p className="text-sm font-semibold text-secondary mb-3">Founder</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Civil Engineer and retired Superintendent Engineer at Irrigation department. Founded Small Wonder in 2011 
                    with a vision of quality education combined with strong moral values. His motto "Where potential meets excellence" 
                    continues to guide our institution.
                  </p>
                </div>
              </Card>

              <Card className="border-2 border-secondary/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-secondary to-accent p-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold border-4 border-white">
                    MV
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-1">Mrs. Manju Verma</h3>
                  <p className="text-sm font-semibold text-secondary mb-3">Co-Founder</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Nature enthusiast and eminent name in Annual flower, fruits and vegetable exhibitions held at Raj Bhavan Lucknow. 
                    Winner of several accolades from the Honorable Governor of Pradesh since 1995. Her passion for nurturing growth 
                    extends to our young learners.
                  </p>
                </div>
              </Card>

              <Card className="border-2 border-accent/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-accent to-danger p-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold border-4 border-white">
                    MV
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-1">Mrs. Mamta Verma</h3>
                  <p className="text-sm font-semibold text-secondary mb-3">Director</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Master's in Finance and Fine Arts, former lecturer at Amity University's Fine Arts department. 
                    Award-winning photography enthusiast who brings creativity and artistic vision to our educational approach, 
                    ensuring children develop their creative potential.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Happy Families</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Expert Teachers</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>

          {/* Logo Meaning */}
          <div className="text-center">
            <Card className="card-playful bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-2 border-primary/20 inline-block">
              <div className="p-8 md:p-12 max-w-3xl">
                <img src={flowerIcon} alt="Logo" className="w-24 h-24 mx-auto mb-6 animate-spin-slow" />
                <h3 className="text-2xl font-bold text-primary mb-4">The Meaning Behind Our Logo</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our logo symbolizes our core belief that children are like flowers - each having a unique fragrance and features. 
                  With love, proper learning, and the right environment, they will blossom like flowers in the sunlight, 
                  growing from strength to strength and transforming into Small Wonder.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
