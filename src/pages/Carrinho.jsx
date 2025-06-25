// src/pages/Carrinho.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../assets/css/carrinho.css'
import { formatarKz } from "../utils/Format";

function Carrinho() {
  useDocumentTitle('Carrinho | Agroway')

  const [provinciaSelecionada, setProvinciaSelecionada] = useState("Bengo")
  const [frete, setFrete] = useState(0)

  const provincias = {
    "Bengo": 780,
    "Benguela": 800,
    "Bié": 870,
    "Cabinda": 950,
    "Cuando Cubango": 1000,
    "Cuanza Norte": 830,
    "Cuanza Sul": 840,
    "Cunene": 920,
    "Huambo": 850,
    "Huíla": 900,
    "Luanda": 1000,
    "Lunda Norte": 1050,
    "Lunda Sul": 1020,
    "Malanje": 880,
    "Moxico": 1100,
    "Namibe": 950,
    "Uíge": 890,
    "Zaire": 860
  }

  useEffect(() => {
    setFrete(provincias[provinciaSelecionada] || 0)
  }, [provinciaSelecionada])

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Formulário processado sem recarregar a página")
  }

  const subtotal = 100 * 1 + 200 // Apenas um limão e uma banana para exemplo

  return (
    <>
      {/*Header*/}
      <Header />

      {/*Carrinho*/}
      <section className="carrinhos pt-8">
        <div className="carrinho">
          <h2>Carrinho de Compras</h2>
          <form action="" method="POST" onSubmit={handleSubmit}>
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
                      Value="1"
                    />
                  </td>
                  <td>{formatarKz(100)}</td>
                  <td>{formatarKz(100)}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn atualizar-btn fas fa-refresh"
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
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
                  <td>{formatarKz(200)}</td>
                  <td>{formatarKz(200)}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn atualizar-btn fas fa-refresh"
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn remover-btn fas fa-trash"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="frete-provincia">
              <label htmlFor="provincia">Selecione a província para entrega:</label>
              <select
                id="provincia"
                value={provinciaSelecionada}
                onChange={e => setProvinciaSelecionada(e.target.value)}
              >
                {Object.keys(provincias).sort().map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>

            <div className="total">
              Subtotal: {formatarKz(subtotal)}<br />
              Frete ({provinciaSelecionada}): {formatarKz(frete)}<br />
              <strong>Total Final: {formatarKz(subtotal + frete)}</strong>
            </div>

            <div className="botoes-finais" >
              <Link to="/produtos" className="btn continuar-btn">
                Continuar Comprando
              </Link>
              <button
                type="submit"
                formAction="/limpar-carrinho"
                className="btn limpar-btn"
              >
                Limpar Carrinho
              </button>
              <Link to="/checkout" className="btn checkout-btn">
                Finalizar Compra
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
