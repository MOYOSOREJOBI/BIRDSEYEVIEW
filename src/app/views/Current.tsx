import React, { useState } from 'react';
import { motion } from 'motion/react';
import { mockWorldEvents, mockMarkets, mockScores, mockSignals } from '../data/mockData';
import { TrendingUp, TrendingDown, Radio, AlertCircle } from 'lucide-react';

export function Current() {
  const [layout, setLayout] = useState<'comfortable' | 'compact'>('comfortable');

  return (
    <div className="current-view h-full overflow-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1">Current</h1>
          <p className="text-sm text-muted-foreground">Live streams from all domains</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setLayout('comfortable')}
            className={`px-3 py-1 rounded text-sm ${
              layout === 'comfortable' ? 'bg-primary text-primary-foreground' : 'bg-accent'
            }`}
          >
            Comfortable
          </button>
          <button
            onClick={() => setLayout('compact')}
            className={`px-3 py-1 rounded text-sm ${
              layout === 'compact' ? 'bg-primary text-primary-foreground' : 'bg-accent'
            }`}
          >
            Compact
          </button>
        </div>
      </div>

      <div className={`grid gap-4 ${
        layout === 'comfortable' 
          ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' 
          : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'
      }`}>
        {/* World Alerts Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card border border-border rounded-lg p-4 bg-card"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">World Alerts</h3>
            </div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
          <div className="space-y-2">
            {mockSignals.slice(0, layout === 'compact' ? 3 : 5).map(signal => (
              <div key={signal.id} className="text-sm border-l-2 border-primary pl-3 py-1">
                <div className="font-medium">{signal.title}</div>
                <div className="text-xs text-muted-foreground">
                  {signal.sources} sources • {new Date(signal.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Markets Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card border border-border rounded-lg p-4 bg-card"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Markets</h3>
            <div className="text-xs text-muted-foreground">Live</div>
          </div>
          <div className="space-y-2">
            {mockMarkets.slice(0, layout === 'compact' ? 4 : 7).map(market => (
              <div key={market.symbol} className="flex items-center justify-between text-sm">
                <div>
                  <div className="font-medium">{market.symbol}</div>
                  <div className="text-xs text-muted-foreground">{market.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono">${market.price.toLocaleString()}</div>
                  <div className={`text-xs flex items-center gap-1 justify-end ${
                    market.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {market.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {market.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Live Scores Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card border border-border rounded-lg p-4 bg-card"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Live Scores</h3>
            <Radio className="w-4 h-4 text-red-500" />
          </div>
          <div className="space-y-3">
            {mockScores.map(score => (
              <div key={score.id} className="border border-border rounded p-2">
                <div className="text-xs text-muted-foreground mb-1">{score.sport}</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">{score.homeTeam}</div>
                  <div className="font-mono font-semibold">{score.homeScore}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">{score.awayTeam}</div>
                  <div className="font-mono font-semibold">{score.awayScore}</div>
                </div>
                {score.time && (
                  <div className="text-xs text-primary mt-1">{score.time}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trending Topics Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card border border-border rounded-lg p-4 bg-card"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Viral Topics</h3>
            <div className="text-xs text-muted-foreground">TikTok</div>
          </div>
          <div className="space-y-2">
            {[
              { tag: '#GlobalSummit2026', views: '2.4M', trend: '+340%' },
              { tag: '#ChampionsLeague', views: '1.8M', trend: '+220%' },
              { tag: '#FashionWeek', views: '967K', trend: '+180%' },
              { tag: '#TechEarnings', views: '543K', trend: '+95%' },
            ].map((topic, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="font-medium">{topic.tag}</div>
                <div className="text-right">
                  <div className="text-xs">{topic.views} views</div>
                  <div className="text-xs text-green-500">{topic.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Breaking News Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card border border-border rounded-lg p-4 bg-card lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Breaking Events</h3>
            <div className="text-xs text-red-500">LIVE</div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {mockWorldEvents.slice(0, layout === 'compact' ? 4 : 6).map(event => (
              <div key={event.id} className="border border-border rounded p-3 hover:bg-accent/50 cursor-pointer transition-colors">
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                    event.severity === 'critical' ? 'bg-red-500' :
                    event.severity === 'high' ? 'bg-orange-500' :
                    event.severity === 'elevated' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm mb-1">{event.title}</div>
                    <div className="text-xs text-muted-foreground">{event.location.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {Math.floor((Date.now() - event.timestamp.getTime()) / 60000)}m ago
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
