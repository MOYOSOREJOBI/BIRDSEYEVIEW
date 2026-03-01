import React, { useState } from 'react';
import { motion } from 'motion/react';
import { mockStories, mockWorldEvents } from '../data/mockData';
import { Clock, Eye } from 'lucide-react';
import Masonry from 'react-responsive-masonry';

type StoryFilter = 'breaking' | 'analysis' | 'visual' | 'watch' | 'all';

export function Pulsestream() {
  const [filter, setFilter] = useState<StoryFilter>('all');

  const allStories = [
    ...mockStories,
    ...mockWorldEvents.slice(0, 4).map(event => ({
      id: event.id,
      title: event.title,
      description: event.description,
      domain: event.domain,
      timestamp: event.timestamp,
      type: 'breaking' as const
    }))
  ];

  const filteredStories = filter === 'all' 
    ? allStories 
    : allStories.filter(s => s.type === filter);

  const filters: { value: StoryFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'breaking', label: 'Breaking' },
    { value: 'analysis', label: 'Analysis' },
    { value: 'visual', label: 'Visual' },
    { value: 'watch', label: 'Watch' },
  ];

  return (
    <div className="pulsestream-view h-full overflow-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl mb-2">Pulsestream</h1>
          <p className="text-sm text-muted-foreground mb-4">
            Live editorial feed from across the world
          </p>
          
          <div className="flex gap-2">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  filter === value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-muted-foreground hover:bg-accent/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="p-6">
        <Masonry columnsCount={3} gutter="1.5rem">
          {filteredStories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="story-card border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow cursor-pointer"
            >
              {story.imageUrl && (
                <div className="aspect-video bg-accent" />
              )}
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    story.type === 'breaking' ? 'bg-red-500 text-white' :
                    story.type === 'analysis' ? 'bg-blue-500 text-white' :
                    story.type === 'visual' ? 'bg-purple-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {story.type}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs bg-accent capitalize">
                    {story.domain}
                  </span>
                </div>

                <h3 className="font-semibold mb-2 text-lg leading-tight">
                  {story.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {story.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>
                      {Math.floor((Date.now() - story.timestamp.getTime()) / 60000)}m ago
                    </span>
                  </div>
                  {(story as any).readTime && (
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{(story as any).readTime} min read</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
