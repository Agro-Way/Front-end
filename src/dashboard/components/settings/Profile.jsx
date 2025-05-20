import { useState } from 'react';
import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import Modal from '../../components/common/Modal';
import EditProfileForm from '../../components/forms/EditProfileForm';

const Profile = () => {
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
		<SettingSection icon={User} title={"Perfil"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://randomuser.me/api/portraits/men/3.jpg'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
					<p className='text-gray-400'>john.doe@example.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'
			onClick={() =>
                openModal({
                    title: 'Editar Perfil',
                    content: (
                        <EditProfileForm />
                    ),
                })
            }
			>
				Editar Perfil
			</button>

			<Modal isOpen={!!modalData} onClose={closeModal}>
				<h2 className="text-xl font-semibold mb-4">{modalData?.title}</h2>
				{modalData?.content}
       		</Modal>
		</SettingSection>
	);
};
export default Profile;
