import React from 'react';
import { Router } from './router';
import './App.css';
import './index.css'; // Importa os estilos globais
import { Layout } from './components';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <AlertProvider>
      {/* Supondo que o Layout é o container principal */}
      <Layout>
        {/* Envolva seu conteúdo com a classe responsiva definida em index.css */}
        <div className="responsive-container">
          <Router />
        </div>
      </Layout>
    </AlertProvider>
  );
}

export default App;
