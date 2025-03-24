import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Mantém se quiser, mas não obrigatório

// ✅ Estilos Globais Responsivos
const GlobalStyle = () => (
  <style>{`
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background-color: #1C1E26;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    #root {
      max-width: 480px; /* Força largura mobile */
      margin: 0 auto;
    }
  `}</style>
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
