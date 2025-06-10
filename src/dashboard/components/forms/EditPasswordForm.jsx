import { useState, React } from 'react';

// Componente que renderiza o formul[ario]
const EditPasswordForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// lógica de envio
		setShowModal(false);
	};

  return (
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
		{/* Linha com dois inputs */}
		<div className='mb-3'>
			<label
				htmlFor="passAtual"
				className="block text-sm font-medium text-gray-100 mb-1"
			>
				Password Atual
			</label>
			<input
				type="password"
				id="passAtual"
                placeholder="Digite sua palavra-pass atual"
				required
				className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
        </div>

        <div className='mb-3'>
			<label
				htmlFor="passNova"
				className="block text-sm font-medium text-gray-100 mb-1"
			>
				Nova Password
			</label>
			<input
				type="password"
				id="passNova"
                placeholder="Digite sua nova palavra-pass"
				required
				className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
        </div>

        <div className='mb-3'>
			<label
				htmlFor="CpassNova"
				className="block text-sm font-medium text-gray-100 mb-1"
			>
				Confirme sua Nova Password
			</label>
			<input
				type="password"
				id="CpassNova"
                placeholder="Confirme sua nova palavra-pass"
				required
				className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
        </div>

		{/* Botão de envio */}
		<div className="flex justify-between gap-2">
			<button type="submit"
				className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
			>
				Editar Password
			</button>
		</div>
	</form>
  );
};
export default EditPasswordForm;
