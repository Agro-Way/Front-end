import { useState, React } from 'react';
import RichText from "../../components/richtext/RichText";

// Componente que renderiza o formul[ario]
const AddProductForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// lógica de envio
		setShowModal(false);
	};

	const [form, setForm] = useState({
		mensagem: ""
	  });
	
	  const handleEditorChange = (content) => {
		setForm((prev) => ({ ...prev, mensagem: content }));
	};

  return (
    <form onSubmit={(e) => e.preventDefault()} enctype="multipart/form-data">
		{/* Linha com dois inputs */}
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-100 mb-1">
                    Nome
                </label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite o nome do produto"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

		    <div>
				<label htmlFor="preco" className="block text-sm font-medium text-gray-100 mb-1">
					Preço
				</label>
				<input
					type="number"
					id="preco"
					placeholder="Digite o preço do produto"
					required
				    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				</div>
		    </div>

			{/* Select em outra linha */}
			<div className="mb-6">
				<label htmlFor="categoria" className="block text-sm font-medium text-gray-100 mb-1">
					Categoria
				</label>
				<select
					required
					id="categoria"
					className="w-full border border-gray-300  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
					<option value="" selected disabled>Selecione uma categoria</option>
					<option value="Frutas" className="text-gray-900">Frutas</option>
					<option value="Frutos" className="text-gray-900">Frutos</option>
					<option value="Legumes" className="text-gray-900">Legumes</option>
				</select>
			</div>

			{/* Editor de texto (Rich Text) */}
			<div className="mb-6">
				<label htmlFor="mensagem" className="block text-sm font-medium text-gray-100 mb-1">
				    Descrição do Produto
				</label>
				<RichText value={form.mensagem} onChange={handleEditorChange} />
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
					Adicionar Produto
				</button>
			</div>
	    </form>
  );
};
export default AddProductForm;
