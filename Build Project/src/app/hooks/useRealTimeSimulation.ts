import { useEffect, useState } from 'react';

/**
 * Hook to simulate real-time data updates
 * This creates a "live" feel by periodically updating timestamps
 */
export function useRealTimeSimulation(intervalMs: number = 5000) {
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateTrigger(prev => prev + 1);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return updateTrigger;
}

/**
 * Hook to get current time that updates every second
 */
export function useLiveTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return currentTime;
}

/**
 * Hook to simulate live connection status
 */
export function useConnectionStatus() {
  const [isConnected, setIsConnected] = useState(true);
  const [latency, setLatency] = useState(Math.floor(Math.random() * 50) + 10);

  useEffect(() => {
    // Simulate occasional latency changes
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 50) + 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { isConnected, latency };
}
