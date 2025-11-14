import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const LeadFormDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 10 seconds if not shown before
    const hasShown = localStorage.getItem('leadFormShown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('leadFormShown', 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone.length !== 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    // Store in localStorage (later connect to Supabase)
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('leads', JSON.stringify(leads));

    toast({
      title: "Thank You!",
      description: "We'll contact you soon.",
    });

    setIsOpen(false);
    setFormData({ name: '', phone: '', email: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative animate-scale-in shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary mb-2">Join Our Family!</h2>
          <p className="text-muted-foreground">Get a free consultation & school tour</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Child's Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter child's name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Parent's Phone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                setFormData({ ...formData, phone: numericValue });
              }}
              pattern="[0-9]{10}"
              maxLength={10}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white btn-playful"
            size="lg"
          >
            Get Free Consultation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LeadFormDialog;
