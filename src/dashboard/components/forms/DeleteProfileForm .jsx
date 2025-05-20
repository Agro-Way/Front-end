import { useState, React } from 'react';

// Componente que renderiza o formul[ario]
const DeleteProfileForm  = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// lógica de envio
		setShowModal(false);
	};

  return (
    <form onSubmit={(e) => e.preventDefault()}>
		{/* Botão de envio */}
        <p className="text-gray-100 py-4 rounded">Tem certeza que deseja eliminar o perfil?</p>
		<div className="flex justify-between gap-2">
			<button type="submit"
				className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
			>
				Eliminar Perfil
			</button>
		</div>
	</form>
  );
};
export default DeleteProfileForm;
