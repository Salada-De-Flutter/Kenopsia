import React from 'react';
import { Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-sm flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="relative cursor-pointer transition-transform duration-500 hover:rotate-180">
            <Code size={48} className="text-[#FF6347]" />
          </div>

          {/* Title */}
          <div className="relative group">
            <h1 className="font-bold tracking-[0.2em] text-center text-2xl sm:text-3xl md:text-4xl">
              KENOPSIA
            </h1>
            <div className="absolute inset-0 bg-[#FF6347] opacity-0 group-hover:opacity-20 -m-1 rounded blur-lg transition-opacity duration-300"></div>
          </div>

          {/* Subtitle */}
          <div className="tracking-[0.2em] opacity-90 text-center text-sm sm:text-base">
            R E M E M B E R - T H E - P A S T
          </div>

          {/* Description */}
          <div className="text-center opacity-80 max-w-[90%] sm:max-w-[320px] mx-auto">
            Uma recriação e homenagem ao Omlet Arcade
          </div>

          {/* Buttons */}
          <div className="w-full space-y-4 mt-4">
            <button 
              onClick={() => navigate('/register')}
              className="w-full py-3 sm:py-4 px-4 bg-gradient-to-r from-[#FF6347] to-[#FF8367] hover:from-[#FF8367] hover:to-[#FF6347] text-white rounded-md transition-all duration-300 text-sm sm:text-base"
            >
              Criar conta
            </button>
            <button 
              onClick={() => navigate('/login-form')}
              className="w-full py-3 sm:py-4 px-4 border border-white/30 hover:border-white/50 hover:bg-white/5 text-white rounded-md backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
            >
              Fazer login
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 sm:mt-12">
            <p className="opacity-60 italic text-sm">
              Desenvolvido por Flutter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;