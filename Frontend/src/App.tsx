import React from 'react';
import { Router } from './router';
import './App.css';
import { Layout } from './components';
import { AlertProvider } from './context/AlertContext';

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