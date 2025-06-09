import { motion } from 'framer-motion'
import { Edit, Search, Trash2, Info, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Modal from '../../components/common/Modal'
import EditProductForm from '../../components/forms/EditProductForm'
import DeleteProductForm from '../../components/forms/DeleteProductForm'

// Declara uma constante chamada PRODUCT_DATA que armazena uma lista (array) de objetos.
const PRODUCT_DATA = [
  // Cada objeto dentro do array representa um produto com suas propriedades:
  {
    id: 1,
    name: 'Manga',
    category: 'Frutas',
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: 'Tomate',
    category: 'Frutos',
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: 'Cenoura',
    category: 'Legumes',
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: 'Couve',
    category: 'Vegetais',
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: 'Ginguba',
    category: 'Outros',
    price: 79.99,
    stock: 78,
    sales: 720,
  },
] // Fecha o array de produtos

const ProductsTable = () => {
  // Declara uma variável de estado chamada `searchTerm` e uma função `setSearchTerm` para atualizá-la.
  // Inicialmente, `searchTerm` é uma string vazia ("").
  const [searchTerm, setSearchTerm] = useState('')
  // Declara uma variável de estado chamada `filteredProducts` e uma função `setFilteredProducts`.
  // Inicialmente, ela é preenchida com todos os produtos de `PRODUCT_DATA`.
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA)

  // Função chamada sempre que o usuário digitar algo no campo de busca (input).
  const handleSearch = e => {
    // Captura o texto digitado e converte para letras minúsculas.
    // Isso ajuda a fazer comparações sem considerar maiúsculas/minúsculas.
    const term = e.target.value.toLowerCase()

    // Atualiza o estado `searchTerm` com o novo valor digitado.
    setSearchTerm(term)

    // Cria um novo array filtrado com os produtos cujo nome OU categoria incluam o texto digitado.
    const filtered = PRODUCT_DATA.filter(
      product =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    )

    // Atualiza o estado `filteredProducts` com os produtos filtrados.
    setFilteredProducts(filtered)
  }

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
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Lista de Produtos
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="bg-gray-700 w-full text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
            required
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Categoria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Priço
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Estoque
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Vendas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>

          {/*Corpo da tabela que recebe uma linha horizontal entre os itens usando classes utilitárias do Tailwind.*/}
          <tbody className="divide-y divide-gray-700">
            {/*Mapeia cada produto do array `filteredProducts` para criar uma linha da tabela (<tr>).*/}
            {filteredProducts.map(product => (
              // Cada linha da tabela é animada com Framer Motion: aparece com opacidade 0 e anima até 1.
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    type="button"
                    className="text-indigo-400  cursor-pointer hover:text-indigo-300 mr-2"
                    onClick={() =>
                      openModal({
                        title: 'Editar Produto',
                        content: (
                          <EditProductForm />
                        ),
                      })
                    }
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    type="button"
                    className="text-red-400  cursor-pointer hover:text-red-300"
                    onClick={() =>
                      openModal({
                        title: 'Eliminar Produto',
                        content: (
                          <DeleteProductForm />
                        ),
                      })
                    }
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
              

        <Modal isOpen={!!modalData} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">{modalData?.title}</h2>
          {modalData?.content}
        </Modal>
      </div>
    </motion.div>
  )
}
export default ProductsTable
