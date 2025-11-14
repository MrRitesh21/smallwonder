import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { FileUp, Send } from 'lucide-react';
import { sendToWhatsApp } from '@/lib/whatsapp';
import { saveToGoogleSheets } from '@/lib/googleSheets';
import { sendEmail } from '@/lib/email';

const AdmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: '',
    childDOB: '',
    childAge: '',
    gender: '',
    parentName: '',
    relation: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const admissionData = { 
      childName: formData.childName,
      age: formData.childAge,
      parentName: formData.parentName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      notes: formData.medicalConditions,
      timestamp: new Date().toISOString() 
    };
    
    const admissions = JSON.parse(localStorage.getItem('admissions') || '[]');
    admissions.push(admissionData);
    localStorage.setItem('admissions', JSON.stringify(admissions));

    sendToWhatsApp(admissionData);
    await saveToGoogleSheets(admissionData);
    await sendEmail(admissionData);

    toast({
      title: "Application Submitted!",
      description: "We'll contact you soon to discuss the next steps.",
    });

    // Reset form
    setFormData({
      childName: '',
      childDOB: '',
      childAge: '',
      gender: '',
      parentName: '',
      relation: '',
      phone: '',
      email: '',
      address: '',
      previousSchool: '',
      medicalConditions: '',
      emergencyContact: '',
      emergencyPhone: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone' || name === 'emergencyPhone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
              Admission Form
            </h1>
            <p className="text-xl text-muted-foreground">
              Begin your child's journey with Small Wonder Pre-School
            </p>
          </div>

          <Card className="card-playful bg-white p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Child Information */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">
                  Child Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="childName">Child's Full Name *</Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childDOB">Date of Birth *</Label>
                    <Input
                      id="childDOB"
                      name="childDOB"
                      type="date"
                      value={formData.childDOB}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childAge">Age *</Label>
                    <Input
                      id="childAge"
                      name="childAge"
                      type="number"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Information */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">
                  Parent/Guardian Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Full Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="relation">Relation *</Label>
                    <Input
                      id="relation"
                      name="relation"
                      value={formData.relation}
                      onChange={handleChange}
                      placeholder="Father/Mother/Guardian"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Residential Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">
                  Additional Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="previousSchool">Previous School (if any)</Label>
                    <Input
                      id="previousSchool"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                    <Textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      className="mt-1"
                      rows={3}
                      placeholder="Please mention any medical conditions, allergies, or special needs"
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload Section */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">
                  Documents Upload
                </h2>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <FileUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload Birth Certificate, Photo, and Previous School Records
                    </p>
                    <p className="text-xs text-muted-foreground">
                      (This feature will be available after Supabase integration)
                    </p>
                  </div>
                </div>
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
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdmissionForm;
