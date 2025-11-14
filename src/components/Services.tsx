import { Card } from './ui/card';
import { Shield, Lightbulb, Heart, Camera, Apple, Laptop, BookOpen, Microscope, Stethoscope, Gamepad2, Sparkles, Baby } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import flowerIcon from '@/assets/flower-icon.png';

const Services = () => {
  const headerReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const additionalReveal = useScrollReveal();

  const services = [
    {
      title: '5 Point Safety',
      icon: Shield,
      color: 'from-primary to-primary/70',
      points: [
        { icon: Camera, text: 'CCTV Monitoring' },
        { icon: Shield, text: 'Child Safe Furniture' },
        { icon: Sparkles, text: 'Safe School Certification' },
        { icon: Heart, text: 'First Aid & Emergency Services' },
      ],
    },
    {
      title: 'NextGen Innovation',
      icon: Lightbulb,
      color: 'from-yellow-400 to-yellow-400/70',
      points: [
        { icon: BookOpen, text: 'Well Planned Curriculum' },
        { icon: BookOpen, text: 'Top Library' },
        { icon: Laptop, text: 'Computer Lab' },
        { icon: Microscope, text: 'Science Learning by Doing' },
      ],
    },
    {
      title: 'Total Health & Hygiene',
      icon: Heart,
      color: 'from-green-500 to-green-500/70',
      points: [
        { icon: Stethoscope, text: 'Health Assessment by Expert' },
        { icon: Gamepad2, text: '100% Non-Toxic Safe Toys' },
        { icon: Sparkles, text: 'Sanitized Toilets' },
        { icon: Baby, text: "Children's Fitness Program" },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div ref={headerReveal.ref} className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}>
          <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What {'Small Wonder'.split('').map((letter, index) => (
              <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))} Offers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive care and education for your child's holistic development
          </p>
        </div>

        <div ref={servicesReveal.ref} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`card-playful border-2 border-primary/10 overflow-hidden scroll-reveal-scale ${servicesReveal.isVisible ? 'visible' : ''} stagger-${(index % 3) + 1}`}
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <IconComponent className="w-12 h-12 mb-3" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {service.points.map((point, idx) => {
                    const PointIcon = point.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`bg-gradient-to-r ${service.color} p-2 rounded-full`}>
                          <PointIcon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-foreground font-medium pt-1">{point.text}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div ref={additionalReveal.ref} className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🍎', title: 'Healthy Food Habits', desc: 'Encouraging nutritious choices with appealing meals' },
            { icon: '👨‍🏫', title: 'Supportive Staff', desc: 'Caring teachers who support every student' },
            { icon: '🚌', title: 'Transportation Services', desc: 'Safe and reliable transport facilities' },
            { icon: '🎉', title: 'Event Activities', desc: 'Social skill development through celebrations' },
            { icon: '🏞️', title: 'Field Excursions', desc: 'Enriching field trips with safety first' },
            { icon: '💪', title: 'Physical Fitness', desc: 'Indoor & outdoor activities for holistic growth' },
          ].map((item, index) => (
            <Card
              key={index}
              className={`card-playful bg-gradient-to-br from-background to-muted/30 border-2 border-primary/10 scroll-reveal ${additionalReveal.isVisible ? 'visible' : ''} stagger-${(index % 3) + 1}`}
            >
              <div className="p-6 text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
