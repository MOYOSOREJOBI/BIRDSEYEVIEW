import React from 'react';
import { Search, Globe2, Clock, User } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

export function TopBar() {
  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="top-bar h-14 border-b border-border flex items-center px-4 gap-4">
      <div className="flex items-center gap-2">
        <Globe2 className="w-6 h-6 text-primary" />
        <span className="text-lg tracking-wider app-logo">BIRDSEYEVIEW</span>
      </div>

      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events, markets, news..."
            className="w-full h-9 pl-10 pr-4 rounded-md border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="hidden sm:inline">LIVE</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span className="hidden sm:inline font-mono">
            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
          </span>
        </div>

        <ThemeSwitcher />

        <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors">
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}