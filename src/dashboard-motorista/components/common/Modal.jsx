import React from "react";
import ReactDOM from "react-dom";//mporta o utilitário necessário para criar um portal.
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  //Garante que o componente não quebre em ambiente SSR (como Next.js).
  if (typeof window === "undefined") return null;

  //Garante que o modal será renderizado fora da árvore do componente pai, diretamente no <body> da página.
  return ReactDOM.createPortal (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 text-gray-100 bg-opacity-50 flex justify-center items-center"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              onClose();
            }
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button type="button"
              onClick={onClose}
              className="absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            
            {/* Conteúdo do modal */}
            <div className="mb-6">
              {children}
            </div>

            {/* Botão no rodapé */}
            <div className="flex justify-end">
              <button type="button"
                onClick={onClose}
                className="px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
