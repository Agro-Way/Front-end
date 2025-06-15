// src/context/ModalContext.jsx
import React, { createContext, useContext, useState } from "react";

// Criação do contexto
const ModalContext = createContext();

// Provider para envolver na aplicação
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook customizado para usar o contexto com mais facilidade
export const useModal = () => useContext(ModalContext);
