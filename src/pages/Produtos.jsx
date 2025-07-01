// src/pages/Produtos.jsx
import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CategorySlider from "../components/CategorySlider";
import produtos from "../components/DadosProdutos";
import { formatarKz } from "../utils/Format";
import { useCarrinho } from "../contexts/CarrinhoContext"; // IMPORTANTE

function Produtos() {
  useDocumentTitle("Produtos | Agroway");

  const [termoBusca, setTermoBusca] = useState("");
  const { adicionarAoCarrinho } = useCarrinho(); // Hook do contexto

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <>
      <Header />

      <section className="sub-heading">
        <h1>Nossos Produtos</h1>
      </section>

      <CategorySlider />

      <section className="product">
        <h1 className="heading">Nossos <span>Produtos</span></h1>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            id="search-box"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            placeholder="Busque aqui..."
            required
          />
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>

        <div className="box-container">
          {produtosFiltrados.length === 0 ? (
            <p className="none">Nenhum produto disponível no momento.</p>
          ) : (
            produtosFiltrados.map((produto) => (
              <div className="box" key={produto.id}>
                <div className="image">
                  <img src={produto.imagem} alt={produto.nome} />
                </div>
                <div className="content">
                  <h3>{produto.nome}</h3>
                  <div className="price">{formatarKz(produto.preco)}</div>
                  <div className="icons">
                    <button
                      type="button"
                      className="fas fa-shopping-cart"
                      onClick={() => adicionarAoCarrinho(produto)}
                      title="Adicionar ao Carrinho"
                    />
                    <Link
                      to={`/produtos/detalhes/${produto.id}`}
                      className="fas fa-eye"
                      title="Ver Detalhes"
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Produtos;
