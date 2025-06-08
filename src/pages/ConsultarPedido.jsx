import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import contactImg from '../assets/img/contact.png'
import './../assets/css/consultar.css'

function ConsultarPedido() {
  useDocumentTitle('Consultar Pedido | Agroway')

  // Cria um estado para controlar se a seção de detalhes deve aparecer ou não
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  // Função chamada ao enviar o formulário
  const handleSubmit = e => {
    e.preventDefault() // Impede que o formulário recarregue a página
    setMostrarDetalhes(true) // Atualiza o estado para "true", fazendo com que a seção de detalhes apareça
  }

  return (
    <>
      {/*header*/}
      <Header />

      <section className="sub-heading">
        <h1>Consulte Seu Pedido</h1>
      </section>

      <section className="consultar-pedido">
        <h1 className="heading">
          Verificar <span>Pedido</span>
        </h1>

        <form className="search-form" onSubmit={handleSubmit}>
          <input type="search" name="busca" id="search-box" placeholder="Digite o código do seu produto..." required />
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>
      </section>

      {/* Seção animada de detalhes do pedido */}
      {mostrarDetalhes && (
        <motion.section
          className="detalhes-pedido"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="heading">
            Detalhes Do <span>Pedido</span>
          </h1>
        </motion.section>
      )}

      {/*footer*/}
      <Footer />
    </>
  )
}

export default ConsultarPedido
