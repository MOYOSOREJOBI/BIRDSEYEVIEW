import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { TopBar } from './TopBar';
import { LiveTicker } from './LiveTicker';
import { ContextPanel } from './ContextPanel';

export function AppShell() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState<any>(null);

  const openPanel = (content: any) => {
    setPanelContent(content);
    setIsPanelOpen(true);
  };

  return (
    <div className="app-shell h-screen flex flex-col overflow-hidden">
      <TopBar />
      
      <div className="flex-1 flex overflow-hidden">
        <Navigation />
        
        <main className="flex-1 overflow-auto relative">
          <Outlet context={{ openPanel }} />
        </main>

        <ContextPanel 
          isOpen={isPanelOpen} 
          onClose={() => setIsPanelOpen(false)}
          content={panelContent}
        />
      </div>

      <LiveTicker />
    </div>
  );
}
