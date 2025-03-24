import React, { createContext, useContext, useState } from 'react';

/**
 * Interface que define a estrutura do contexto de alertas
 */
interface AlertContextType {
  /** Função para exibir um alerta com uma mensagem */
  showAlert: (message: string) => void;
  /** Função para esconder o alerta atual */
  hideAlert: () => void;
  /** Mensagem atual do alerta (null quando não há alerta) */
  message: string | null;
}

/**
 * Contexto para gerenciamento de alertas na aplicação
 */
const AlertContext = createContext<AlertContextType | undefined>(undefined);

/**
 * Provider do contexto de alertas
 * 
 * @component
 * @example
 * return (
 *   <AlertProvider>
 *     <App />
 *   </AlertProvider>
 * )
 */
export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showAlert = (msg: string) => setMessage(msg);
  const hideAlert = () => setMessage(null);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, message }}>
      {children}
    </AlertContext.Provider>
  );
};

/**
 * Hook personalizado para usar o contexto de alertas
 * 
 * @returns {AlertContextType} Funções e estado do contexto de alertas
 * @throws {Error} Se usado fora do AlertProvider
 */
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert deve ser usado dentro de um AlertProvider');
  }
  return context;
};