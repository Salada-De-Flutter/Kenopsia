import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages';

/**
 * Componente de Roteamento
 * 
 * Gerencia as rotas da aplicação usando React Router DOM.
 * Define os caminhos e componentes correspondentes.
 * 
 * @component
 * @example
 * return (
 *   <Router />
 * )
 */
function Router() {
  return (
    <Routes>
      {/* Rota inicial - Página de Login */}
      <Route path="/" element={<Login />} />
      
      {/* Rota para o formulário de login */}
      <Route path="/login-form" element={<Login />} />
      
      {/* Rota para o formulário de registro */}
      <Route path="/register" element={<Login />} />
    </Routes>
  );
}

export default Router;