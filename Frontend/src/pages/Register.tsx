import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
      setFile(selectedFile);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleContinue = async () => {
    try {
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-b from-[#1C1E26] to-[#2D2F3A] items-center justify-between p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="w-full max-w-md lg:max-w-lg flex-1 flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">
          BEM-VINDO à Kenopsia!
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg lg:text-xl mb-8 sm:mb-12 text-center">
          Defina uma foto, uma ID e uma senha
        </p>

        <div
          className="relative group cursor-pointer mb-8 sm:mb-12"
          onClick={handleCameraClick}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-[#FF6347] flex items-center justify-center bg-black/30 backdrop-blur-sm overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
                style={{ borderRadius: '50%' }}
              />
            ) : (
              <Camera className="text-[#FF6347] text-3xl sm:text-4xl lg:text-5xl transform group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
          <p className="text-[#FF6347] text-center mt-4 text-base sm:text-lg lg:text-xl">
            Tirar foto
          </p>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <div className="w-full mb-6 sm:mb-8">
          <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Criar ID de usuário
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Digite seu nickname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/5 text-white py-3 px-4 sm:py-4 sm:px-6 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition-all text-base lg:text-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6347]/20">
              <div className="w-1/3 h-full bg-[#FF6347]"></div>
            </div>
          </div>
        </div>

        <div className="w-full mb-6 sm:mb-8">
          <div className="relative">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 text-white py-3 px-4 sm:py-4 sm:px-6 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition-all text-base lg:text-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6347]/20">
              <div className="w-1/3 h-full bg-[#FF6347]"></div>
            </div>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-white/10 text-gray-400 backdrop-blur-sm py-3 sm:py-4 rounded-lg text-base sm:text-lg lg:text-xl font-medium hover:bg-[#FF6347] hover:text-white transition-colors duration-300 mb-6 sm:mb-8"
        >
          CONTINUAR
        </button>
      </div>

      <div className="w-full max-w-md lg:max-w-lg text-center">
        <p className="text-gray-500 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">
          Ao continuar, você está nos confirmando que tem 13 anos ou mais, e concorda com{' '}
          <a href="#" className="text-[#FF6347]">Termos</a>
          {' & '}
          <a href="#" className="text-[#FF6347]">Política de Privacidade</a>
          {' da Kenopsia'}
        </p>
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-transparent text-white py-3 sm:py-4 hover:bg-white/5 transition-colors rounded-lg text-sm sm:text-base lg:text-lg"
        >
          Fazer login
        </button>
      </div>
    </div>
  );
}