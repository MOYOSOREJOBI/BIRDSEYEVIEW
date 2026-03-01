// Core types for BIRDSEYEVIEW

export type Severity = 'critical' | 'high' | 'elevated' | 'medium' | 'low';

export type Domain = 
  | 'world' 
  | 'conflict' 
  | 'markets' 
  | 'sports' 
  | 'social' 
  | 'fashion' 
  | 'music' 
  | 'film' 
  | 'culture'
  | 'arts';

export type Theme = 
  | 'tactical-neon' 
  | 'paper' 
  | 'obsidian' 
  | 'bright-studio' 
  | 'robotic';

export interface WorldEvent {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  domain: Domain;
  severity: Severity;
  timestamp: Date;
  sources: number;
  impact?: string[];
}

export interface Signal {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  timestamp: Date;
  sources: number;
  domain: Domain;
  relatedEvents?: string[];
}

export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface SportScore {
  id: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'live' | 'final' | 'upcoming';
  time?: string;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  domain: Domain;
  timestamp: Date;
  type: 'breaking' | 'analysis' | 'visual' | 'watch';
  readTime?: number;
}

export interface Channel {
  id: string;
  name: string;
  logo?: string;
  isLive: boolean;
  viewers?: number;
  thumbnail?: string;
}
