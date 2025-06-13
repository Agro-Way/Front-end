import React, { useEffect, useRef } from 'react';
import '../assets/css/Modal.css';

const Modal = ({ isOpen, onClose, title = 'Título do Modal', children }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus no botão "Fechar"
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 200);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      className="overlay"
      ref={overlayRef}
      aria-modal="true"
      aria-labelledby="modalTitle"
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleOverlayClick(e);
    }
  }}
  tabIndex={-1}
    >
      <div
        className={`modal ${isOpen ? 'show' : ''}`}
        ref={modalRef}
        id="modalBox"
      >
        <div className="modal-header">
          <span id="modalTitle">{title}</span>
          <button type='button'
            className="close-btn"
            aria-label="Fechar modal"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button type='button'
            className="btn"
            onClick={onClose}
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
