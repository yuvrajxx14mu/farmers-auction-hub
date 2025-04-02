
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus, TrendingUp, BarChart3, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FarmerDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data - in a real app this would come from an API
  const stats = {
    activeAuctions: 2,
    completedAuctions: 5,
    totalEarnings: 45000,
    scheduledDeliveries: 1
  };
  
  const recentAuctions = [
    {
      id: 'auc-1',
      produceName: 'Wheat (Premium Quality)',
      quantity: '500 kg',
      currentBid: 3200,
      status: 'open',
      bids: 3
    },
    {
      id: 'auc-2',
      produceName: 'Corn',
      quantity: '300 kg',
      currentBid: 2800,
      status: 'open',
      bids: 1
    },
    {
      id: 'auc-3',
      produceName: 'Soybeans',
      quantity: '200 kg',
      currentBid: 4500,
      status: 'pending',
      bids: 5
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Farmer Dashboard</h1>
        <Button 
          onClick={() => navigate('/farmer/create-listing')} 
          className="bg-farm-green-600 hover:bg-farm-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Listing
        </Button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Auctions</p>
                <p className="text-2xl font-bold">{stats.activeAuctions}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Completed Sales</p>
                <p className="text-2xl font-bold">{stats.completedAuctions}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-market-orange-100 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-market-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold">₹{stats.totalEarnings.toLocaleString()}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-sky-blue-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-sky-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Yard Deliveries</p>
                <p className="text-2xl font-bold">{stats.scheduledDeliveries}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-soil-brown-100 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-soil-brown-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Auctions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Listings</CardTitle>
          <CardDescription>
            Overview of your recent produce listings and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAuctions.map((auction) => (
              <div 
                key={auction.id} 
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="font-medium">{auction.produceName}</h3>
                  <p className="text-sm text-muted-foreground">{auction.quantity}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">₹{auction.currentBid}</p>
                    <p className="text-sm text-muted-foreground">{auction.bids} bids</p>
                  </div>
                  
                  <div>
                    {auction.status === 'open' ? (
                      <span className="status-open">Open</span>
                    ) : auction.status === 'pending' ? (
                      <span className="status-pending">Pending</span>
                    ) : (
                      <span className="status-closed">Closed</span>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="icon" onClick={() => navigate(`/farmer/listing/${auction.id}`)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Upcoming Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Yard Schedule</CardTitle>
          <CardDescription>Your scheduled deliveries to the market yard</CardDescription>
        </CardHeader>
        <CardContent>
          {stats.scheduledDeliveries > 0 ? (
            <div className="p-4 rounded-lg border border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Wheat Delivery</h3>
                  <p className="text-sm text-muted-foreground">500 kg</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">Tomorrow, 10:00 AM</span>
                  </div>
                  
                  <Button variant="outline" size="sm" onClick={() => navigate('/farmer/schedule')}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
              <h3 className="font-medium">No Scheduled Deliveries</h3>
              <p className="text-sm text-muted-foreground mt-1">
                You don't have any upcoming deliveries scheduled
              </p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => navigate('/farmer/schedule')}
              >
                Schedule a Delivery
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerDashboard;
