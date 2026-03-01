import React from 'react';
import { Settings as SettingsIcon, Globe, Palette, Bell, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { Theme } from '../types';

export function Settings() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string; description: string }[] = [
    { value: 'tactical-neon', label: 'Tactical Neon', description: 'Military surveillance aesthetic with neon green accents' },
    { value: 'paper', label: 'Paper Mode', description: 'Warm editorial newspaper feel' },
    { value: 'obsidian', label: 'Obsidian', description: 'Pure black premium terminal look' },
    { value: 'bright-studio', label: 'Bright Studio', description: 'Clean professional dashboard' },
    { value: 'robotic', label: 'Robotic', description: 'Futuristic machine interface' },
  ];

  return (
    <div className="settings-view h-full overflow-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <SettingsIcon className="w-8 h-8" />
            <h1 className="text-3xl">Settings</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Configure your BIRDSEYEVIEW experience
          </p>
        </div>

        {/* Theme Settings */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h2 className="text-xl">Theme</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {themes.map(({ value, label, description }) => (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  theme === value
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:bg-accent'
                }`}
              >
                <div className="font-semibold mb-1">{label}</div>
                <div className="text-xs text-muted-foreground">{description}</div>
                {theme === value && (
                  <div className="mt-2 text-xs text-primary">✓ Active</div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Language Settings */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-primary" />
            <h2 className="text-xl">Language & Region</h2>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Language</label>
                <select className="w-full p-2 rounded-md border border-border bg-background">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Japanese</option>
                  <option>Mandarin</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Time Zone</label>
                <select className="w-full p-2 rounded-md border border-border bg-background">
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>EST (Eastern Standard Time)</option>
                  <option>PST (Pacific Standard Time)</option>
                  <option>GMT (Greenwich Mean Time)</option>
                  <option>JST (Japan Standard Time)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl">Notifications</h2>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card space-y-3">
            {[
              { label: 'Critical Alerts', description: 'High-severity global events' },
              { label: 'Market Updates', description: 'Major market movements' },
              { label: 'Sports Scores', description: 'Live score updates from followed teams' },
              { label: 'Breaking News', description: 'Real-time breaking news alerts' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="text-xl">Privacy & Data</h2>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <p className="text-sm text-muted-foreground mb-4">
              BIRDSEYEVIEW is a frontend prototype. No real data is collected or transmitted.
              All displayed information is mock data for demonstration purposes.
            </p>
            <button className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors text-sm">
              Clear Local Data
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
