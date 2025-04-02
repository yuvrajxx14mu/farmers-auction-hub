
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import AuthForm from "./components/auth/AuthForm";
import VerificationPage from "./components/auth/VerificationPage";
import MainLayout from "./components/layout/MainLayout";
import FarmerDashboard from "./components/farmer/FarmerDashboard";
import TraderDashboard from "./components/trader/TraderDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Auth guard component
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');
  
  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }
  
  if (allowedRoles.length > 0 && userRole && !allowedRoles.includes(userRole)) {
    // Redirect based on role
    if (userRole === 'farmer') {
      return <Navigate to="/farmer/dashboard" replace />;
    } else if (userRole === 'trader') {
      return <Navigate to="/trader/dashboard" replace />;
    } else {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/verification" element={<VerificationPage />} />
          
          {/* Farmer routes */}
          <Route path="/farmer" element={
            <ProtectedRoute allowedRoles={['farmer']}>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<FarmerDashboard />} />
            <Route path="listings" element={<div>My Listings</div>} />
            <Route path="create-listing" element={<div>Create Listing</div>} />
            <Route path="listing/:id" element={<div>Listing Details</div>} />
            <Route path="schedule" element={<div>Yard Schedule</div>} />
            <Route path="transactions" element={<div>Transactions</div>} />
            <Route path="profile" element={<div>Farmer Profile</div>} />
            <Route path="settings" element={<div>Settings</div>} />
            <Route index element={<Navigate to="/farmer/dashboard" replace />} />
          </Route>
          
          {/* Trader routes */}
          <Route path="/trader" element={
            <ProtectedRoute allowedRoles={['trader']}>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<TraderDashboard />} />
            <Route path="auctions" element={<div>Browse Auctions</div>} />
            <Route path="auction/:id" element={<div>Auction Details</div>} />
            <Route path="bids" element={<div>My Bids</div>} />
            <Route path="bid/:id" element={<div>Bid Details</div>} />
            <Route path="transactions" element={<div>Transactions</div>} />
            <Route path="profile" element={<div>Trader Profile</div>} />
            <Route path="settings" element={<div>Settings</div>} />
            <Route index element={<Navigate to="/trader/dashboard" replace />} />
          </Route>
          
          {/* Admin routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<div>User Management</div>} />
            <Route path="auctions" element={<div>Auction Management</div>} />
            <Route path="schedule" element={<div>Yard Schedule Management</div>} />
            <Route path="disputes" element={<div>Dispute Management</div>} />
            <Route path="dispute/:id" element={<div>Dispute Details</div>} />
            <Route path="verifications" element={<div>Verification Requests</div>} />
            <Route path="verification/:id" element={<div>Verification Details</div>} />
            <Route path="reports" element={<div>Platform Reports</div>} />
            <Route path="settings" element={<div>Platform Settings</div>} />
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
