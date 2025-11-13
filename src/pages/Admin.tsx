import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Upload, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImageAlt, setNewImageAlt] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simple password protection (in production, use proper auth)
  const ADMIN_PASSWORD = 'smallwonder2025';

  useEffect(() => {
    if (isAuthenticated) {
      const storedImages = localStorage.getItem('galleryImages');
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: 'Welcome!',
        description: 'You are now logged in as admin.',
      });
    } else {
      toast({
        title: 'Error',
        description: 'Incorrect password. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && newImageAlt.trim()) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage: GalleryImage = {
          id: Date.now(),
          src: event.target?.result as string,
          alt: newImageAlt,
        };
        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
        setNewImageAlt('');
        toast({
          title: 'Success!',
          description: 'Image uploaded successfully.',
        });
      };
      reader.readAsDataURL(file);
    } else {
      toast({
        title: 'Error',
        description: 'Please provide an image description.',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = (id: number) => {
    const updatedImages = images.filter((img) => img.id !== id);
    setImages(updatedImages);
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
    toast({
      title: 'Deleted',
      description: 'Image removed from gallery.',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-4">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="rounded-xl"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-primary">Gallery Manager</h1>
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-primary text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Website
          </Button>
        </div>

        {/* Upload Section */}
        <Card className="p-6 mb-8 border-2 border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-4">Upload New Image</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Image Description
              </label>
              <Input
                value={newImageAlt}
                onChange={(e) => setNewImageAlt(e.target.value)}
                placeholder="e.g., Annual Day Celebration"
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Choose Image
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="rounded-xl"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Note: Images are stored locally. For production, integrate with Supabase Storage.
            </p>
          </div>
        </Card>

        {/* Gallery Grid */}
        <h2 className="text-2xl font-bold text-primary mb-4">Current Gallery Images</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-foreground mb-3">{image.alt}</p>
                <Button
                  onClick={() => handleDelete(image.id)}
                  variant="destructive"
                  className="w-full"
                  size="sm"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No images in gallery yet. Upload your first image!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
