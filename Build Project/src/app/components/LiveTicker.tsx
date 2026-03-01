import React from 'react';
import { motion } from 'motion/react';
import { mockMarkets, mockScores } from '../data/mockData';

export function LiveTicker() {
  const [isPaused, setIsPaused] = React.useState(false);

  const tickerItems = [
    ...mockMarkets.map(m => ({
      text: `${m.symbol} ${m.price.toFixed(2)} ${m.change >= 0 ? '+' : ''}${m.changePercent.toFixed(2)}%`,
      color: m.change >= 0 ? 'text-green-500' : 'text-red-500'
    })),
    ...mockScores.map(s => ({
      text: `${s.sport}: ${s.homeTeam} ${s.homeScore} - ${s.awayScore} ${s.awayTeam} ${s.status === 'live' ? '🔴' : ''}`,
      color: 'text-foreground'
    }))
  ];

  return (
    <div 
      className="live-ticker h-8 border-t border-border overflow-hidden bg-background/50 backdrop-blur-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex items-center h-full gap-8 px-4"
        animate={{ x: isPaused ? 0 : ['0%', '-50%'] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
          ...(isPaused && { duration: 0 })
        }}
      >
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap text-sm">
            <span className={item.color}>{item.text}</span>
            <span className="text-muted-foreground">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
