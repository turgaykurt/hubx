import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';
import { Tabs } from './Tabs';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div>
        <Tabs />
      </div>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
