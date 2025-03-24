import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code } from 'lucide-react';

/**
 * Página de Login
 * 
 * Componente responsável pela tela inicial de autenticação.
 * Apresenta opções para criar conta ou fazer login.
 * 
 * @component
 * @example
 * return (
 *   <Login />
 * )
 */
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-[480px] h-full py-8 px-4 sm:px-6">
        {/* Logo e Título */}
        <div className="relative group cursor-pointer mb-6" aria-label="Logo Kenopsia">
          <Code className="text-[#FF6347] text-4xl sm:text-5xl transform group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-2 bg-[#FF6347] opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-500"></div>
        </div>

        <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-wide mb-2 animate-fade-in relative">
          KENOPSIA
          <span className="absolute -inset-1 bg-[#FF6347] opacity-0 hover:opacity-20 rounded-lg blur transition-opacity duration-300"></span>
        </h1>

        <p className="text-white tracking-wider text-sm sm:text-base mb-8 animate-slide-in">
          R E M E M B E R - T H E - P A S T
        </p>

        {/* Descrição */}
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="text-white text-sm sm:text-base font-light">
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>

        {/* Botão Criar Conta */}
        <button
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-[#FF6347] to-[#FF8367] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:from-[#FF8367] hover:to-[#FF6347] transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-sm mb-4 active:transform active:scale-95"
          aria-label="Criar nova conta"
        >
          Criar conta
        </button>

        {/* Botão Fazer Login */}
        <button
          onClick={() => navigate('/login-form')}
          className="bg-gray-600/80 text-white px-6 py-3 w-full max-w-sm hover:bg-gray-500/80 transition-colors duration-300 rounded-lg text-sm sm:text-base backdrop-blur-sm active:transform active:scale-95"
          aria-label="Acessar formulário de login"
        >
          Fazer login
        </button>

        {/* Rodapé */}
        <p className="mt-8 text-xs sm:text-sm italic animate-fade-in text-gray-400 text-center">
          Desenvolvido por Flutter
        </p>
      </div>
    </div>
  );
};

export default Login;