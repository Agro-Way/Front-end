import { useState, useEffect, React } from "react";

// Componente que renderiza o formul[ario]
const EditProductForm = ({ product }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "", // Nome do produto
    preco: "", // Preço
    qtd: "", // Quantidade em estoque
    categoria: "", // Categoria do produto
    descricao: "", // Descrição
    imagem: null, // Imagem (arquivo)
  });

  // Quando o componente for carregado OU quando o produto mudar
  useEffect(() => {
    if (product) {
      // Preenche o formulário com os dados do produto recebido
      setFormData({
        nome: product.name || "",
        preco: product.price || "",
        qtd: product.stock || "",
        categoria: product.category || "",
        descricao: product.description || "",
        imagem: null, // Imagem precisa ser selecionada manualmente
      });
    }
  }, [product]);

  // Atualiza os dados conforme o usuário digita ou seleciona um arquivo
  const handleChange = (e) => {
    const { id, value, files } = e.target;

    // Atualiza o campo correspondente com o valor digitado
    // Se for um input de arquivo (como imagem), pega o primeiro arquivo
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados atualizados:", formData);
    // lógica de envio
    setShowModal(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
      {/* Linha com dois inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
			value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="preco"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Preço
          </label>
          <input
            type="number"
            id="preco"
			value={formData.preco}
            onChange={handleChange}
            placeholder="Digite o preço do produto"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Select em outra linha */}
      <div className="mb-6">
        <label
          htmlFor="qtd"
          className="block text-sm font-medium text-gray-100 mb-1"
        >
          Quantidade
        </label>
        <input
          type="number"
          id="qtd"
		  value={formData.qtd}
          onChange={handleChange}
          placeholder="Digite a quantidade do produto"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Select em outra linha */}
      <div className="mb-6">
        <label
          htmlFor="categoria"
          className="block text-sm font-medium text-gray-100 mb-1"
        >
          Categoria
        </label>
        <select
          value={formData.categoria}
          onChange={handleChange}
          required
          id="categoria"
          className="w-full border border-gray-300  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" selected disabled>
            Selecione uma categoria
          </option>
          <option value="Frutas" className="text-gray-900">
            Frutas
          </option>
          <option value="Frutos" className="text-gray-900">
            Frutos
          </option>
          <option value="Legumes" className="text-gray-900">
            Legumes
          </option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-100 mb-1"
        >
          Descrição do Produto
        </label>
        <textarea
          name="descricao"
          id="descricao"
          value={formData.descricao}
          onChange={handleChange}
          className="w-full border border-gray-300 overflow-y-auto resize-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          cols="10"
          rows="2"
          placeholder="Sua descrição..."
          required
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="imagem"
          className="block text-sm font-medium text-gray-100 mb-1"
        >
          Imagem do Produto
        </label>
        <input
          type="file"
          id="imagem"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Botão de envio */}
      <div className="flex justify-between gap-2">
        <button
          type="reset"
          className="w-full cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
        >
          Limpar
        </button>
        <button
          type="submit"
          className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Editar Produto
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
