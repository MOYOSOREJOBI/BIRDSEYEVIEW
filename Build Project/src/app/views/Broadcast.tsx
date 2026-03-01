import React, { useState } from 'react';
import { motion } from 'motion/react';
import { mockChannels } from '../data/mockData';
import { Play, Users, Maximize2 } from 'lucide-react';

type Layout = '1x1' | '2x1' | '2x2';

export function Broadcast() {
  const [layout, setLayout] = useState<Layout>('2x2');
  const [selectedChannels, setSelectedChannels] = useState<string[]>(
    mockChannels.slice(0, 4).map(c => c.id)
  );

  const toggleChannel = (channelId: string) => {
    const maxChannels = layout === '1x1' ? 1 : layout === '2x1' ? 2 : 4;
    
    if (selectedChannels.includes(channelId)) {
      setSelectedChannels(prev => prev.filter(id => id !== channelId));
    } else if (selectedChannels.length < maxChannels) {
      setSelectedChannels(prev => [...prev, channelId]);
    } else {
      setSelectedChannels(prev => [...prev.slice(1), channelId]);
    }
  };

  return (
    <div className="broadcast-view h-full flex flex-col bg-background">
      {/* Controls */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl mb-1">Broadcast</h1>
            <p className="text-sm text-muted-foreground">Live media channels</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setLayout('1x1')}
              className={`px-3 py-2 rounded text-sm ${
                layout === '1x1' ? 'bg-primary text-primary-foreground' : 'bg-accent'
              }`}
            >
              Single
            </button>
            <button
              onClick={() => setLayout('2x1')}
              className={`px-3 py-2 rounded text-sm ${
                layout === '2x1' ? 'bg-primary text-primary-foreground' : 'bg-accent'
              }`}
            >
              2-Up
            </button>
            <button
              onClick={() => setLayout('2x2')}
              className={`px-3 py-2 rounded text-sm ${
                layout === '2x2' ? 'bg-primary text-primary-foreground' : 'bg-accent'
              }`}
            >
              4-Up
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Channel List */}
        <div className="w-64 border-r border-border overflow-auto p-4">
          <div className="text-sm font-semibold mb-3">Available Channels</div>
          <div className="space-y-2">
            {mockChannels.map(channel => {
              const isSelected = selectedChannels.includes(channel.id);
              return (
                <button
                  key={channel.id}
                  onClick={() => toggleChannel(channel.id)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{channel.name}</span>
                    {channel.isLive && (
                      <span className="flex items-center gap-1 text-xs text-red-500">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                  {channel.viewers && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {channel.viewers.toLocaleString()} viewers
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4">
          <div className={`grid gap-4 h-full ${
            layout === '1x1' ? 'grid-cols-1' :
            layout === '2x1' ? 'grid-cols-2' :
            'grid-cols-2 grid-rows-2'
          }`}>
            {selectedChannels.map((channelId, index) => {
              const channel = mockChannels.find(c => c.id === channelId);
              if (!channel) return null;

              return (
                <motion.div
                  key={channelId}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative border border-border rounded-lg overflow-hidden bg-black group"
                >
                  {/* Placeholder Video Frame */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <Play className="w-16 h-16 text-white/20" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold mb-1">
                            {channel.name}
                          </div>
                          {channel.viewers && (
                            <div className="flex items-center gap-1 text-xs text-white/70">
                              <Users className="w-3 h-3" />
                              {channel.viewers.toLocaleString()} watching
                            </div>
                          )}
                        </div>
                        <button className="w-8 h-8 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Live Indicator */}
                  {channel.isLive && (
                    <div className="absolute top-4 left-4 px-2 py-1 rounded bg-red-500 text-white text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      LIVE
                    </div>
                  )}

                  {/* Mock Channel Logo */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xs">
                    {channel.name.slice(0, 3)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
