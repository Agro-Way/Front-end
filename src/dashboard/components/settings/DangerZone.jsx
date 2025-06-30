import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import Modal from '../../components/common/Modal';
import DeleteProfileForm  from '../../components/forms/DeleteProfileForm ';

const DangerZone = () => {
	// Hook useState para armazenar os dados do modal (título e conteúdo)
	// Começa como "null", ou seja, o modal está fechado e sem conteúdo
	const [modalData, setModalData] = useState(null)
		
	// Função para abrir o modal com título e conteúdo específicos
	// Recebe um objeto com 'title' e 'content', e salva isso no estado modalData
	const openModal = ({ title, content }) => {
		setModalData({ title, content })
	}
		
	// Função para fechar o modal
	// Simplesmente define modalData como null, o que faz com que o modal deixe de ser renderizado
	const closeModal = () => setModalData(null)

	return (
		<motion.div
			className='bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='flex items-center mb-4'>
				<Trash2 className='text-red-400 mr-3' size={24} />
				<h2 className='text-xl font-semibold text-gray-100'>Zona Perigosa</h2>
			</div>
			<p className='text-gray-300 mb-4'>Eliminar permanentemente a sua conta e o seu conteúdo.</p>
			<button type="button" className='bg-red-600 cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200'
			onClick={() =>
				openModal({
					title: 'Eliminar Perfil',
					content: (
						<DeleteProfileForm />
					),
				})
            }
			>
				Eliminar Conta
			</button>

			<Modal isOpen={!!modalData} onClose={closeModal}>
				<h2 className="text-xl font-semibold mb-4">{modalData?.title}</h2>
				{modalData?.content}
       		</Modal>
		</motion.div>
	);
};
export default DangerZone;
