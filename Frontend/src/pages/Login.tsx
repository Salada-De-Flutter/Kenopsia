import { FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] p-4 safe-area-padding">
      <div className="flex flex-col items-center justify-center w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Logo e Título */}
        <div className="relative group cursor-pointer mb-4 md:mb-6">
          <FaCode className="text-[#FF6347] text-3xl md:text-4xl lg:text-5xl transform group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-2 bg-[#FF6347] opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-500"></div>
        </div>

        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-2 md:mb-4 animate-fade-in relative">
          KENOPSIA
          <span className="absolute -inset-1 bg-[#FF6347] opacity-0 hover:opacity-20 rounded-lg blur transition-opacity duration-300"></span>
        </h1>

        <p className="text-white tracking-wide text-xs md:text-sm lg:text-base mb-6 md:mb-8 animate-slide-in">
          R E M E M B E R - T H E - P A S T
        </p>

        {/* Descrição */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in-up">
          <p className="text-white text-sm md:text-base lg:text-lg font-light">
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>

        {/* Botão Criar Conta */}
        <button
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-[#FF6347] to-[#FF8367] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base lg:text-lg font-medium hover:bg-[#FF6347] transition-all duration-300 shadow-lg hover:shadow-xl w-full mb-4 active:transform active:scale-95"
        >
          Criar conta
        </button>

        {/* Botão Fazer Login */}
        <button
          onClick={() => navigate('/login-form')}
          className="bg-gray-600 text-white px-6 py-2 md:px-8 md:py-3 w-full hover:bg-gray-500 transition-colors duration-300 rounded-lg text-sm md:text-base lg:text-lg backdrop-blur-sm active:transform active:scale-95"
        >
          Fazer login
        </button>

        {/* Rodapé */}
        <p className="mt-6 text-xs md:text-sm lg:text-base italic animate-fade-in text-gray-400 text-center">
          Desenvolvido por Flutter
        </p>
      </div>
    </div>
  );
};

export default Login;