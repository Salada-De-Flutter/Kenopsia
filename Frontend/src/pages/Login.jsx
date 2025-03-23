import React from 'react';
import { FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A]">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-12">
        {/* Logo e Título */}
        <div className="relative group cursor-pointer mb-4">
          <FaCode className="text-[#FF6347] text-3xl sm:text-4xl md:text-6xl transform group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-2 bg-[#FF6347] opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-500"></div>
        </div>

        <h1 className="text-white text-lg sm:text-2xl md:text-4xl font-bold tracking-widest mb-2 animate-fade-in relative">
          KENOPSIA
          <span className="absolute -inset-1 bg-[#FF6347] opacity-0 hover:opacity-20 rounded-lg blur transition-opacity duration-300"></span>
        </h1>

        <p className="text-white tracking-wider text-xs sm:text-sm md:text-base mb-6 sm:mb-8 animate-slide-in">
          R E M E M B E R - T H E - P A S T
        </p>

        {/* Descrição */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 animate-fade-in-up max-w-md">
          <p className="text-white text-sm sm:text-base md:text-lg font-light px-2">
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>

        {/* Botão Criar Conta */}
        <button
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-[#FF6347] to-[#FF8367] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium hover:bg-[#FF6347] transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-xs"
        >
          Criar conta
        </button>
      </main>

      {/* Rodapé */}
      <footer className="w-full px-4 pb-4">
        <div className="w-full max-w-xs mx-auto">
          <button
            onClick={() => navigate('/login-form')}
            className="bg-gray-600 text-white py-2 px-6 sm:py-3 sm:px-8 w-full hover:bg-gray-500 transition-colors duration-300 rounded-lg text-sm sm:text-base backdrop-blur-sm"
          >
            Fazer login
          </button>
        </div>
        <p className="mt-4 text-xs sm:text-sm italic animate-fade-in text-gray-400 text-center">
          Desenvolvido por Flutter
        </p>
      </footer>
    </div>
  );
};

export default Login;