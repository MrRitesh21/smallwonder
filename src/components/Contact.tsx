import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import flowerIcon from '@/assets/flower-icon.png';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for your inquiry. We will contact you soon.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <img src={flowerIcon} alt="Flower" className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Visit us or send us a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-playful border-2 border-primary/10">
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Phone *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setFormData({ ...formData, phone: numericValue });
                  }}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your inquiry..."
                  className="rounded-xl border-2 focus:border-primary min-h-32"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white btn-playful text-lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-playful bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.open('https://maps.google.com/?q=Small Wonder school,28 senani vihar Raibareli road Lucknow, Uttar Pradesh', '_blank')}>
              <div className="p-6 flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Address</h3>
                  <p className="text-foreground/70">
                    {'Small Wonder'.split('').map((letter, index) => (
                      <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))} Pre-School<br />
                    28 senani vihar Raibareli road Lucknow( telibagh)<br />
                    India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-playful bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.open('tel:+919415410801')}>
              <div className="p-6 flex items-start gap-4">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Phone</h3>
                  <p className="text-foreground/70">+91 9415410801</p>
                </div>
              </div>
            </Card>

            <Card className="card-playful bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.open('mailto:smallwonderlko@gmail.com')}>
              <div className="p-6 flex items-start gap-4">
                <div className="bg-accent text-white p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Email</h3>
                  <p className="text-foreground/70">smallwonderlko@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="card-playful bg-gradient-to-br from-danger/10 to-danger/5 border-2 border-danger/20">
              <div className="p-6 flex items-start gap-4">
                <div className="bg-danger text-white p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">School Hours</h3>
                  <p className="text-foreground/70">
                    Monday - Friday: 8:00 AM - 2:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg bg-muted">
              <iframe
                title="Small Wonder School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0482934922106!2d80.93960257590699!3d26.774730476729623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb9d7767338d%3A0xf1d4ec8957abf263!2sSmall%20Wonder%20School!5e0!3m2!1sen!2sin!4v1762938801278!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[350px] md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
