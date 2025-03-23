import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Store,
  Bell,
  Users,
  Home as HomeIcon,
  Radio,
  Gamepad,
  MessageSquare,
  ClipboardList,
  Trophy,
  Blocks,
  Calendar,
  Users as People,
  Gift,
  Ticket,
  Plus
} from 'lucide-react';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const sidebarItems = [
    { icon: ClipboardList, text: 'Estatísticas da Livestream' },
    { icon: Trophy, text: 'Torneios' },
    { icon: Blocks, text: 'Meus NFTs' },
    { icon: Calendar, text: 'Eventos' },
    { icon: People, text: 'Quadro de Líderes' },
    { icon: Gamepad, text: 'Meus Jogos' },
    { icon: People, text: 'Comunidades' },
    { icon: Gift, text: 'Convide Amigos & Ganhe Prêmios' },
    { icon: Ticket, text: 'Meus Cupons' },
  ];

  const handleNavClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  const handleTouchStart = (e: TouchEvent | MouseEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    setTouchStart(x);
    if (mainRef.current) {
      mainRef.current.classList.add('no-select');
    }
  };

  const handleTouchMove = (e: TouchEvent | MouseEvent) => {
    if (!touchStart) return;
    
    const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const diff = x - touchStart;

    if (diff > 50 && !isSidebarOpen) {
      setIsSidebarOpen(true);
    } else if (diff < -50 && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    if (mainRef.current) {
      mainRef.current.classList.remove('no-select');
    }
  };

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    main.addEventListener('mousedown', handleTouchStart);
    main.addEventListener('mousemove', handleTouchMove);
    main.addEventListener('mouseup', handleTouchEnd);
    main.addEventListener('mouseleave', handleTouchEnd);
    main.addEventListener('touchstart', handleTouchStart);
    main.addEventListener('touchmove', handleTouchMove);
    main.addEventListener('touchend', handleTouchEnd);

    return () => {
      main.removeEventListener('mousedown', handleTouchStart);
      main.removeEventListener('mousemove', handleTouchMove);
      main.removeEventListener('mouseup', handleTouchEnd);
      main.removeEventListener('mouseleave', handleTouchEnd);
      main.removeEventListener('touchstart', handleTouchStart);
      main.removeEventListener('touchmove', handleTouchMove);
      main.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, isSidebarOpen]);

  return (
    <div className="relative min-h-screen bg-[#1C1E26] text-white overflow-hidden">
      <style>
        {`
          .no-select {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
        `}
      </style>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg z-50 text-sm"
          >
            Ainda não desenvolvido
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isSidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-[100dvh] w-[280px] bg-[#1C1E26] border-r border-gray-700 z-40"
      >
        <div className="p-4 h-full overflow-y-auto pb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div>
              <h2 className="text-base font-semibold">Visitante</h2>
              <p className="text-xs text-gray-400">(pressione para fazer log in)</p>
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={handleNavClick}
                className="flex items-center gap-3 w-full p-3 hover:bg-white/5 rounded-lg transition-colors text-sm"
              >
                <item.icon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-200">{item.text}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      <div 
        ref={mainRef}
        className="mx-auto w-full sm:max-w-[400px] min-h-[100dvh] flex flex-col bg-[#1C1E26] border-x border-gray-700/50"
      >
        <div className="sticky top-0 flex items-center justify-between p-3 border-b border-gray-700/50 bg-[#1C1E26] z-20">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-1 hover:bg-white/5 rounded-lg transition-colors"
            >
              <span className="text-2xl text-gray-400">☰</span>
            </button>
            <div className="flex items-center bg-white/5 rounded-full px-3 py-1.5">
              <Search className="text-gray-400 mr-2 w-4 h-4" />
              <input
                type="text"
                placeholder="Pesquisar"
                className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Store onClick={handleNavClick} className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <Bell onClick={handleNavClick} className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <Users onClick={handleNavClick} className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="grid grid-cols-4 gap-2 justify-items-center">
              <div className="w-7 h-7 bg-gray-700/50 rounded"></div>
              <div className="w-7 h-7 bg-gray-700/50 rounded-full"></div>
              <div className="w-7 h-7 bg-gray-700/50 rounded-full"></div>
              <div className="w-7 h-7 bg-gray-700/50 rounded"></div>
            </div>
            <h2 className="text-lg font-medium text-gray-200">Você está atualizado nas postagens</h2>
            <p className="text-sm text-gray-400">
              verifique a guia <span className="text-[#ff2d00] font-medium">Para Você</span> para ver mais
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 w-full bg-[#1C1E26] border-t border-gray-700/50 py-3 px-6">
          <div className="flex items-center justify-between">
            <button onClick={handleNavClick} className="text-[#ff2d00]">
              <HomeIcon className="w-6 h-6" />
            </button>
            <button onClick={handleNavClick} className="text-gray-400">
              <Radio className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNavClick} 
              className="bg-[#ff2d00] w-14 h-14 rounded-full flex items-center justify-center -mt-10 shadow-lg hover:bg-[#ff4019] transition-colors"
            >
              <Plus className="w-8 h-8 text-white" />
            </button>
            <button onClick={handleNavClick} className="text-gray-400">
              <Gamepad className="w-6 h-6" />
            </button>
            <button onClick={handleNavClick} className="text-gray-400">
              <MessageSquare className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;