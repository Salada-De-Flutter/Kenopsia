import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
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

  return (
    <DeviceContext.Provider value={deviceInfo}>
      <div className="flex flex-col min-h-screen w-full bg-[#1C1E26] text-white overflow-hidden">
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