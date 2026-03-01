import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function Ripples() {
  // Mock impact chain
  const impactChain = [
    {
      id: 1,
      title: 'Oil Supply Disruption',
      domain: 'conflict',
      severity: 'critical',
      description: 'Major pipeline incident in Middle East'
    },
    {
      id: 2,
      title: 'Crude Oil Prices Surge',
      domain: 'markets',
      severity: 'high',
      description: 'Brent crude up 15% in after-hours trading',
      impact: '+$8.2 billion market cap shift'
    },
    {
      id: 3,
      title: 'Airline Stocks Drop',
      domain: 'markets',
      severity: 'high',
      description: 'Major carriers see 5-8% decline on fuel cost concerns',
      impact: '-$12 billion in airline sector'
    },
    {
      id: 4,
      title: 'Sports Travel Affected',
      domain: 'sports',
      severity: 'medium',
      description: 'Champions League travel costs increase',
      impact: '23% increase in ticket+travel packages'
    },
    {
      id: 5,
      title: 'Social Media Reaction',
      domain: 'social',
      severity: 'elevated',
      description: 'Viral tweets about travel costs trend worldwide',
      impact: '2.4M posts in 6 hours'
    }
  ];

  return (
    <div className="ripples-view h-full overflow-auto p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Ripples</h1>
          <p className="text-sm text-muted-foreground">
            Cross-domain impact visualization
          </p>
        </div>

        {/* Impact Timeline */}
        <div className="space-y-6">
          {impactChain.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${
                    node.severity === 'critical' ? 'bg-red-500' :
                    node.severity === 'high' ? 'bg-orange-500' :
                    node.severity === 'elevated' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  {index < impactChain.length - 1 && (
                    <div className="w-0.5 h-20 bg-border mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 border border-border rounded-lg p-6 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-xs bg-accent capitalize">
                          {node.domain}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          node.severity === 'critical' ? 'bg-red-500 text-white' :
                          node.severity === 'high' ? 'bg-orange-500 text-white' :
                          node.severity === 'elevated' ? 'bg-yellow-500 text-black' :
                          'bg-blue-500 text-white'
                        }`}>
                          {node.severity}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{node.title}</h3>
                      <p className="text-sm text-muted-foreground">{node.description}</p>
                    </div>
                  </div>

                  {node.impact && (
                    <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-accent/50">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Impact: {node.impact}</span>
                    </div>
                  )}

                  {index < impactChain.length - 1 && (
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4" />
                      <span>Led to</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 border border-primary/50 rounded-lg p-6 bg-primary/5"
        >
          <h3 className="text-lg font-semibold mb-3">Why This Matters</h3>
          <p className="text-sm leading-relaxed mb-4">
            This cascade demonstrates how a geopolitical event can ripple through multiple domains within hours.
            The initial oil supply disruption created immediate market volatility, which then affected
            transportation costs, impacting both scheduled sporting events and triggering widespread social
            media discussions about travel affordability.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded bg-background">
              <div className="text-xs text-muted-foreground mb-1">Time to Social Impact</div>
              <div className="font-semibold">6 hours</div>
            </div>
            <div className="p-3 rounded bg-background">
              <div className="text-xs text-muted-foreground mb-1">Domains Affected</div>
              <div className="font-semibold">5 major sectors</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
