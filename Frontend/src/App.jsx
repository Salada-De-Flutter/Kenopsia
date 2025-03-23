import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext, useContext } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

// Criamos o Context para as informações do dispositivo
const DeviceContext = createContext();

// Um hook personalizado para facilitar o uso do Context
export const useDeviceInfo = () => useContext(DeviceContext);

function App() {
  // Estado para guardar as informações do dispositivo
  const [deviceInfo, setDeviceInfo] = useState({
    model: 'Desconhecido',
    osVersion: 'Desconhecida',
    manufacturer: 'Desconhecido',
  });

  // Pega as informações do WebView quando o app carrega
  useEffect(() => {
    if (window.DeviceInfo) { // Só funciona no WebView
      const model = window.DeviceInfo.getDeviceModel();
      const osVersion = window.DeviceInfo.getOSVersion();
      const manufacturer = window.DeviceInfo.getManufacturer();

      setDeviceInfo({
        model: model || 'Desconhecido',
        osVersion: osVersion || 'Desconhecida',
        manufacturer: manufacturer || 'Desconhecido',
      });
    }
  }, []);

  // Estilo global que muda dependendo do dispositivo
  const appStyle = {
    minHeight: '100vh', // Garante que o app ocupe a tela toda
    backgroundColor: deviceInfo.manufacturer === 'Samsung' ? 'lightblue' : 'white',
    fontSize: deviceInfo.osVersion >= '13' ? '18px' : '16px',
    padding: '20px',
  };

  return (
    <DeviceContext.Provider value={deviceInfo}> {/* Disponibiliza o deviceInfo para todos */}
      <div style={appStyle}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </DeviceContext.Provider>
  );
}

export default App;