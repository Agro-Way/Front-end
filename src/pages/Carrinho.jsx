// src/pages/Carrinho.jsx
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../assets/css/carrinho.css'

function Carrinho() {
  useDocumentTitle('Carrinho | Agroway')

  const [quantidade, setQuantidade] = useState(1)

  return (
    <>
      {/*Header*/}
      <Header />

      {/*Carrinho*/}
      <section className="carrinhos pt-8">
        <div className="carrinho">
          <h2>Carrinho de Compras</h2>
          <form action="/atualizar-carrinho" method="POST">
            <table>
              <thead>
                <tr>
                  <th>Imagem</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Preço Unitário</th>
                  <th>Subtotal</th>
                  <th colSpan={2}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                      alt="Limão"
                      className="produto-img"
                    />
                  </td>
                  <td>Limão</td>
                  <td>
                    <input
                      type="number"
                      name="quantidade"
                      min="1"
                      value={quantidade}
                      onChange={e => setQuantidade(Number(e.target.value))}
                    />
                  </td>
                  <td>100 Kz</td>
                  <td>100 Kz</td>
                  <td>
                    <button
                      type="submit"
                      className="btn atualizar-btn fas fa-refresh"
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      formAction="/remover-item"
                      className="btn remover-btn fas fa-trash"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                      alt="Banana"
                      className="produto-img"
                    />
                  </td>
                  <td>Banana</td>
                  <td>
                    <input type="number" name="quantidade" Value="1" min="1" />
                  </td>
                  <td>200 Kz</td>
                  <td>200 Kz</td>
                  <td>
                    <button
                      type="submit"
                      className="btn atualizar-btn fas fa-refresh"
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      formAction="/remover-item"
                      className="btn remover-btn fas fa-trash"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="total">Total: 300 Kz</div>

            <div className="botoes-finais">
              <Link to="/produtos">
                <button type="button" className="btn continuar-btn">
                  Continuar Comprando
                </button>
              </Link>
              <button
                type="submit"
                formAction="/limpar-carrinho"
                className="btn limpar-btn"
              >
                Limpar Carrinho
              </button>
              <Link to="/checkout">
                <button type="button" className="btn checkout-btn">
                  Finalizar Compra
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/*footer*/}
      <Footer />
    </>
  )
}

export default Carrinho
