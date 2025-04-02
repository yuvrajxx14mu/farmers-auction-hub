
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search, ShoppingCart, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TraderDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data - in a real app this would come from an API
  const stats = {
    activeBids: 3,
    purchasedItems: 7,
    totalSpent: 68000,
  };
  
  const recentBids = [
    {
      id: 'bid-1',
      produceName: 'Wheat (Premium Quality)',
      quantity: '500 kg',
      yourBid: 3200,
      status: 'winning',
      timeLeft: '2 hours'
    },
    {
      id: 'bid-2',
      produceName: 'Rice',
      quantity: '400 kg',
      yourBid: 4800,
      status: 'outbid',
      timeLeft: '5 hours'
    },
    {
      id: 'bid-3',
      produceName: 'Corn',
      quantity: '300 kg',
      yourBid: 2800,
      status: 'winning',
      timeLeft: '1 day'
    }
  ];
  
  const featuredAuctions = [
    {
      id: 'fauc-1',
      produceName: 'Organic Tomatoes',
      quantity: '200 kg',
      farmer: 'Ramesh Patel',
      location: 'Nashik',
      minPrice: 2500,
      bids: 2,
      timeLeft: '3 hours'
    },
    {
      id: 'fauc-2',
      produceName: 'Premium Rice',
      quantity: '400 kg',
      farmer: 'Sunil Kumar',
      location: 'Pune',
      minPrice: 4200,
      bids: 4,
      timeLeft: '6 hours'
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Trader Dashboard</h1>
        <Button 
          onClick={() => navigate('/trader/auctions')} 
          className="bg-market-orange-600 hover:bg-market-orange-700"
        >
          <Search className="h-4 w-4 mr-2" />
          Browse Auctions
        </Button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Bids</p>
                <p className="text-2xl font-bold">{stats.activeBids}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-farm-green-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-farm-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Purchases</p>
                <p className="text-2xl font-bold">{stats.purchasedItems}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-market-orange-100 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-market-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">₹{stats.totalSpent.toLocaleString()}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-sky-blue-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-sky-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Featured Auctions */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Auctions</CardTitle>
          <CardDescription>
            New produce listings you might be interested in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredAuctions.map((auction) => (
              <div 
                key={auction.id} 
                className="auction-card-featured"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{auction.produceName}</h3>
                      <p className="text-sm text-muted-foreground">{auction.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{auction.minPrice}</p>
                      <p className="text-sm text-muted-foreground">{auction.bids} bids</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm">
                      <p>Farmer: {auction.farmer}</p>
                      <p>Location: {auction.location}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {auction.timeLeft} left
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button 
                      className="w-full bg-market-orange-600 hover:bg-market-orange-700"
                      onClick={() => navigate(`/trader/auction/${auction.id}`)}
                    >
                      View & Bid
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Your Bids */}
      <Card>
        <CardHeader>
          <CardTitle>Your Active Bids</CardTitle>
          <CardDescription>
            Track your current bids and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBids.map((bid) => (
              <div 
                key={bid.id} 
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="font-medium">{bid.produceName}</h3>
                  <p className="text-sm text-muted-foreground">{bid.quantity}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">₹{bid.yourBid}</p>
                    <div className="flex items-center text-sm">
                      <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                      <span className="text-muted-foreground">{bid.timeLeft}</span>
                    </div>
                  </div>
                  
                  <div>
                    {bid.status === 'winning' ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Winning</span>
                    ) : (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Outbid</span>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="icon" onClick={() => navigate(`/trader/bid/${bid.id}`)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => navigate('/trader/bids')}
            >
              View All Bids
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TraderDashboard;
