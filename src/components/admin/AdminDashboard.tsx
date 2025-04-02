
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  AlertTriangle, 
  ChevronRight, 
  UserCheck, 
  Calendar,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data - in a real app this would come from an API
  const stats = {
    totalUsers: 187,
    totalFarmers: 125,
    totalTraders: 62,
    activeAuctions: 28,
    completedAuctions: 156,
    pendingVerifications: 8,
    totalDisputes: 3,
    totalRevenue: 45600
  };
  
  const pendingVerifications = [
    {
      id: 'user-1',
      name: 'Rajesh Kumar',
      role: 'farmer',
      location: 'Nashik',
      submittedAt: '2 hours ago'
    },
    {
      id: 'user-2',
      name: 'Mira Patel',
      role: 'farmer',
      location: 'Pune',
      submittedAt: '5 hours ago'
    },
    {
      id: 'user-3',
      name: 'Vivek Traders',
      role: 'trader',
      location: 'Mumbai',
      submittedAt: '1 day ago'
    }
  ];
  
  const recentDisputes = [
    {
      id: 'dispute-1',
      produceId: 'prod-1',
      produceName: 'Wheat',
      farmer: 'Sunil Deshmukh',
      trader: 'Mumbai Traders',
      amount: 12500,
      reason: 'Quality issues',
      status: 'pending'
    },
    {
      id: 'dispute-2',
      produceId: 'prod-2',
      produceName: 'Rice',
      farmer: 'Prakash Patil',
      trader: 'Pune Exports',
      amount: 18000,
      reason: 'Delivery delayed',
      status: 'pending'
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button 
          onClick={() => navigate('/admin/reports')} 
          className="bg-sky-blue-600 hover:bg-sky-blue-700"
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          View Reports
        </Button>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-farm-green-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-farm-green-600" />
              </div>
            </div>
            <div className="mt-4 flex text-sm text-muted-foreground">
              <div className="mr-4">Farmers: {stats.totalFarmers}</div>
              <div>Traders: {stats.totalTraders}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Auctions</p>
                <p className="text-2xl font-bold">{stats.activeAuctions}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-market-orange-100 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-market-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex text-sm text-muted-foreground">
              <div>Completed: {stats.completedAuctions}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Verifications</p>
                <p className="text-2xl font-bold">{stats.pendingVerifications}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-soil-brown-100 flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-soil-brown-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Disputes</p>
                <p className="text-2xl font-bold">{stats.totalDisputes}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Platform Revenue */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Revenue</CardTitle>
          <CardDescription>
            Total revenue generated from transaction fees
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Total Revenue</h3>
              <p className="text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Monthly Target</span>
                <span className="text-sm font-medium">₹50,000</span>
              </div>
              <Progress value={stats.totalRevenue / 500} className="h-2" />
              <p className="text-xs text-right mt-1 text-muted-foreground">
                {Math.round((stats.totalRevenue / 50000) * 100)}% of monthly target
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-sm text-muted-foreground">Trader Fees</p>
                <p className="text-xl font-medium">₹{(stats.totalRevenue * 0.8).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Premium Services</p>
                <p className="text-xl font-medium">₹{(stats.totalRevenue * 0.2).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Pending Verifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Pending Verifications</CardTitle>
            <CardDescription>
              Recent verification requests requiring approval
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/admin/verifications')}
          >
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingVerifications.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{user.name}</h3>
                    <div className="flex items-center mt-1">
                      {user.role === 'farmer' ? (
                        <span className="farmer-badge">Farmer</span>
                      ) : (
                        <span className="trader-badge">Trader</span>
                      )}
                      <span className="text-xs text-muted-foreground ml-2">{user.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-muted-foreground">
                    Submitted {user.submittedAt}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => navigate(`/admin/verification/${user.id}`)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Active Disputes */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Active Disputes</CardTitle>
            <CardDescription>
              Disputes requiring resolution
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/admin/disputes')}
          >
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDisputes.map((dispute) => (
              <div 
                key={dispute.id} 
                className="flex items-center justify-between p-4 rounded-lg border-2 border-red-100 bg-white hover:bg-red-50 transition-colors"
              >
                <div>
                  <h3 className="font-medium">{dispute.produceName}</h3>
                  <div className="flex flex-col mt-1 text-sm">
                    <span>Farmer: {dispute.farmer}</span>
                    <span>Trader: {dispute.trader}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">₹{dispute.amount.toLocaleString()}</p>
                    <p className="text-xs text-red-600">{dispute.reason}</p>
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => navigate(`/admin/dispute/${dispute.id}`)}
                  >
                    Resolve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
