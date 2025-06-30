import { useState, React } from 'react';
import {getUser} from "@/utils/auth";

// Componente que renderiza o formul[ario]
const EditProfileForm = () => {
	//pegando os dados do usuário
	const user = getUser()

	const handleSubmit = (e) => {
		e.preventDefault();
		// lógica de envio
		setShowModal(false);
	};

  return (
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
		{/* Linha com dois inputs */}
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-100 mb-1">
                    Nome
                </label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite o nome do perfil"
					value={user?.name}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

		    <div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">
					E-mail
				</label>
				<input
					type="email"
					id="preco"
					placeholder="exemplo@gmail.com"
					value={user?.email}
					required
				    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				</div>
		    </div>

			<div className='mb-3'>
				<label
					htmlFor="imagem"
					className="block text-sm font-medium text-gray-100 mb-1"
				>
					Imagem do Perfil
				</label>
				<input
					type="file"
					id="imagem"
					required
					className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
           </div>

			{/* Botão de envio */}
			<div className="flex justify-between gap-2">
				<button type="reset"
					className="w-full cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
				>
					Limpar
				</button>
				<button type="submit"
					className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
				>
					Editar Cliente
				</button>
			</div>
	    </form>
  );
};
export default EditProfileForm;
