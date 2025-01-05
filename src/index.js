import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { ServiceProvider } from './ServiceContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ServiceProvider>
        <Router>
          <App />
        </Router>
      </ServiceProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found.');
}
