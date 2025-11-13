import { useState } from 'react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Home, Palmtree, Trophy } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import flowerIcon from '@/assets/flower-icon.png';

const Activities = () => {
  const headerReveal = useScrollReveal();
  const tabsReveal = useScrollReveal();

  const activities = {
    indoor: [
      { icon: '🎨', title: 'Art & Craft', desc: 'Creative expression through colors and materials' },
      { icon: '📚', title: 'Story Time', desc: 'Engaging narratives to spark imagination' },
      { icon: '🎭', title: 'Role Play', desc: 'Dramatic activities for social development' },
      { icon: '🧩', title: 'Puzzles & Games', desc: 'Problem-solving and cognitive skills' },
      { icon: '🎵', title: 'Music & Dance', desc: 'Rhythm and movement for coordination' },
      { icon: '🔢', title: 'Math Activities', desc: 'Fun with numbers and patterns' },
    ],
    outdoor: [
      { icon: '⚽', title: 'Sports', desc: 'Team games and physical activities' },
      { icon: '🏃', title: 'Running & Racing', desc: 'Building stamina and speed' },
      { icon: '🌳', title: 'Nature Walks', desc: 'Exploring the natural environment' },
      { icon: '🏖️', title: 'Sand Play', desc: 'Sensory development through textures' },
      { icon: '🚴', title: 'Cycling', desc: 'Balance and motor skill development' },
      { icon: '🎯', title: 'Target Games', desc: 'Hand-eye coordination activities' },
    ],
    cocurricular: [
      { icon: '🎪', title: 'Annual Day', desc: 'Showcasing talents and achievements' },
      { icon: '🎂', title: 'Birthday Celebrations', desc: 'Making every child feel special' },
      { icon: '🏆', title: 'Competitions', desc: 'Healthy competition and participation' },
      { icon: '🎨', title: 'Art Exhibitions', desc: 'Displaying creative masterpieces' },
      { icon: '🌈', title: 'Festival Celebrations', desc: 'Learning cultural values' },
      { icon: '🚌', title: 'Field Trips', desc: 'Educational visits and excursions' },
    ],
  };

  return (
    <section id="activities" className="section-padding bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container mx-auto">
        <div ref={headerReveal.ref} className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}>
          <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {'Small Wonder'.split('').map((letter, index) => (
              <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))} Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A perfect blend of learning, play, and development
          </p>
        </div>

        <div ref={tabsReveal.ref} className={`scroll-reveal-scale ${tabsReveal.isVisible ? 'visible' : ''}`}>
          <Tabs defaultValue="indoor" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-2 bg-white rounded-full shadow-lg mb-12">
              <TabsTrigger
                value="indoor"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white py-3"
              >
                <Home className="w-5 h-5 mr-2" />
                Indoor
              </TabsTrigger>
              <TabsTrigger
                value="outdoor"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent/70 data-[state=active]:text-primary py-3"
              >
                <Palmtree className="w-5 h-5 mr-2" />
                Outdoor
              </TabsTrigger>
              <TabsTrigger
                value="cocurricular"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-accent/30 data-[state=active]:text-primary py-3"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Co-Curricular
              </TabsTrigger>
            </TabsList>

            {Object.entries(activities).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((activity, index) => (
                    <Card
                      key={index}
                      className="card-playful bg-white border-2 border-primary/10 hover:border-primary/30"
                    >
                      <div className="p-6 text-center">
                        <div className="text-6xl mb-4 animate-bounce-slow" style={{ animationDelay: `${index * 0.1}s` }}>
                          {activity.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{activity.title}</h3>
                        <p className="text-foreground/20">{activity.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Activities;
