import type { WorldEvent, Signal, MarketData, SportScore, Story, Channel } from '../types';

export const mockWorldEvents: WorldEvent[] = [
  {
    id: '1',
    title: 'G20 Summit Opens in Tokyo',
    description: 'Leaders from 20 major economies gather to discuss global economic policy',
    location: { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan' },
    domain: 'world',
    severity: 'elevated',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    sources: 247,
    impact: ['markets', 'policy']
  },
  {
    id: '2',
    title: 'Oil Prices Surge After Supply Disruption',
    description: 'Major pipeline incident causes 15% spike in crude oil futures',
    location: { lat: 26.0667, lng: 50.5577, name: 'Bahrain' },
    domain: 'markets',
    severity: 'critical',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    sources: 512,
    impact: ['energy', 'airlines', 'markets']
  },
  {
    id: '3',
    title: 'Champions League Final Kickoff',
    description: 'Real Madrid vs Manchester City in highly anticipated match',
    location: { lat: 51.5074, lng: -0.1278, name: 'London, UK' },
    domain: 'sports',
    severity: 'elevated',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    sources: 1834,
  },
  {
    id: '4',
    title: 'Fashion Week Paris Opens',
    description: 'Spring/Summer 2027 collections debut with record attendance',
    location: { lat: 48.8566, lng: 2.3522, name: 'Paris, France' },
    domain: 'fashion',
    severity: 'medium',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    sources: 423,
  },
  {
    id: '5',
    title: 'Major Tech Earnings Beat Expectations',
    description: 'Tech giant reports 40% YoY growth, stock jumps in after-hours trading',
    location: { lat: 37.7749, lng: -122.4194, name: 'San Francisco, USA' },
    domain: 'markets',
    severity: 'high',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    sources: 891,
  },
  {
    id: '6',
    title: 'Historic Peace Agreement Signed',
    description: 'Regional leaders agree to ceasefire after months of negotiations',
    location: { lat: 31.9686, lng: 35.2163, name: 'Amman, Jordan' },
    domain: 'conflict',
    severity: 'critical',
    timestamp: new Date(Date.now() - 1000 * 60 * 90),
    sources: 2341,
    impact: ['diplomacy', 'markets', 'regional stability']
  },
  {
    id: '7',
    title: 'Viral Dance Challenge Sweeps Social Media',
    description: 'New trend reaches 500M views in 48 hours across platforms',
    location: { lat: 34.0522, lng: -118.2437, name: 'Los Angeles, USA' },
    domain: 'social',
    severity: 'medium',
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    sources: 3421,
  },
  {
    id: '8',
    title: 'Major Film Festival Awards Announced',
    description: 'Surprise winner takes top prize at prestigious international festival',
    location: { lat: 43.5528, lng: 7.0174, name: 'Cannes, France' },
    domain: 'film',
    severity: 'low',
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    sources: 723,
  }
];

export const mockSignals: Signal[] = [
  {
    id: 's1',
    title: 'Unusual Trading Volume Detected',
    description: 'Major tech stock shows 300% above normal trading volume',
    severity: 'critical',
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    sources: 45,
    domain: 'markets'
  },
  {
    id: 's2',
    title: 'Breaking News Alert',
    description: 'Major policy announcement expected within the hour',
    severity: 'high',
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
    sources: 89,
    domain: 'world'
  },
  {
    id: 's3',
    title: 'Social Media Sentiment Shift',
    description: 'Rapid change in public sentiment detected on key topic',
    severity: 'elevated',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    sources: 234,
    domain: 'social'
  },
  {
    id: 's4',
    title: 'Weather Event Warning',
    description: 'Major storm system approaching populated area',
    severity: 'high',
    timestamp: new Date(Date.now() - 1000 * 60 * 20),
    sources: 56,
    domain: 'world'
  }
];

export const mockMarkets: MarketData[] = [
  { symbol: 'SPX', name: 'S&P 500', price: 5847.32, change: 45.23, changePercent: 0.78 },
  { symbol: 'DJI', name: 'Dow Jones', price: 42834.12, change: -123.45, changePercent: -0.29 },
  { symbol: 'IXIC', name: 'NASDAQ', price: 18472.88, change: 189.34, changePercent: 1.03 },
  { symbol: 'BTCUSD', name: 'Bitcoin', price: 67234.50, change: 2341.20, changePercent: 3.60 },
  { symbol: 'ETHUSD', name: 'Ethereum', price: 3456.78, change: -89.12, changePercent: -2.51 },
  { symbol: 'UKOIL', name: 'Brent Crude', price: 87.45, change: 4.23, changePercent: 5.08 },
  { symbol: 'GOLD', name: 'Gold', price: 2034.60, change: 12.30, changePercent: 0.61 },
];

export const mockScores: SportScore[] = [
  {
    id: 'sp1',
    sport: 'Soccer',
    homeTeam: 'Real Madrid',
    awayTeam: 'Man City',
    homeScore: 2,
    awayScore: 1,
    status: 'live',
    time: '78\''
  },
  {
    id: 'sp2',
    sport: 'Basketball',
    homeTeam: 'Lakers',
    awayTeam: 'Celtics',
    homeScore: 98,
    awayScore: 94,
    status: 'live',
    time: 'Q4 3:24'
  },
  {
    id: 'sp3',
    sport: 'Tennis',
    homeTeam: 'Djokovic',
    awayTeam: 'Alcaraz',
    homeScore: 6,
    awayScore: 7,
    status: 'final',
  },
  {
    id: 'sp4',
    sport: 'Formula 1',
    homeTeam: 'Verstappen',
    awayTeam: 'Hamilton',
    homeScore: 1,
    awayScore: 2,
    status: 'live',
    time: 'Lap 42/58'
  }
];

export const mockStories: Story[] = [
  {
    id: 'st1',
    title: 'The New Era of Global Cooperation',
    description: 'How international diplomacy is reshaping the world order in 2026',
    domain: 'world',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: 'analysis',
    readTime: 8
  },
  {
    id: 'st2',
    title: 'Markets React to Policy Shift',
    description: 'Breaking: Major central banks coordinate rate decisions',
    domain: 'markets',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    type: 'breaking',
  },
  {
    id: 'st3',
    title: 'Inside the Viral Phenomenon',
    description: 'Visual essay: How TikTok is changing culture',
    domain: 'social',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    type: 'visual',
    readTime: 5
  },
  {
    id: 'st4',
    title: 'The Future of Fashion',
    description: 'Watch: Exclusive interview with top designers at Paris Fashion Week',
    domain: 'fashion',
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    type: 'watch',
  },
  {
    id: 'st5',
    title: 'Champions Clash in Historic Final',
    description: 'Real-time analysis of the most anticipated match of the year',
    domain: 'sports',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    type: 'breaking',
  },
  {
    id: 'st6',
    title: 'New Album Breaks Streaming Records',
    description: 'Analysis: How the music industry is evolving in the streaming age',
    domain: 'music',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    type: 'analysis',
    readTime: 6
  }
];

export const mockChannels: Channel[] = [
  { id: 'ch1', name: 'Bloomberg', isLive: true, viewers: 45000 },
  { id: 'ch2', name: 'CNN', isLive: true, viewers: 123000 },
  { id: 'ch3', name: 'BBC World', isLive: true, viewers: 89000 },
  { id: 'ch4', name: 'Al Jazeera', isLive: true, viewers: 67000 },
  { id: 'ch5', name: 'ESPN', isLive: true, viewers: 234000 },
  { id: 'ch6', name: 'CNBC', isLive: true, viewers: 56000 },
  { id: 'ch7', name: 'TikTok Live', isLive: true, viewers: 1234000 },
  { id: 'ch8', name: 'YouTube Trending', isLive: false },
];
