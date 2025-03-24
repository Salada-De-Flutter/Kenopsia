import React from 'react';
import { Router } from './router';
import './App.css';
import { Layout } from './components';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <div className="container">
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
    </div>
  );
}

export default App;