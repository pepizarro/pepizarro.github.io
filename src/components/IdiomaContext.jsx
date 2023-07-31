import React, { createContext, useState } from 'react';

const IdiomaContext = createContext();

const ProveedorIdioma = ({ children }) => {
  const [idioma, setIdioma] = useState('es'); // Establece el idioma inicial aquí

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export { IdiomaContext, ProveedorIdioma };