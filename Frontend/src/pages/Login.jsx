import { FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] flex flex-col items-center justify-between py-4 px-4 sm:py-8 sm:px-6 md:py-16 md:px-8">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Logo and Title */}
        <div className="relative group cursor-pointer mb-2 sm:mb-4">
          <FaCode className="text-[#FF6347] text-4xl sm:text-5xl md:text-7xl transform group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-2 bg-[#FF6347] opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-500"></div>
        </div>
        
        <h1 className="text-white text-xl sm:text-2xl md:text-5xl font-bold tracking-widest mb-1 sm:mb-2 animate-fade-in relative">
          KENOPSIA
          <span className="absolute -inset-1 bg-[#FF6347] opacity-0 hover:opacity-20 rounded-lg blur transition-opacity duration-300"></span>
        </h1>
        
        <p className="text-white tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] mb-6 sm:mb-8 text-xs sm:text-sm md:text-base animate-slide-in">
          R E M E M B E R   T H E   P A S T
        </p>
        
        {/* Description */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-fade-in-up">
          <p className="text-white text-sm sm:text-base md:text-lg font-light">
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>
        
        {/* Create Account Button */}
        <button 
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-[#FF6347] to-[#FF8367] text-white px-4 sm:px-6 md:px-12 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium hover:bg-[#FF6347] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          Criar conta
        </button>
      </div>

      {/* Footer */}
      <div className="text-gray-400 text-center w-full">
        <div className="w-full mx-auto">
          <button className="bg-gray-600 text-white py-2 sm:py-3 px-4 sm:px-6 w-full hover:bg-gray-500 transition-colors duration-300 rounded-lg text-sm sm:text-base md:text-base backdrop-blur-sm">
            Fazer login
          </button>
        </div>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base italic animate-fade-in">
          Desenvolvido por Flutter
        </p>
      </div>
    </div>
  );
};

export default Login;