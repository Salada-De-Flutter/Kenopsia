import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import { useMediaQuery } from 'react-responsive'; // Importando a biblioteca
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

interface DeviceInfo {
  model: string;
  osVersion: string;
  manufacturer: string;
}

export const DeviceContext = createContext<DeviceInfo>({
  model: 'Unknown',
  osVersion: 'Unknown',
  manufacturer: 'Unknown',
});

function App() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    model: 'Unknown',
    osVersion: 'Unknown',
    manufacturer: 'Unknown',
  });

  // Verifica se está em um dispositivo móvel (max-width: 768px)
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    // Check if DeviceInfo is available from WebView
    if ((window as any).DeviceInfo) {
      setDeviceInfo({
        model: (window as any).DeviceInfo.getDeviceModel() || 'Unknown',
        osVersion: (window as any).DeviceInfo.getOSVersion() || 'Unknown',
        manufacturer: (window as any).DeviceInfo.getManufacturer() || 'Unknown',
      });
    }
  }, []);

  // Estilos ajustados para responsividade com Tailwind
  const appStyles = isMobile
    ? 'flex flex-col min-h-screen w-full bg-[#1C1E26] text-white overflow-x-hidden p-4' // Mobile
    : 'flex flex-col min-h-screen w-full max-w-4xl mx-auto bg-[#1C1E26] text-white overflow-x-hidden p-6'; // Desktop

  return (
    <DeviceContext.Provider value={deviceInfo}>
      <div className={appStyles}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </DeviceContext.Provider>
  );
}

export default App;