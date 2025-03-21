import React from 'react';
import { FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] flex flex-col items-center justify-between py-8 md:py-16 px-4">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        {/* Logo and Title */}
        <div className="relative group cursor-pointer mb-4">
          <FaCode className="text-[#FF6347] text-6xl md:text-7xl transform group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-2 bg-[#FF6347] opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-500"></div>
        </div>
        
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-widest mb-2 animate-fade-in relative">
          KENOPSIA
          <span className="absolute -inset-1 bg-[#FF6347] opacity-0 hover:opacity-20 rounded-lg blur transition-opacity duration-300"></span>
        </h1>
        
        <p className="text-white tracking-[0.2em] md:tracking-[0.3em] mb-10 animate-slide-in text-sm md:text-base">
          C O D E . C R E A T E . I N S P I R E
        </p>
        
        {/* Description */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-white text-sm md:text-lg font-light">
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>
        
        {/* Create Account Button */}
        <button 
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-[#FF6347] to-[#FF8367] text-white px-8 md:px-12 py-3 rounded-lg text-base md:text-lg font-medium hover:from-[#FF8367] hover:to-[#FF6347] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Criar conta
        </button>
      </div>

      {/* Footer */}
      <div className="text-gray-400 text-center w-full">
        <p className="mb-6 text-sm md:text-base italic animate-fade-in">
          Desenvolvido por Flutter
        </p>
        
        {/* Login Button */}
        <div className="w-full max-w-xs mx-auto">
          <button className="text-white py-3 px-8 w-full hover:bg-white/10 transition-colors rounded-lg text-sm md:text-base backdrop-blur-sm">
            Fazer login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;