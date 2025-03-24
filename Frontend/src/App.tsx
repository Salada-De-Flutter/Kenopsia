import React from 'react';
import { Router } from './router';
import './App.css';
import { Layout } from './components';
import { AlertProvider } from './context/AlertContext';
import './index.css'; // IMPORTANTE: Importa suas classes
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
function App() {
  return (
    <div className="responsive-container">
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
    </div>
  );
}

export default App;