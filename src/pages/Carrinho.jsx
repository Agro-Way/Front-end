// src/pages/Carrinho.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../assets/css/carrinho.css';
import { formatarKz } from "../utils/Format";
import { useCarrinho } from '../contexts/CarrinhoContext'; // IMPORTANTE

function Carrinho() {
  useDocumentTitle('Carrinho | Agroway');

  const [provinciaSelecionada, setProvinciaSelecionada] = useState("Bengo");
  const [frete, setFrete] = useState(0);
  const { itensCarrinho, removerDoCarrinho, atualizarQuantidade, limparCarrinho } = useCarrinho();

  const provincias = {
    "Bengo": 780, "Benguela": 800, "Bié": 870, "Cabinda": 950, "Cuando Cubango": 1000,
    "Cuanza Norte": 830, "Cuanza Sul": 840, "Cunene": 920, "Huambo": 850, "Huíla": 900,
    "Luanda": 1000, "Lunda Norte": 1050, "Lunda Sul": 1020, "Malanje": 880,
    "Moxico": 1100, "Namibe": 950, "Uíge": 890, "Zaire": 860
  };

  useEffect(() => {
    setFrete(provincias[provinciaSelecionada] || 0);
  }, [provinciaSelecionada]);

  const subtotal = itensCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return (
    <>
      <Header />

      <section className="carrinhos pt-8">
        <div className="carrinho">
          <h2>Carrinho de Compras</h2>

          {itensCarrinho.length === 0 ? (
            <p className="none">Seu carrinho está vazio.</p>
          ) : (
            <form onSubmit={e => e.preventDefault()}>
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
                  {itensCarrinho.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imagem} alt={item.nome} className="produto-img" />
                      </td>
                      <td>{item.nome}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={item.quantidade}
                          onChange={(e) =>
                            atualizarQuantidade(item.id, e.target.value)
                          }
                        />
                      </td>
                      <td>{formatarKz(item.preco)}</td>
                      <td>{formatarKz(item.preco * item.quantidade)}</td>
                      <td>
                        <button
                          type="button"
                          className="btn remover-btn fas fa-trash"
                          onClick={() => removerDoCarrinho(item.id)}
                          title="Remover"
                        />
                      </td>
                    </tr>
                  ))}
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

              <div className="botoes-finais">
                <Link to="/produtos" className="btn continuar-btn">
                  Continuar Comprando
                </Link>
                <button
                  type="button"
                  className="btn limpar-btn"
                  onClick={limparCarrinho}
                >
                  Limpar Carrinho
                </button>
                <Link to="/checkout" className="btn checkout-btn">
                  Finalizar Compra
                </Link>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Carrinho;
