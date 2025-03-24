import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // IMPORTANTE: Importa suas classes

createRoot(document.getElementById('root')!).render(
  <div className="responsive-container">
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </div>
);
