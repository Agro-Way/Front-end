// src/components/ModalWrapper.jsx
import React from 'react';
import Modal from './Modal';
import { useModal } from '../context/ModalContext';

const ModalWrapper = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} title="Consultar Pedido">
      <p className="p-size">Este é o conteúdo principal do modal. Aqui você pode colocar qualquer informação relevante.</p>
      <p className="p-size">Role para testar scroll, se houver muito conteúdo.</p>
      <p className="p-size">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel sapien a sapien convallis dignissim.</p>
    </Modal>
  );
};

export default ModalWrapper;
