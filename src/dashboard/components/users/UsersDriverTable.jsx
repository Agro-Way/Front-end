import { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit, Search, Trash2 } from 'lucide-react'
import Modal from '../common/Modal'
import EditDriverForm from '../forms/EditDriverForm'
import DeleteDriverForm from '../forms/DeleteDriverForm'

const userData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Ativo' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Ativo' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inativo' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Ativo' },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    status: 'Ativo',
  },
]

const UsersDriverTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(userData)

  const handleSearch = e => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = userData.filter(
      user =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    )
    setFilteredUsers(filtered)
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
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl mt-18 p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Motoristas</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar motoristas..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
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
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map(user => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{user.email}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Ativo'
                        ? 'bg-green-800 text-green-100'
                        : 'bg-red-800 text-red-100'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    type="button"
                    className="text-indigo-400 cursor-pointer hover:text-indigo-300 mr-2"
                    onClick={() =>
                      openModal({
                        title: 'Editar Motorista',
                        content: <EditDriverForm />,
                      })
                    }
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    type="button"
                    className="text-red-400 cursor-pointer hover:text-red-300"
                    onClick={() =>
                      openModal({
                        title: 'Eliminar Motorista',
                        content: <DeleteDriverForm />,
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
export default UsersDriverTable
