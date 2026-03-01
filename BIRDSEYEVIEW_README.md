# BIRDSEYEVIEW

A premium, cinematic real-time world intelligence dashboard prototype.

## Overview

BIRDSEYEVIEW is a high-end SaaS UI prototype that combines the functionality of:
- A global live map
- A newsroom control room
- A markets terminal
- A sports dashboard
- A social/viral trends monitor
- A culture and entertainment pulse board

## Features

### 8 Main Views

1. **ATLAS** - Interactive world map with event markers, severity filtering, and real-time updates
2. **CURRENT** - Grid-based live dashboard showing all domains in real-time
3. **ORBITAL** - Immersive globe visualization with animated hotspots
4. **PULSESTREAM** - Editorial wall with masonry layout for breaking news and stories
5. **BROADCAST** - Live media channels view with multi-screen support (1x1, 2x1, 2x2)
6. **MY WORLD** - Personalized command center with watchlists and saved content
7. **RIPPLES** - Cross-domain impact visualization showing event cascades
8. **SIGNALS** - Alert monitoring system with severity-based filtering

### Theme System

Five distinct themes:
- **Tactical Neon** - Military surveillance aesthetic with neon green
- **Paper Mode** - Warm editorial newspaper feel
- **Obsidian** - Pure black premium terminal
- **Bright Studio** - Clean professional dashboard
- **Robotic** - Futuristic machine interface with cyan accents

### Global UI Components

- **Top Command Bar** - Search, live indicator, clock, theme switcher, profile
- **Left Navigation Rail** - Icon-based navigation for all views
- **Live Ticker** - Continuous bottom ticker with markets and sports updates
- **Context Panel** - Right sliding panel for detailed event information

### Content Domains

- World Events & International Law
- Finance & Markets
- Sports (all major sports)
- Social Media & Viral Trends
- Fashion & Luxury
- Music Industry
- Film & TV
- Culture & Arts

## Technical Stack

- **React** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Multi-view navigation
- **Motion (Framer Motion)** - Animations
- **MapLibre GL JS** - Interactive maps
- **Recharts** - Data visualization
- **Lucide React** - Icons

## Data Architecture

All data is currently mocked for prototype purposes. The application includes:
- Mock world events with geolocation
- Mock market data
- Mock sports scores
- Mock signals/alerts
- Mock stories and content

### Mock Data Files
- `/src/app/data/mockData.ts` - All mock data sources

### Future Integration Points
The architecture is designed for easy real API integration. Each domain has adapter-ready data structures:
- World events adapter
- Markets data adapter
- Sports scores adapter
- Social media adapter
- News/content adapter

## Architecture Highlights

### Component Structure
```
/src/app/
  /components/     - Reusable UI components
  /views/          - Main view pages
  /context/        - React contexts (theme)
  /data/           - Mock data
  /types/          - TypeScript types
```

### Theme System
Custom CSS variables with 5 complete theme definitions. Themes switch instantly via React context.

### Responsive Design
- Mobile-optimized navigation
- Responsive grids
- Adaptive layouts
- Touch-friendly controls

## Getting Started

The application starts on the **ATLAS** view (interactive world map).

Use the left navigation rail to switch between views:
- Map icon → Atlas
- Grid icon → Current
- Globe icon → Orbital
- Radio icon → Pulsestream
- TV icon → Broadcast
- User icon → My World
- Waves icon → Ripples
- Activity icon → Signals
- Settings icon → Settings

## Future Enhancements

Ready for:
- Real-time API connections
- WebSocket live updates
- User authentication
- Personalization persistence
- Multi-language support
- Advanced filtering
- Data export
- Collaborative features
- Mobile app

## Notes

This is a **frontend-only prototype**. No backend, database, or real-time data connections are implemented. All data is mocked and simulated for demonstration purposes.

---

Built with precision for production-ready architecture and premium user experience.
