import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { formatarKz } from "../utils/Format";
import produtos from "../components/DadosProdutos";
import { useCarrinho } from "../contexts/CarrinhoContext";
import "./../assets/css/detalhes.css";

function DetalhesProdutos() {
  useDocumentTitle("Detalhes Do Produto | Agroway");

  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useCarrinho();
  const produto = produtos.find(p => p.id === Number.parseInt(id));

  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(0); // agora um número

  useEffect(() => {
    if (produto) {
      setTotal(produto.preco * quantidade);
    }
  }, [quantidade, produto]);

  if (!produto) {
    return (
      <>
        <Header />
        <section className="detalhes-produtos pt-8">
          <p className="none">Produto não encontrado.</p>
        </section>
        <Footer />
      </>
    );
  }

  const handleAdicionar = () => {
    adicionarAoCarrinho({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: quantidade,
    });

    // Redireciona após adicionar
    navigate("/carrinho");
  };

  return (
    <>
      <Header />

      <section className="detalhes-produtos pt-8">
        <form method="POST" className="form">
          <div className="produto-imagem">
            <img src={produto.imagem} alt={produto.nome} />
          </div>
          <div className="produto-detalhes">
            <h1>{produto.nome}</h1>

            <p className="price">
              <span id="preco">
                {formatarKz(produto.preco)}
              </span>
            </p>

            <p className="desc">
              {produto.desc}
            </p>

            <label htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              name="quantidade"
              id="quantidade"
              value={quantidade}
              min="1"
              onChange={(e) => {
                const valor = Number.parseInt(e.target.value);
                setQuantidade(Number.isNaN(valor) ? 1 : valor);
              }}
              required
            />

            <div className="total">
              Total a pagar: <span id="total">{formatarKz(Number.isNaN(total) ? 0 : total)}</span>
            </div>

            <button type="button" onClick={handleAdicionar} className="btn">Adicionar ao Carrinho</button>
            {/*<Link to="/carrinho" className="btn">Adicionar ao Carrinho</Link>*/}
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default DetalhesProdutos;
