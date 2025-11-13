import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, BookOpen, Users, Award, Shield, Clock, MapPin, Phone, Star, Camera, Palette, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import Testimonials from '@/components/Testimonials';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  const navigate = useNavigate();
  
  // Scroll reveal hooks for different sections
  const featuresReveal = useScrollReveal();
  const overviewReveal = useScrollReveal();
  const programsReveal = useScrollReveal();
  const facilitiesReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const features = [
    { icon: Shield, title: 'Safe Environment', desc: 'CCTV monitored, child-safe facilities', color: 'from-blue-500 to-blue-600', iconColor: 'text-white' },
    { icon: BookOpen, title: 'Quality Education', desc: 'Well-planned curriculum & activities', color: 'from-green-500 to-green-600', iconColor: 'text-white' },
    { icon: Users, title: 'Expert Teachers', desc: 'Loving and experienced educators', color: 'from-purple-500 to-purple-600', iconColor: 'text-white' },
    { icon: Award, title: 'Holistic Growth', desc: 'Physical, mental & social development', color: 'from-pink-500 to-pink-600', iconColor: 'text-white' },
  ];

  const programs = [
    { icon: Palette, title: 'Creative Arts', desc: 'Drawing, painting, and craft activities', age: '2-5 years', color: 'from-pink-500 to-rose-600' },
    { icon: Music, title: 'Music & Dance', desc: 'Rhythm, songs, and movement activities', age: '2-5 years', color: 'from-purple-500 to-indigo-600' },
    { icon: BookOpen, title: 'Early Literacy', desc: 'Reading readiness and language skills', age: '3-5 years', color: 'from-blue-500 to-cyan-600' },
    { icon: Users, title: 'Social Skills', desc: 'Teamwork and communication development', age: '2-5 years', color: 'from-green-500 to-emerald-600' },
  ];

  const facilities = [
    { icon: Shield, title: 'Safety First', desc: 'Round-the-clock CCTV monitoring and secure premises' },
    { icon: Camera, title: 'Activity Gallery', desc: 'Regular photo updates of your child\'s activities' },
    { icon: Clock, title: 'Flexible Timings', desc: 'Morning and afternoon sessions available' },
    { icon: Heart, title: 'Nutritious Meals', desc: 'Healthy snacks and meals prepared fresh daily' },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Features Grid */}
      <section ref={featuresReveal.ref} className="section-padding bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto">
          <div className={`scroll-reveal ${featuresReveal.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
              Why Choose {'Small Wonder'.split('').map((letter, index) => (
                <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}?
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Providing the best foundation for your child's future
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className={`card-playful hover-lift text-center border-2 border-primary/10 hover:border-primary/30 group bg-white scroll-reveal-scale ${featuresReveal.isVisible ? 'visible' : ''} stagger-${(index % 4) + 1}`}
                >
                  <div className="p-8">
                    <div className={`bg-gradient-to-br ${feature.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                      <IconComponent className={`w-12 h-12 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section ref={overviewReveal.ref} className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 scroll-reveal-left ${overviewReveal.isVisible ? 'visible' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Founded in 2011 💫
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Small Wonder Pre-School was established with a vision to provide quality early childhood education 
                in a nurturing environment. Founded by Late Shri Gyan Das and Mrs. Manju Verma, we continue to 
                uphold the values of excellence and holistic child development.
              </p>
              <div className="bg-gradient-to-r from-accent/20 to-secondary/20 p-4 rounded-2xl border-l-4 border-primary">
                <p className="text-primary font-semibold italic">
                  "Every child is a different kind of flower, and all together make this world a beautiful garden."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => navigate('/about')}
                  className="bg-primary text-white hover:bg-primary/90"
                  size="lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Our Story
                </Button>
                <Button
                  onClick={() => navigate('/gallery')}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  size="lg"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  View Gallery
                </Button>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 scroll-reveal-right ${overviewReveal.isVisible ? 'visible' : ''}`}>
              {[
                { number: '12+', label: 'Years of Excellence', icon: '🏆' },
                { number: '500+', label: 'Happy Children', icon: '👶' },
                { number: '15+', label: 'Expert Teachers', icon: '👩‍🏫' },
                { number: '100%', label: 'Parent Satisfaction', icon: '❤️' },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className={`card-playful text-center bg-white p-6 hover-lift scroll-reveal-scale ${overviewReveal.isVisible ? 'visible' : ''} stagger-${(index % 4) + 1}`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsReveal.ref} className="section-padding bg-white">
        <div className="container mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${programsReveal.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Learning Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully designed programs that nurture every aspect of your child's development
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card
                  key={index}
                  className={`card-playful hover-lift text-center border-2 border-primary/10 hover:border-primary/30 group bg-gradient-to-br from-white to-primary/5 scroll-reveal-scale ${programsReveal.isVisible ? 'visible' : ''} stagger-${(index % 4) + 1}`}
                >
                  <div className="p-6">
                    <div className={`bg-gradient-to-br ${program.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{program.title}</h3>
                    <p className="text-sm text-foreground/70 mb-3">{program.desc}</p>
                    <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {program.age}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Quick Contact Info */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card
              className="card-playful hover-lift card-interactive bg-white p-6 hover-glow cursor-pointer"
              onClick={() => window.open('https://maps.google.com/?q=Small Wonder school,28 senani vihar Raibareli road Telibagh, Lucknow, Uttar Pradesh', '_blank')}
            >
              <MapPin className="w-16 h-16 text-pink-600 mx-auto mb-4 animate-bounce-slow drop-shadow-lg" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-700 font-medium">Small Wonder school ,28 senani vihar Raibareli road Telibagh <br /> Lucknow, Uttar Pradesh</p>
            </Card>
            <Card
              className="card-playful hover-lift card-interactive bg-white p-6 hover-glow cursor-pointer"
              onClick={() => window.open('tel:+919876543210')}
            >
              <Phone className="w-16 h-16 text-green-600 mx-auto mb-4 animate-wiggle drop-shadow-lg" />
              <h3 className="text-lg font-bold text-green-600 mb-2">Call Us</h3>
              <p className="text-sm text-gray-700 font-medium">+91 98765 43210<br />Mon-Fri: 8AM-6PM</p>
            </Card>
            <Card className="card-playful hover-lift card-interactive bg-white p-6 hover-glow">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-spin-slow drop-shadow-lg" />
              <h3 className="text-lg font-bold text-blue-600 mb-2">School Hours</h3>
              <p className="text-sm text-gray-700 font-medium">Morning: 9AM-12PM<br />Afternoon: 1PM-4PM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaReveal.ref} className="section-padding bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🌟</div>
          <div className="absolute bottom-10 right-10 text-8xl">🎨</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">✨</div>
          <div className="absolute top-1/3 right-1/4 text-6xl">💫</div>
        </div>
        <div className={`container mx-auto text-center relative z-10 scroll-reveal ${ctaReveal.isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95 drop-shadow-md">
            Join our Small Wonder family and watch your child bloom with confidence, creativity, and joy!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-white text-primary hover:bg-yellow-400 hover:text-gray-900 btn-playful text-lg font-bold"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Schedule a Visit Today
            </Button>
            <Button
              onClick={() => (window as any).openAdmissionForm?.()}
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white btn-playful text-lg border-2 border-white font-bold shadow-xl"
            >
              <Heart className="mr-2 h-5 w-5" />
              Apply for Admission
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center gap-2 text-white">
            <Star className="w-5 h-5 fill-current text-yellow-300" />
            <span className="text-lg font-semibold drop-shadow-md">Trusted by 500+ families since 2011</span>
            <Star className="w-5 h-5 fill-current text-yellow-300" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
