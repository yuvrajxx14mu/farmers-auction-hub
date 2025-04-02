
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { UserRole } from '@/types';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('farmer');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth for now - would connect to backend/Supabase in real implementation
    setTimeout(() => {
      localStorage.setItem('userRole', role);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', 'Demo User');
      setIsLoading(false);
      
      // Redirect based on role
      if (role === 'farmer') {
        navigate('/farmer/dashboard');
      } else if (role === 'trader') {
        navigate('/trader/dashboard');
      } else {
        navigate('/admin/dashboard');
      }
    }, 1000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth for now - would connect to backend/Supabase in real implementation
    setTimeout(() => {
      localStorage.setItem('userRole', role);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
      setIsLoading(false);
      
      // Redirect to verification page
      navigate('/verification');
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-soil-brown-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center bg-farm-green-50 rounded-t-lg border-b border-farm-green-100">
          <CardTitle className="text-2xl font-bold text-farm-green-800">Marketing Yard Platform</CardTitle>
          <CardDescription className="text-farm-green-600">Connect farmers and traders directly</CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="signin">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin">
            <form onSubmit={handleSignIn}>
              <CardContent className="space-y-4 pt-5">
                <div className="space-y-2">
                  <Label htmlFor="email-signin">Email</Label>
                  <Input 
                    id="email-signin" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password-signin">Password</Label>
                  <Input 
                    id="password-signin" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <RadioGroup 
                    value={role} 
                    onValueChange={(value) => setRole(value as UserRole)}
                    className="flex space-x-2"
                  >
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="farmer" id="farmer" />
                      <Label htmlFor="farmer" className="cursor-pointer">Farmer</Label>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="trader" id="trader" />
                      <Label htmlFor="trader" className="cursor-pointer">Trader</Label>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="admin" id="admin" />
                      <Label htmlFor="admin" className="cursor-pointer">Admin</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className="w-full bg-farm-green-600 hover:bg-farm-green-700" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSignUp}>
              <CardContent className="space-y-4 pt-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-signup">Email</Label>
                  <Input 
                    id="email-signup" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password-signup">Password</Label>
                  <Input 
                    id="password-signup" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>I want to join as:</Label>
                  <RadioGroup 
                    value={role} 
                    onValueChange={(value) => setRole(value as UserRole)}
                    className="flex space-x-2"
                  >
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="farmer" id="farmer-signup" />
                      <Label htmlFor="farmer-signup" className="cursor-pointer">Farmer</Label>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="trader" id="trader-signup" />
                      <Label htmlFor="trader-signup" className="cursor-pointer">Trader</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className="w-full bg-market-orange-600 hover:bg-market-orange-700" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthForm;
