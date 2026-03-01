import React, { useState } from 'react';
import { motion } from 'motion/react';
import { mockSignals } from '../data/mockData';
import type { Severity } from '../types';
import { AlertTriangle, Activity, Filter } from 'lucide-react';

export function Signals() {
  const [severityFilter, setSeverityFilter] = useState<Severity | 'all'>('all');

  const filteredSignals = severityFilter === 'all' 
    ? mockSignals 
    : mockSignals.filter(s => s.severity === severityFilter);

  const severities: (Severity | 'all')[] = ['all', 'critical', 'high', 'elevated', 'medium', 'low'];

  return (
    <div className="signals-view h-full flex flex-col bg-background">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl mb-1">Signals</h1>
            <p className="text-sm text-muted-foreground">Real-time alert monitoring system</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
            <span className="text-sm">System Active</span>
          </div>
        </div>

        {/* Severity Filters */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Severity:</span>
          </div>
          <div className="flex gap-2">
            {severities.map(severity => (
              <button
                key={severity}
                onClick={() => setSeverityFilter(severity)}
                className={`px-3 py-1 rounded-full text-xs transition-all capitalize ${
                  severityFilter === severity
                    ? severity === 'critical' ? 'bg-red-500 text-white' :
                      severity === 'high' ? 'bg-orange-500 text-white' :
                      severity === 'elevated' ? 'bg-yellow-500 text-black' :
                      severity === 'medium' ? 'bg-blue-500 text-white' :
                      severity === 'low' ? 'bg-gray-500 text-white' :
                      'bg-primary text-primary-foreground'
                    : 'bg-accent text-muted-foreground hover:bg-accent/80'
                }`}
              >
                {severity}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-5 gap-px bg-border">
        {[
          { label: 'Critical', count: mockSignals.filter(s => s.severity === 'critical').length, color: 'bg-red-500' },
          { label: 'High', count: mockSignals.filter(s => s.severity === 'high').length, color: 'bg-orange-500' },
          { label: 'Elevated', count: mockSignals.filter(s => s.severity === 'elevated').length, color: 'bg-yellow-500' },
          { label: 'Medium', count: mockSignals.filter(s => s.severity === 'medium').length, color: 'bg-blue-500' },
          { label: 'Low', count: mockSignals.filter(s => s.severity === 'low').length, color: 'bg-gray-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-4">
            <div className={`w-3 h-3 rounded-full ${stat.color} mb-2`} />
            <div className="text-2xl font-mono mb-1">{stat.count}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Signals Feed */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredSignals.map((signal, index) => (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-lg p-4 bg-card hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Severity Indicator */}
                <div className="flex flex-col items-center pt-1">
                  <div className={`w-3 h-3 rounded-full ${
                    signal.severity === 'critical' ? 'bg-red-500 animate-pulse' :
                    signal.severity === 'high' ? 'bg-orange-500' :
                    signal.severity === 'elevated' ? 'bg-yellow-500' :
                    signal.severity === 'medium' ? 'bg-blue-500' :
                    'bg-gray-500'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-4 h-4 flex-shrink-0 ${
                        signal.severity === 'critical' ? 'text-red-500' :
                        signal.severity === 'high' ? 'text-orange-500' :
                        signal.severity === 'elevated' ? 'text-yellow-500' :
                        'text-blue-500'
                      }`} />
                      <h3 className="font-semibold">{signal.title}</h3>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs whitespace-nowrap ml-2 ${
                      signal.severity === 'critical' ? 'bg-red-500 text-white' :
                      signal.severity === 'high' ? 'bg-orange-500 text-white' :
                      signal.severity === 'elevated' ? 'bg-yellow-500 text-black' :
                      signal.severity === 'medium' ? 'bg-blue-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {signal.severity.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {signal.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="capitalize">{signal.domain}</span>
                    <span>•</span>
                    <span>{signal.sources} sources</span>
                    <span>•</span>
                    <span>{Math.floor((Date.now() - signal.timestamp.getTime()) / 60000)}m ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
