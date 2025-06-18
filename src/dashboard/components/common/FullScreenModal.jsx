import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FullscreenModal({ onClose, title, children }) {
	const backdropRef = useRef(null);

	const handleBackdropClick = (e) => {
		if (e.target === backdropRef.current) {
			onClose();
		}
	};

	useEffect(() => {
		document.body.classList.add("overflow-hidden");
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<AnimatePresence>
			<motion.div
				ref={backdropRef}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-x-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={handleBackdropClick}
			>
				<motion.div
					className="bg-gray-900 text-gray-100 w-full h-full max-w-screen overflow-y-auto overflow-x-hidden p-4 relative"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ duration: 0.3 }}
				>
					{/* Botão de fechar */}
					<button
						type="button"
						className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-white"
						onClick={onClose}
					>
						<X className="w-6 h-6" />
					</button>

					{/* Título */}
					<h2 className="text-2xl font-bold mb-6 break-words">{title}</h2>

					{/* Conteúdo com segurança contra overflow */}
					<div className="pb-10 w-full break-words overflow-x-hidden">
						{children}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
