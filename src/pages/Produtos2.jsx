// src/pages/Produtos.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CategorySlider from "../components/CategorySlider";
import { formatarKz } from "../utils/Format";

function Produtos2() {
  useDocumentTitle("Produtos 2 | Agroway");

  // Estados que guardam:
  // - os produtos da API
  // - o texto da busca
  // - se está carregando os dados
  // - se ocorreu algum erro

  const [produtos, setProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  // Quando o componente carrega, busca os produtos da API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // faz requisição GET
      .then((res) => {
        setProdutos(res.data); // salva os produtos no estado
        setLoading(false); // desativa o "carregando"
      })
      .catch((err) => {
        setErro("Erro ao carregar produtos."); // salva mensagem de erro
        console.error(err); // mostra erro no console
        setLoading(false); // desativa o "carregando"
      });
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.title.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <>
      <Header />

      <section className="sub-heading">
        <h1>Nossos Produtos</h1>
      </section>

      <CategorySlider />

      <section className="product">
        <h1 className="heading">
          Nossos <span>Produtos</span>
        </h1>

        <form
          className="search-form"
          onSubmit={(e) => e.preventDefault()}
        >
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

        {loading ? (
          <p className="none">Carregando produtos...</p>
        ) : erro ? (
          <p className="error">{erro}</p>
        ) : (
          <div className="box-container">
            {produtosFiltrados.length === 0 ? (
              <p className="none"> Nenhum produto encontrado.</p>
            ) : (
              produtosFiltrados.slice(0, 6).map((produto) => (
                <div className="box" key={produto.id}>
                  <div className="image">
                    <img src={produto.image} alt={produto.title} />
                  </div>
                  <div className="content">
                    <h3>{produto.title}</h3>
                    <div className="price">{formatarKz(produto.price)}</div>
                    <Link to="/carrinho" className="fas fa-shopping-cart" />
                    <Link
                      to={`/produtos/detalhes/${produto.id}`}
                      className="fas fa-eye"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      <section>
        <div className="d-flex">
          <nav className="nav-page">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" title="Anterior">
                  <i className="fas fa-chevron-left" />
                </Link>
              </li>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <li className="page-item" key={n}>
                  <Link className="page-link" to="#">
                    {n}
                  </Link>
                </li>
              ))}
              <li className="page-item">
                <Link className="page-link" to="#" title="Próximo">
                  <i className="fas fa-chevron-right" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Produtos2;
