import React from 'react';
import { FaCamera } from 'react-icons/fa';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] flex flex-col items-center justify-between p-6">
      <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center">
        {/* Welcome Text */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center">
          BEM-VINDO à Kenopsia!
        </h1>
        
        <p className="text-gray-400 text-lg mb-12 text-center">
          Defina uma foto e uma ID
        </p>

        {/* Photo Upload Button */}
        <div className="relative group cursor-pointer mb-12">
          <div className="w-32 h-32 rounded-full border-2 border-[#FF6347] flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <FaCamera className="text-[#FF6347] text-4xl transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-[#FF6347] text-center mt-4 text-lg">
            Tirar foto
          </p>
        </div>

        {/* User ID Input */}
        <div className="w-full mb-8">
          <h2 className="text-white text-2xl font-semibold mb-4 text-center">
            Criar ID de usuário
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Digite seu nickname"
              className="w-full bg-white/5 text-white py-4 px-6 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition-all"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6347]/20">
              <div className="w-1/3 h-full bg-[#FF6347]"></div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-white/10 text-gray-400 backdrop-blur-sm py-4 rounded-lg text-lg font-medium hover:bg-white/15 transition-colors mb-8">
          CONTINUAR
        </button>
      </div>

      {/* Footer */}
      <div className="w-full max-w-md text-center">
        <p className="text-gray-500 text-sm mb-6">
          Ao continuar, você está nos confirmando que tem 13 anos ou mais, e concorda com{' '}
          <a href="#" className="text-[#FF6347]">Termos</a>
          {' & '}
          <a href="#" className="text-[#FF6347]">Política de Privacidade</a>
          {' da Kenopsia'}
        </p>
        
        <button className="w-full bg-transparent text-white py-4 hover:bg-white/5 transition-colors rounded-lg">
          Fazer login
        </button>
      </div>
    </div>
  );
};

export default Register;