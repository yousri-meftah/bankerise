// src/auth/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

type Status = 'checking' | 'authenticated' | 'no-authenticated'




type AuthContextType = {
  status: Status;
  setStatus: (status: Status) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<Status>('checking');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
        const response = await fetch('/oauth2/auth');
        console.log(response)
      if (response.ok) {
        // Assuming the API returns a status that can be directly used or mapped
        setStatus('authenticated');
      } else {
        setStatus('no-authenticated');
      }
    } catch (error) {
      console.error('Failed to check authentication status', error);
      setStatus('no-authenticated');
    }
  };

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
