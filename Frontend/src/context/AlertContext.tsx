import React, { createContext, useContext, useState } from 'react';

interface AlertContextType {
  showAlert: (message: string) => void;
  hideAlert: () => void;
  message: string | null;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

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

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};