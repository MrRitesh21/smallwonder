import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { sendToWhatsApp } from '@/lib/whatsapp';
import { saveToGoogleSheets } from '@/lib/googleSheets';
import { sendEmail } from '@/lib/email';

interface AdmissionFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdmissionFormDialog = ({ open, onOpenChange }: AdmissionFormDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const admissions = JSON.parse(localStorage.getItem('admissions') || '[]');
    admissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('admissions', JSON.stringify(admissions));

    sendToWhatsApp(formData);
    await saveToGoogleSheets(formData);
    await sendEmail(formData);

    toast({
      title: "Application Submitted!",
      description: "We'll contact you soon to discuss the next steps.",
    });

    setFormData({
      childName: '',
      age: '',
      parentName: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
    });
    
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-accent/5">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gradient mb-2">
            Join Our Family
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Fill in the details below to start your child's journey with us
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="childName" className="text-primary font-semibold">Child's Name *</Label>
              <Input
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="mt-1 border-primary/20 focus:border-primary"
                placeholder="Enter child's full name"
              />
            </div>
            <div>
              <Label htmlFor="age" className="text-primary font-semibold">Age *</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-1 border-primary/20 focus:border-primary"
                placeholder="Child's age"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parentName" className="text-primary font-semibold">Parent's Name *</Label>
              <Input
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="mt-1 border-primary/20 focus:border-primary"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-primary font-semibold">Contact Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                className="mt-1 border-primary/20 focus:border-primary"
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-primary font-semibold">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 border-primary/20 focus:border-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-primary font-semibold">Address *</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 border-primary/20 focus:border-primary"
              rows={2}
              placeholder="Your residential address"
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-primary font-semibold">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 border-primary/20 focus:border-primary"
              rows={3}
              placeholder="Any special requirements or questions..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white btn-playful text-lg"
            size="lg"
          >
            <Send className="mr-2 h-5 w-5" />
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionFormDialog;
