export interface Content {
  id: string;
  title: string;
  thumbnailUrl: string;
  description?: string;
  type: 'movie' | 'series';
}

export interface ContentRail {
  id: string;
  title: string;
  contents: Content[];
}

export interface Profile {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface Device {
  id: string;
  name: string;
  type: string;
  lastActive: string;
}

export interface Subscription {
  plan: string;
  status: 'active' | 'expired';
  expiryDate: string;
  autoRenewal: boolean;
}