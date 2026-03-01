import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Users, TrendingUp, Bookmark } from 'lucide-react';

export function MyWorld() {
  return (
    <div className="my-world-view h-full overflow-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl mb-2">My World</h1>
        <p className="text-sm text-muted-foreground">Your personalized command center</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Watchlists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 lg:col-span-2"
        >
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Watchlists</h2>
              </div>
              <button className="text-sm text-primary hover:underline">Edit</button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: 'Tech Stocks', count: 12, change: '+2.4%', positive: true },
                { name: 'Champions League', count: 8, change: 'Live', positive: true },
                { name: 'Fashion Week', count: 5, change: '3 new', positive: true },
                { name: 'Crypto Markets', count: 7, change: '-1.2%', positive: false },
              ].map((list, i) => (
                <div key={i} className="border border-border rounded-lg p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                  <div className="font-semibold mb-1">{list.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{list.count} items</div>
                  <div className={`text-sm ${list.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {list.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border border-border rounded-lg p-6 bg-card"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <div className="space-y-2">
            {[
              { icon: MapPin, label: 'Followed Regions', count: 8 },
              { icon: Users, label: 'Followed Teams', count: 12 },
              { icon: TrendingUp, label: 'Tracked Markets', count: 15 },
              { icon: Bookmark, label: 'Saved Stories', count: 24 },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.count}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* For You Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 lg:col-span-3 border border-border rounded-lg p-6 bg-card"
        >
          <h2 className="text-xl font-semibold mb-4">For You</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Tech Earnings Season Update',
                description: 'Based on your tech stock watchlist',
                time: '15m ago'
              },
              {
                title: 'Real Madrid Match Highlights',
                description: 'Your followed team scored',
                time: '1h ago'
              },
              {
                title: 'Oil Prices Impact Analysis',
                description: 'Affecting your energy stocks',
                time: '2h ago'
              },
              {
                title: 'Fashion Week Paris Day 3',
                description: 'New collections from followed brands',
                time: '3h ago'
              },
              {
                title: 'Bitcoin Breaks Key Level',
                description: 'Your crypto alert triggered',
                time: '4h ago'
              },
              {
                title: 'Regional News Update',
                description: 'From your followed regions',
                time: '5h ago'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 hover:bg-accent/50 cursor-pointer transition-colors"
              >
                <div className="font-semibold mb-2 text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mb-2">{item.description}</div>
                <div className="text-xs text-muted-foreground">{item.time}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
