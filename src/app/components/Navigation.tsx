import React from 'react';
import { Link, useLocation } from 'react-router';
import { 
  Map, 
  Grid3x3, 
  Globe, 
  Radio, 
  Tv, 
  User, 
  Waves, 
  Activity,
  Settings
} from 'lucide-react';

const navItems = [
  { path: '/', icon: Map, label: 'Atlas' },
  { path: '/current', icon: Grid3x3, label: 'Current' },
  { path: '/orbital', icon: Globe, label: 'Orbital' },
  { path: '/pulsestream', icon: Radio, label: 'Pulsestream' },
  { path: '/broadcast', icon: Tv, label: 'Broadcast' },
  { path: '/my-world', icon: User, label: 'My World' },
  { path: '/ripples', icon: Waves, label: 'Ripples' },
  { path: '/signals', icon: Activity, label: 'Signals' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav-rail w-16 border-r border-border flex flex-col items-center py-4 gap-2">
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`nav-item w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
              isActive 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
            title={label}
          >
            <Icon className="w-5 h-5" />
          </Link>
        );
      })}
      
      <div className="flex-1" />
      
      <Link
        to="/settings"
        className="nav-item w-12 h-12 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
        title="Settings"
      >
        <Settings className="w-5 h-5" />
      </Link>
    </nav>
  );
}
