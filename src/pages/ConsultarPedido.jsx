import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../assets/css/consultar.css'

function ConsultarPedido() {
  useDocumentTitle('Consultar Pedido | Agroway')

  // Cria um estado para controlar se a seção de detalhes deve aparecer ou não
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  // Função chamada ao enviar o formulário e alterna entre mostrar e ocultar  ao enviar o formulário
  const handleSubmit = e => {
    e.preventDefault() // Impede que o formulário recarregue a página
    //setMostrarDetalhes(true) // Atualiza o estado para "true", fazendo com que a seção de detalhes apareça
    setMostrarDetalhes(prev => !prev) // Inverte o valor do estado (true <-> false)
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
      <AnimatePresence>
        {mostrarDetalhes && (
          <motion.section
            className="detalhes-pedido"
            key="detalhes"
            initial={{ opacity: 0, y: 30 }} // Quando aparece
            animate={{ opacity: 1, y: 0 }} // Estado visível
            exit={{ opacity: 0, y: 30 }} // Quando desaparece
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="heading">Detalhes Do <span>Pedido</span></h1>

            <div className="grid">
              <div className="column">
                <div className="image">
                  <img src="/images/product-1.jpg" alt="Produto 1" />
                </div>
                <p><strong>Produto:</strong> Grãos Safra 2025</p>
                <p><strong>Código:</strong> AGRO-20250601</p>
                <p><strong>Quantidade:</strong> 500 sacos</p>
                <p><strong>Data da Compra:</strong> 10/06/2025</p>
              </div>
              <div className="column">
                <h2 className="h2">👨‍🌾 Produtor</h2>
                <p><strong>Nome:</strong> João Benguela</p>
                <p><strong>Propriedade:</strong> Fazenda Benguela</p>
                <p><strong>Telefone:</strong> +244 923 456 789</p>
                <p><strong>E-mail:</strong> joao@benguela.com</p>
              </div>
            </div>

            <div className="section">
              <h2 className="h2">🚚 Transporte</h2>
              <p><strong>Motorista:</strong> Carlos Nzola</p>
              <p><strong>Veículo:</strong> Caminhão - Matrícula LDA1D23</p>
              <p><strong>Telefone:</strong> +244 922 456 789</p>
            </div>

            <div className="grid">
              <div className="column">
                <h2 className="h2">📍 Status da Entrega</h2>
                <p><strong>Status Atual:</strong> Em trânsito</p>
                <p><strong>Data Estimada:</strong> 15/06/2025</p>
                <ul>
                  <li>Produto coletado em 12/06/2025</li>
                  <li>Em rota para destino</li>
                </ul>
              </div>
              <div className="column">
                <h2 className="h2">🗺️ Mapa de Rastreamento</h2>
                <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126137.26589408667!2d13.242900411922488!3d-8.899147207366534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1749892702407!5m2!1spt-BR!2sbr" width="400" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            <div className="button-group">
              <Link to="https://wa.me/5511999991234" target="_blank" className="btn" rel="noreferrer">Falar com Produtor</Link>
              <Link to="https://wa.me/5511988884567" target="_blank" className="btn blue" rel="noreferrer">Falar com Motorista</Link>
              <Link to="#" className="btn gray">Baixar Comprovante</Link>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/*footer*/}
      <Footer />
    </>
  )
}

export default ConsultarPedido
