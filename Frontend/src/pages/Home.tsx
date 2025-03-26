import { Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] items-center justify-between py-6 px-4 sm:py-8 sm:px-6 md:py-16 md:px-8 overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="relative group cursor-pointer mb-4">
          <Code className="text-[#FF6347] text-5xl sm:text-6xl md:text-7xl transform group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-2 bg-[#FF6347] opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-500"></div>
        </div>
        
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-2 animate-fade-in relative">
          KENOPSIA
          <span className="absolute -inset-1 bg-[#FF6347] opacity-0 hover:opacity-20 rounded-lg blur transition-opacity duration-300"></span>
        </h1>
        
        <p className="text-white tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] mb-8 sm:mb-10 text-xs sm:text-sm md:text-base lg:text-lg">
          C O D E . C R E A T E . I N S P I R E
        </p>
        
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-light">
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>
        
        <div className="grid gap-3 w-full max-w-xs md:max-w-sm">
          <button 
            onClick={() => navigate('/register')}
            className="w-full h-12 sm:h-14 bg-gradient-to-r from-[#FF6347] to-[#FF8367] text-white rounded-lg text-sm sm:text-base md:text-lg font-medium hover:from-[#FF8367] hover:to-[#FF6347] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Criar conta
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="w-full h-12 sm:h-14 bg-gray-600/30 text-white hover:bg-gray-500/40 transition-all duration-500 rounded-lg text-xs sm:text-sm md:text-base backdrop-blur-sm transform hover:scale-105"
          >
            Fazer login
          </button>
        </div>
      </div>

      <div className="text-gray-400 text-center w-full mt-6">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg italic">
          Desenvolvido por{' '}
          <a 
            href="https://github.com/Salada-De-Flutter" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#FF6347] hover:text-[#FF8367] transition-colors duration-300 underline decoration-dotted"
          >
            Flutter
          </a>
        </p>
      </div>
    </div>
  );
}