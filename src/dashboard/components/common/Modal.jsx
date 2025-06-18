import React from "react";
import ReactDOM from "react-dom";//mporta o utilitário necessário para criar um portal.
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  //Garante que o componente não quebre em ambiente SSR (como Next.js).
  if (typeof window === "undefined") return null;

  //Garante que o modal será renderizado fora da árvore do componente pai, diretamente no <body> da página.
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 text-gray-100  bg-opacity-50 flex justify-center items-center"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
