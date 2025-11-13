import { Facebook, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 text-foreground relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-2xl animate-bubble-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-300 to-green-300 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img src={logo} alt="Small Wonder Pre-School" className="h-16 w-auto mb-4 hover:scale-110 transition-transform duration-300" />
            <p className="text-foreground/80 mb-4 max-w-md font-medium">
              Where Potential Meets Excellence. Nurturing young minds with love, care, 
              and quality education since 2011.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/smallwonderplayschool" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-2xl hover:-rotate-12 animate-pop-in">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/smallwonder_pre_school" className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-2xl hover:rotate-12 animate-pop-in" style={{animationDelay: '0.1s'}}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-br from-red-500 to-red-600 text-white p-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-2xl hover:-rotate-12 animate-pop-in" style={{animationDelay: '0.2s'}}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Programs', path: '/programs'}, {name: 'Gallery', path: '/gallery'}, {name: 'Contact', path: '/contact'}].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-foreground/70 hover:text-pink-600 transition-all duration-300 hover:translate-x-2 inline-block font-medium hover:font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <a
                  href="https://maps.google.com/?q=Small Wonder school,28 senani vihar Raibareli road (telibagh) Lucknow, Uttar Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 text-sm hover:text-pink-600 transition-colors font-medium"
                >
                  Small Wonder school ,28 senani vihar Raibareli road ( telibagh) Lucknow, Uttar Pradesh
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a
                  href="tel:+919415410801"
                  className="text-foreground/70 text-sm hover:text-green-600 transition-colors font-medium"
                >
                  +91 9415410801
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:smallwonderlko@gmail.com"
                  className="text-foreground/70 text-sm hover:text-blue-600 transition-colors font-medium"
                >
                  smallwonderlko@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 pt-8 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-400"></div>
          <p className="text-foreground/70 font-medium mt-2">
            © 2025 {'Small Wonder'.split('').map((letter, index) => (
              <span key={index} className="animate-bubble-letter" style={{animationDelay: `${index * 0.15}s`}}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))} Pre-School. All rights reserved. | Designed By <span className="text-gradient font-bold">DigiWil</span> with <span className="text-red-500 animate-pulse">❤️</span> for children 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;