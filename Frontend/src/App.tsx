import React from 'react';
import { Router } from './router';
import './App.css';
import { Layout } from './components';
import { AlertProvider } from './context/AlertContext';
import './index.css'; // IMPORTANTE: Importa suas classes
function App() {
  return (
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
  );
}

export default App;