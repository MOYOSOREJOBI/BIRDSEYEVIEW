import { createBrowserRouter } from 'react-router';
import { AppShell } from './components/AppShell';
import { Atlas } from './views/Atlas';
import { Current } from './views/Current';
import { Orbital } from './views/Orbital';
import { Pulsestream } from './views/Pulsestream';
import { Broadcast } from './views/Broadcast';
import { MyWorld } from './views/MyWorld';
import { Ripples } from './views/Ripples';
import { Signals } from './views/Signals';
import { Settings } from './views/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppShell,
    children: [
      {
        index: true,
        Component: Atlas,
      },
      {
        path: 'current',
        Component: Current,
      },
      {
        path: 'orbital',
        Component: Orbital,
      },
      {
        path: 'pulsestream',
        Component: Pulsestream,
      },
      {
        path: 'broadcast',
        Component: Broadcast,
      },
      {
        path: 'my-world',
        Component: MyWorld,
      },
      {
        path: 'ripples',
        Component: Ripples,
      },
      {
        path: 'signals',
        Component: Signals,
      },
      {
        path: 'settings',
        Component: Settings,
      },
    ],
  },
]);