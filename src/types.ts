export type PropertyType =
  | 'Residential'
  | 'Farm & Ranch'
  | 'Land'
  | 'Hunting & Recreational'
  | 'Lake Properties'
  | 'Commercial';

export type PropertyStatus = 'For Sale' | 'Pending' | 'Sold' | 'New Listing' | 'Price Reduced';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  originalPrice?: number;
  address: string;
  city: string;
  state: 'ND' | 'SD' | 'MN';
  zip: string;
  county: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  acres: number;
  yearBuilt?: number;
  garageSpaces?: number;
  mlsNumber: string;
  featured: boolean;
  images: string[];
  description: string;
  shortDescription: string;
  highlights: string[];
  tillableAcres?: number;
  soilProductivity?: number;
  waterRights?: string;
  features: {
    interior?: string[];
    exterior?: string[];
    landAndSoil?: string[];
    utilities?: string[];
    financial?: {
      annualTaxes?: number;
      taxYear?: number;
      hoaFee?: number;
      soilPI?: number; // Productivity Index
    };
  };
  agentId: string;
  virtualTourUrl?: string;
  latitude?: number;
  longitude?: number;
  dateListed: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  licenses: string[]; // e.g. ['ND #10293', 'MN #4039281']
  phone: string;
  email: string;
  photo: string;
  bio: string;
  specialties: string[];
  yearsExperience: number;
  activeListingsCount: number;
  totalVolume: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: 'Buyer' | 'Seller' | 'Landowner' | 'Commercial Client';
  location: string;
  rating: number;
  propertyType: string;
  content: string;
  year: string;
}

export interface BlogPost {
  id: string;
  category: 'Buying Guide' | 'Selling Advice' | 'Land & Ranch' | 'Market Outlook' | 'Property Tips';
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  tags: string[];
}

export interface FilterState {
  type: string;
  status: string;
  state: string;
  city: string;
  minPrice: number;
  maxPrice: number;
  minBeds: number;
  minBaths: number;
  minAcres: number;
  minSqft: number;
  keyword: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'acres-desc' | 'newest';
}

export interface ServiceRegion {
  id: string;
  name: string;
  state: 'ND' | 'SD' | 'MN';
  tagline: string;
  description: string;
  keyHubs: string[];
  propertyHighlights: string[];
  image: string;
}
