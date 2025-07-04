import { useState, React } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // caso queira redirecionar
import { getUser, getToken } from "@/utils/auth";
import api from "@/services/api";

const mockCategorias = [
  {
    id: "cat-1",
    nome: "Frutas",
  },
  {
    id: "cat-2",
    nome: "Legumes",
  },
  {
    id: "cat-3",
    nome: "Verduras",
  },
  {
    id: "cat-4",
    nome: "Cereais",
  },
  {
    id: "cat-5",
    nome: "Raízes",
  },
  {
    id: "cat-6",
    nome: "Grãos",
  },
];

// Componente que renderiza o formulário
const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //pegando os dados do usuário
  const user = getUser();
  const token = getToken();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const file = data.imagem[0];
      const filename = file.name;
      const contentType = file.type;

      // 1. Cadastra produto (sem imagem ainda)
      const productPayload = {
        name: data.nome,
        price: Number.parseFloat(data.preco),
        quantity: Number.parseInt(data.qtd),
        imageUrl: "", // será preenchido após upload
        imageKey: "", // será preenchido após upload
        categoryId: data.categoria, // deve ser o ID real da categoria
        producerId: user?.name, // substitua pelo ID real
      };

      const response = await api.post("/api/products", productPayload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201 || response.status === 200) {
        const productId = response.data?.id;

        // 2. Solicita URL pré-assinada
        const signedUrlRes = await api.post(
          `/api/products/${productId}/upload-url`,
          {
            filename,
            contentType,
          }
        );

        const { uploadUrl, imageUrl, imageKey } = signedUrlRes.data;

        // 3. Faz upload direto para Cloudflare
        await fetch(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": contentType,
          },
          body: file,
        });

        // 4. Atualiza o produto com os dados da imagem
        await api.patch(`/api/products/${productId}`, {
          imageUrl,
          imageKey,
        });

        const msg = response.data?.message || "Produto cadastrado com sucesso!";
        toast.success(msg);
        reset();

        setTimeout(() => {
          // Altere conforme seu fluxo
          navigate("/dashboard/produtos");
        }, 3000);
      } else {
        toast.warn("Produto cadastrado, mas a resposta foi inesperada.");
        console.warn("Resposta inesperada:", response);
      }
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);

      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else if (error.response?.status === 400) {
        toast.error("Erro de validação. Verifique os dados informados.");
      } else {
        toast.error("Erro ao fazer cadastro. Tente novamente.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="w-full"
    >
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
            {...register("nome")}
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
            {...register("preco")}
            placeholder="Digite o preço do produto"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="qtd"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Quantidade
          </label>
          <input
            type="number"
            id="qtd"
            {...register("qtd")}
            placeholder="Digite a quantidade do produto"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Imagem do Produto
          </label>
          <input
            type="file"
            id="img"
            {...register("imagem")}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
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
          required
          id="categoria"
          {...register("categoria")}
          className="w-full border border-gray-300  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled selected>
            Selecione uma categoria
          </option>
          {mockCategorias.map((cat) => (
            <option key={cat.id} value={cat.id} className="text-gray-900">
              {cat.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Textarea para descrição */}
      <div className="mb-6">
        <label
          htmlFor="mensagem"
          className="block text-sm font-medium text-gray-100 mb-1"
        >
          Descrição do Produto
        </label>
        <textarea
          id="mensagem"
          {...register("descricao")}
          placeholder="Digite a descrição do produto"
          rows={5}
          required
          className="w-full resize-none border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
          className="w-full cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Adicionar Produto
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
