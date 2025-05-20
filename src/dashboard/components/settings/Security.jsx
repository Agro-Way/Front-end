import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import { useState } from "react";
import Modal from '../../components/common/Modal';
import EditPasswordForm from '../../components/forms/EditPasswordForm';

const Security = () => {
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
		<SettingSection icon={Lock} title={"Segurança"}>
			<div className='mt-4'>
				<button className='bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200'
				onClick={() =>
					openModal({
						title: 'Editar Password',
						content: (
							<EditPasswordForm />
						),
					})
            	}
				>
					Mudar Senha
				</button>
			</div>

			<Modal isOpen={!!modalData} onClose={closeModal}>
				<h2 className="text-xl font-semibold mb-4">{modalData?.title}</h2>
				{modalData?.content}
       		</Modal>
		</SettingSection>
	);
};
export default Security;
