// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import '../assets/css/Modal.css';
import { useModal } from '../contexts/ModalContext'; // Importa o contexto

const Modal = ({ isOpen, onClose, title = 'Título do Modal', children }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  const { isModalOpen, closeModal } = useModal(); // Usa o contexto para controle global

  // Decide qual controle usar (prioriza props diretas para compatibilidade)
  const visible = isOpen ?? isModalOpen;
  const handleClose = onClose ?? closeModal;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; //Bloqueia o scroll da página
      // Focus no botão "Fechar"
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 200);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; //Restaura o scroll
    };
  }, [visible, handleClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  return (
    <div
      className="overlay"
      ref={overlayRef}
      aria-modal="true"
      aria-labelledby="modalTitle"
      style={{ display: visible ? 'flex' : 'none' }}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOverlayClick(e);
        }
      }}
      tabIndex={-1}
    >
      <div
        className={`modal ${visible ? 'show' : ''}`}
        ref={modalRef}
        id="modalBox"
      >
        <div className="modal-header">
          <span id="modalTitle">{title}</span>
          <button
            type="button"
            className="close-btn"
            aria-label="Fechar modal"
            onClick={handleClose}
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn"
            onClick={handleClose}
            ref={closeButtonRef}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
