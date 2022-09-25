import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { EarthoOneProvider } from '@eartho/one-client-react';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <EarthoOneProvider clientId="V6v26m8FcByNbaUhAg22">
        <App />
      </EarthoOneProvider>
    </Router>
  </StrictMode>
);
