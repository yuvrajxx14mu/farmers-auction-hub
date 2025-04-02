
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';

const VerificationPage = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const userRole = localStorage.getItem('userRole') || 'farmer';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verification submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Verification Submitted",
        description: "Your information is being verified. We'll notify you soon.",
      });
      
      // Redirect based on role
      if (userRole === 'farmer') {
        navigate('/farmer/dashboard');
      } else {
        navigate('/trader/dashboard');
      }
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdDocument(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-soil-brown-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center bg-farm-green-50 rounded-t-lg border-b border-farm-green-100">
          <CardTitle className="text-2xl font-bold text-farm-green-800">Verification Required</CardTitle>
          <CardDescription className="text-farm-green-600">
            Please complete your profile verification
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Your phone number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <Input 
                id="address" 
                type="text" 
                placeholder="Your complete address" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-2">
              <Label>Identity Verification</Label>
              <p className="text-sm text-muted-foreground">
                {userRole === 'farmer' 
                  ? "Please upload your farmer ID or land ownership document" 
                  : "Please upload your business license or trader certificate"}
              </p>
              
              <div className="flex items-center justify-center w-full">
                <label htmlFor="document-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, PNG, JPG (MAX. 5MB)
                    </p>
                  </div>
                  <Input 
                    id="document-upload" 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
              
              {idDocument && (
                <p className="text-sm text-green-600 mt-2">
                  File selected: {idDocument.name}
                </p>
              )}
            </div>
            
            {userRole === 'trader' && (
              <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Note for Traders:</strong> Additional business verification may be required before you can participate in auctions.
                </p>
              </div>
            )}
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-farm-green-600 hover:bg-farm-green-700" 
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Verification"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default VerificationPage;
