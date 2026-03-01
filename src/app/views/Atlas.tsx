import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { mockWorldEvents } from '../data/mockData';
import type { Severity, Domain } from '../types';
import { useOutletContext } from 'react-router';
import { Filter } from 'lucide-react';

const severityColors: Record<Severity, string> = {
  critical: '#ef4444',
  high: '#f97316',
  elevated: '#eab308',
  medium: '#3b82f6',
  low: '#6b7280'
};

export function Atlas() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const { openPanel } = useOutletContext<any>();
  const [timeRange, setTimeRange] = useState('24h');
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>([]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'carto-dark': {
            type: 'raster',
            tiles: ['https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors, © CARTO'
          }
        },
        layers: [
          {
            id: 'carto-dark-layer',
            type: 'raster',
            source: 'carto-dark',
            minzoom: 0,
            maxzoom: 22
          }
        ]
      },
      center: [0, 20],
      zoom: 2
    });

    // Add markers for events
    mockWorldEvents.forEach(event => {
      const el = document.createElement('div');
      el.className = 'map-marker';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = severityColors[event.severity];
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = `0 0 20px ${severityColors[event.severity]}`;
      el.style.animation = 'pulse 2s ease-in-out infinite';

      el.addEventListener('click', () => {
        openPanel(event);
      });

      new maplibregl.Marker({ element: el })
        .setLngLat([event.location.lng, event.location.lat])
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [openPanel]);

  const domains: Domain[] = ['world', 'conflict', 'markets', 'sports', 'social', 'fashion', 'music', 'film'];

  return (
    <div className="atlas-view h-full flex flex-col">
      {/* Controls */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Filters:</span>
          </div>

          <div className="flex gap-2">
            {domains.map(domain => (
              <button
                key={domain}
                onClick={() => {
                  setSelectedDomains(prev =>
                    prev.includes(domain)
                      ? prev.filter(d => d !== domain)
                      : [...prev, domain]
                  );
                }}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  selectedDomains.includes(domain) || selectedDomains.length === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-muted-foreground'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          <div className="flex-1" />

          <div className="flex gap-2">
            {['1h', '6h', '24h', '7d'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded text-xs ${
                  timeRange === range
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-muted-foreground hover:bg-accent/80'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div ref={mapContainer} className="flex-1 relative">
        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}</style>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-6 text-xs">
          <span className="text-muted-foreground">Severity:</span>
          {Object.entries(severityColors).map(([severity, color]) => (
            <div key={severity} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">{severity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
