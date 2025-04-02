
export type UserRole = 'farmer' | 'trader' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  createdAt: Date;
  location?: string;
  phone?: string;
  profileImage?: string;
}

export interface ProduceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  unit: string;
  minPrice: number;
  images?: string[];
  farmerId: string;
  createdAt: Date;
}

export interface Auction {
  id: string;
  produceId: string;
  produce: ProduceItem;
  startTime: Date;
  endTime?: Date;
  status: 'open' | 'pending' | 'closed' | 'cancelled';
  startingPrice: number;
  currentBid?: number;
  currentBidderId?: string;
  createdAt: Date;
}

export interface Bid {
  id: string;
  auctionId: string;
  traderId: string;
  amount: number;
  timestamp: Date;
  isWinning: boolean;
}

export interface Transaction {
  id: string;
  auctionId: string;
  farmerId: string;
  traderId: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled' | 'disputed';
  paymentMethod: 'upi' | 'bank_transfer';
  createdAt: Date;
  completedAt?: Date;
}

export interface YardSchedule {
  id: string;
  farmerId: string;
  produceId: string;
  scheduledTime: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: Date;
}
