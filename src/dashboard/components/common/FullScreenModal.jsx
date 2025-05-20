import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function FullScreenModal({ onClose, title, children }) {
	const backdropRef = useRef(null);

	const handleBackdropClick = (e) => {
		// Fecha o modal se clicar fora do conteúdo
		if (e.target === backdropRef.current) {
			onClose();
		}
	};

	return (
		<AnimatePresence>
			<motion.div
				ref={backdropRef}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={handleBackdropClick}
			>
				<motion.div
					className="relative  w-full  h-full bg-gray-800 sm:rounded-lg sm:max-w-3xl sm:h-auto sm:p-6 p-4 flex flex-col justify-center items-center"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.3 }}
				>
					{/* Botão de fechar */}
					<button
						className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
						onClick={onClose}
					>
						<X className="w-6 h-6" />
					</button>

					<h2 className="text-2xl font-bold mb-6 w-full text-left">{title}</h2>
					<div className="w-full">{children}</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}