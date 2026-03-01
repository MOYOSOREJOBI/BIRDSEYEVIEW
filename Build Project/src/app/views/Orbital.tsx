import React, { useRef, useEffect } from 'react';
import { mockWorldEvents } from '../data/mockData';
import type { Domain } from '../types';

export function Orbital() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedDomain, setSelectedDomain] = React.useState<Domain | 'all'>('all');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const centerX = canvas.clientWidth / 2;
    const centerY = canvas.clientHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#00ff00';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw latitude lines
      for (let i = -2; i <= 2; i++) {
        const y = centerY + (radius * i * 0.3);
        ctx.beginPath();
        const width = Math.sqrt(radius * radius - (i * radius * 0.3) * (i * radius * 0.3));
        ctx.ellipse(centerX, y, width, 10, 0, 0, Math.PI * 2);
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, 10, radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Draw event hotspots
      mockWorldEvents.forEach((event, i) => {
        const angle = ((event.location.lng + 180) / 360) * Math.PI * 2 + rotation;
        const latRad = (event.location.lat / 180) * Math.PI;
        const x = centerX + Math.cos(angle) * Math.cos(latRad) * radius;
        const y = centerY + Math.sin(latRad) * radius;

        // Pulsing effect
        const pulse = Math.sin(Date.now() / 500 + i) * 0.3 + 1;

        ctx.beginPath();
        ctx.arc(x, y, 4 * pulse, 0, Math.PI * 2);
        
        const severityColor = 
          event.severity === 'critical' ? '#ef4444' :
          event.severity === 'high' ? '#f97316' :
          event.severity === 'elevated' ? '#eab308' : '#3b82f6';
        
        ctx.fillStyle = severityColor;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = severityColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      rotation += 0.001;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const domains: (Domain | 'all')[] = ['all', 'world', 'conflict', 'markets', 'sports', 'social'];

  return (
    <div className="orbital-view h-full flex flex-col bg-background">
      {/* Controls */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Focus:</span>
          <div className="flex gap-2">
            {domains.map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  selectedDomain === domain
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-muted-foreground hover:bg-accent/80'
                }`}
              >
                {domain === 'all' ? 'All Activity' : domain}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Globe Canvas */}
      <div className="flex-1 relative">
        <canvas ref={canvasRef} className="w-full h-full" />
        
        {/* Overlay Info */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4">
          <div className="text-sm mb-2">Global Activity</div>
          <div className="text-2xl font-mono mb-1">{mockWorldEvents.length}</div>
          <div className="text-xs text-muted-foreground">Active Events</div>
        </div>

        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Critical</div>
              <div className="font-semibold text-red-500">
                {mockWorldEvents.filter(e => e.severity === 'critical').length}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">High</div>
              <div className="font-semibold text-orange-500">
                {mockWorldEvents.filter(e => e.severity === 'high').length}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Elevated</div>
              <div className="font-semibold text-yellow-500">
                {mockWorldEvents.filter(e => e.severity === 'elevated').length}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Medium</div>
              <div className="font-semibold text-blue-500">
                {mockWorldEvents.filter(e => e.severity === 'medium').length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
