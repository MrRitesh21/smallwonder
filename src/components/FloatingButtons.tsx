import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/919415410801?text=Hello! I would like to know more about Small Wonder Pre-School', '_blank');
  };

  const handleCall = () => {
    // Replace with actual phone number
    window.location.href = 'tel:+919415410801';
  };

  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transform hover:scale-110 transition-all duration-300 animate-bounce-slow border-2 border-white"
        style={{ animationDelay: '0.2s' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </span>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:scale-110 transition-all duration-300 animate-float border-2 border-white"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call us now
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
