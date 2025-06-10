import { useState, React } from 'react'
import Modal from '../../components/common/Modal'

// Componente que renderiza o formul[ario]
const DeleteUserForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    // lógica de envio
    setShowModal(false)
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      {/* Botão de envio */}
      <p className="text-gray-100 py-4 rounded">
        Tem certeza que deseja eliminar o motorista?
      </p>
      <div className="flex justify-between gap-2">
        <button
          type="submit"
          className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Eliminar Motorista
        </button>
      </div>
    </form>
  )
}
export default DeleteUserForm
