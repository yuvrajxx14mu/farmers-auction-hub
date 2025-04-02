
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Calendar, 
  ChevronDown, 
  Home, 
  LogOut, 
  Menu, 
  Settings, 
  ShoppingCart, 
  User, 
  Users 
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const userRole = localStorage.getItem('userRole') || 'farmer';
  const userName = localStorage.getItem('userName') || 'User';
  
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    navigate('/');
  };
  
  const getMenuItems = () => {
    switch (userRole) {
      case 'farmer':
        return [
          { label: 'Dashboard', icon: <Home className="h-5 w-5 mr-2" />, path: '/farmer/dashboard' },
          { label: 'My Listings', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/farmer/listings' },
          { label: 'Yard Schedule', icon: <Calendar className="h-5 w-5 mr-2" />, path: '/farmer/schedule' },
          { label: 'Transactions', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/farmer/transactions' },
          { label: 'Profile', icon: <User className="h-5 w-5 mr-2" />, path: '/farmer/profile' },
        ];
      case 'trader':
        return [
          { label: 'Dashboard', icon: <Home className="h-5 w-5 mr-2" />, path: '/trader/dashboard' },
          { label: 'Browse Auctions', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/trader/auctions' },
          { label: 'My Bids', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/trader/bids' },
          { label: 'Transactions', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/trader/transactions' },
          { label: 'Profile', icon: <User className="h-5 w-5 mr-2" />, path: '/trader/profile' },
        ];
      case 'admin':
        return [
          { label: 'Dashboard', icon: <Home className="h-5 w-5 mr-2" />, path: '/admin/dashboard' },
          { label: 'Users', icon: <Users className="h-5 w-5 mr-2" />, path: '/admin/users' },
          { label: 'Auctions', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/admin/auctions' },
          { label: 'Yard Schedule', icon: <Calendar className="h-5 w-5 mr-2" />, path: '/admin/schedule' },
          { label: 'Disputes', icon: <ShoppingCart className="h-5 w-5 mr-2" />, path: '/admin/disputes' },
          { label: 'Settings', icon: <Settings className="h-5 w-5 mr-2" />, path: '/admin/settings' },
        ];
      default:
        return [];
    }
  };
  
  const menuItems = getMenuItems();
  
  const renderNavigation = () => (
    <div className="space-y-1">
      {menuItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-start"
          onClick={() => {
            navigate(item.path);
            setIsMobileMenuOpen(false);
          }}
        >
          {item.icon}
          {item.label}
        </Button>
      ))}
    </div>
  );
  
  return (
    <div className="min-h-screen bg-soil-brown-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col h-full py-4">
                  <div className="font-bold text-lg text-farm-green-700 mb-6">
                    Marketing Yard Platform
                  </div>
                  {renderNavigation()}
                </div>
              </SheetContent>
            </Sheet>
            
            <a href="/" className="font-bold text-lg text-farm-green-700 hidden md:block">
              Marketing Yard Platform
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="font-medium">{userName}</div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
                  {userRole === 'farmer' ? (
                    <span className="farmer-badge">Farmer</span>
                  ) : userRole === 'trader' ? (
                    <span className="trader-badge">Trader</span>
                  ) : (
                    <span className="admin-badge">Admin</span>
                  )}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate(`/${userRole}/profile`)}>
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate(`/${userRole}/settings`)}>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar - desktop only */}
        <div className="hidden md:block w-64 border-r border-gray-200 bg-white">
          <div className="h-full py-6 px-4">
            <div className="space-y-1">
              {renderNavigation()}
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
