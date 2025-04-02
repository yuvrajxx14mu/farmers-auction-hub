
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Truck, 
  BarChart3, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle,
  Smartphone
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/auth');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-farm-green-700">Marketing Yard Platform</div>
          <div>
            <Button 
              variant="outline" 
              className="mr-2"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
            <Button 
              className="bg-farm-green-600 hover:bg-farm-green-700"
              onClick={() => navigate('/auth')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-farm-green-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-farm-green-800 leading-tight mb-4">
                Connecting Farmers and Traders Directly
              </h1>
              <p className="text-xl text-farm-green-600 mb-8">
                A digital marketplace that eliminates middlemen, ensures fair pricing, and simplifies the entire produce trading process.
              </p>
              <div className="flex space-x-4">
                <Button 
                  className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-6 py-5 text-lg"
                  onClick={handleGetStarted}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="px-6 py-5 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Farmers at market" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-farm-green-800 mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-farm-green-600 max-w-3xl mx-auto">
              We're transforming the way agricultural produce is traded, making it more efficient, transparent, and profitable for everyone involved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-soil-brown-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-soil-brown-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-soil-brown-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Auctions</h3>
              <p className="text-gray-600">
                Farmers can list their produce, and traders can bid in real-time, ensuring the best possible prices for quality produce.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-farm-green-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-farm-green-100 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-farm-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Yard Entry Scheduling</h3>
              <p className="text-gray-600">
                Automated scheduling system optimizes market yard operations, reducing wait times and congestion.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-market-orange-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-market-orange-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-market-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Our escrow system holds funds until both parties confirm the deal, ensuring secure and fair transactions.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-sky-blue-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-sky-blue-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-sky-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Verification</h3>
              <p className="text-gray-600">
                All users are verified to ensure a trusted network of farmers and traders, preventing fraud.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-farm-green-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-farm-green-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-farm-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
              <p className="text-gray-600">
                Digital transactions reduce paperwork and waiting times, making the entire process more efficient.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-soil-brown-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-soil-brown-100 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-soil-brown-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple, intuitive interface designed specifically for farmers with varying levels of technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-soil-brown-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-farm-green-800 mb-4">How It Works</h2>
            <p className="text-xl text-farm-green-600 max-w-3xl mx-auto">
              Our platform simplifies the agricultural trading process in just a few steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-farm-green-600 flex items-center justify-center text-white font-bold text-lg">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Register & Verify</h3>
              <p className="text-gray-600">
                Sign up as a farmer or trader and complete the verification process.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-farm-green-600 flex items-center justify-center text-white font-bold text-lg">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">List or Browse</h3>
              <p className="text-gray-600">
                Farmers list their produce, while traders browse available listings.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-farm-green-600 flex items-center justify-center text-white font-bold text-lg">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Bid & Negotiate</h3>
              <p className="text-gray-600">
                Traders bid on produce, and the auction continues until a deal is reached.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-farm-green-600 flex items-center justify-center text-white font-bold text-lg">4</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Delivery & Payment</h3>
              <p className="text-gray-600">
                Produce is delivered at the scheduled time, and payment is processed securely.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-farm-green-600 to-farm-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Trading Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our platform today and discover a more efficient, transparent, and profitable way to trade agricultural produce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-white text-farm-green-700 hover:bg-gray-100 px-6 py-5 text-lg"
              onClick={() => navigate('/auth')}
            >
              Sign Up as a Farmer
            </Button>
            <Button 
              className="bg-market-orange-500 hover:bg-market-orange-600 px-6 py-5 text-lg"
              onClick={() => navigate('/auth')}
            >
              Sign Up as a Trader
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-farm-green-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-farm-green-600 max-w-3xl mx-auto">
              Hear from farmers and traders who have transformed their businesses with our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-soil-brown-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-soil-brown-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Rajesh Patel</h4>
                  <p className="text-sm text-gray-600">Wheat Farmer, Gujarat</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I've seen a 30% increase in my profits since joining this platform. No more waiting at the yard or dealing with unfair pricing."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-market-orange-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-market-orange-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Rice Trader, Punjab</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This platform has revolutionized how I source produce. I can now access quality crops from verified farmers without the hassle."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-farm-green-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-farm-green-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Amit Verma</h4>
                  <p className="text-sm text-gray-600">Vegetable Farmer, Maharashtra</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The scheduling system has saved me countless hours. I no longer have to wait all day at the yard, and I get paid faster."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Marketing Yard Platform</h3>
              <p className="text-gray-300">
                Connecting farmers and traders directly through a digital marketplace.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Farmer Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Trader Guidelines</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Verification Process</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Payment Information</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-300 mb-2">support@marketingyard.com</p>
              <p className="text-gray-300">+91 1234567890</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Marketing Yard Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
