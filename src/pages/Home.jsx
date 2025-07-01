// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeVideo from "../assets/video/Agroway-home.mp4";
import sobreImg from "../assets/img/sobre.jpg";
import produtos from "../components/DadosProdutos"
import blogs from "../components/DadosBlogs"
import { formatarKz } from "../utils/Format";
import { useCarrinho } from "../contexts/CarrinhoContext"; // IMPORTANTE

function Home() {
  useDocumentTitle("Agroway");
  const { adicionarAoCarrinho } = useCarrinho(); // Hook do contexto

  return (
    <>
      {/*header*/}
      <Header />

      {/*home*/}
      <section className="home">
        <div className="content">
          <h1>Agroway Limited</h1>
          <p>DÊ O IMPULSO QUE O SEU NEGÓCIO PRECISA</p>
          <Link to="/cadastrar" className="btn">Iniciar Agora</Link>
        </div>

        <div className="video-container">
          <video src={homeVideo} id="video" loop autoPlay muted type="video/mp4" />
        </div>
      </section>

      {/*about*/}
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={sobreImg} alt="Sobre nós" title="Sobre nós" />
          </div>
          <div className="content">
            <h3>Sobre <span>Agroway</span></h3>
            <p>
              Nossa plataforma conecta agricultores, transportadoras e clientes finais, 
              facilitando a comercialização e logística de produtos do agronegócio. Buscamos tornar o processo 
              mais eficiente, transparente e acessível, promovendo o desenvolvimento do setor rural. Com tecnologia 
              simples e intuitiva, aproximamos quem produz, quem transporta e quem consome, fortalecendo toda a cadeia 
              produtiva.
            </p>
            <Link to="/sobre" className="btn">Leia Mais</Link>
          </div>
        </div>
      </section>

      {/*banner*/}
      <section className="banner">
        <ul className="grid">
          <li className="small small-1" id="small-1" />
          <li className="large" id="large-1" />
          <li className="large" id="large-2" />
          <li className="small" id="small-2" />
        </ul>
      </section>

      {/*serviços*/}
      <section className="services">
        <h1 className="heading">Nossos <span>Serviços</span></h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-truck" />
            <h3>Transporte</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-bug-slash" />
            <h3>Insecticida</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-apple-whole" />
            <h3>Frutas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-leaf" />
            <h3>Vegetais</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-carrot" />
            <h3>Legumes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-apple-whole" />
            <h3>Frutas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </section>

      {/*produtos*/}
      <section className="product">
        <h1 className="heading">Nossos <span>Produtos</span></h1>

        <div className="box-container">
          {produtos.length === 0 ? (
            <p className="none"> Nenhum produto disponível no momento.</p>
          ) 
          : (
            produtos.slice(0, 3).map((produto) => {
              return (
                <div className="box" key={produto.id}>
                  <div className="image">
                    <img src={produto.imagem} alt={produto.nome} />
                  </div>
                  <div className="content">
                    <h3>{produto.nome}</h3>
                    <div className="price">{formatarKz(produto.preco)}</div>
                    <div />
                    <Link to="/carrinho" className="fas fa-shopping-cart" onClick={() => adicionarAoCarrinho(produto)} />
                    <Link to={`/produtos/detalhes/${produto.id}`} className="fas fa-eye" />
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className="d-flex pt-8">
        <Link to="/produtos" className="btn">Ver Mais Produtos <i className="fas fa-arrow-right" /></Link>
        </div>
      </section>

      {/*parallax*/}
      <section className="parallax">
        <div className="content">
          <h3>DÊ O IMPULSO QUE O SEU NEGÓCIO PRECISA</h3>
          <p>
            Investir em produtos de qualidade pode trazer retornos significativos para o seu negócio, aumentando seus lucros e atraindo novos clientes.
          </p>
          <Link to="/cadastrar" className="btn">Cadastrar</Link>
        </div>
      </section>

      {/*blogs*/}
      <section className="blog">
        <h1 className="heading">Blog & <span>Artigos</span></h1>

        <div className="box-container">
          {blogs.length === 0 ? (
            <p className="none"> Nenhum post disponível no momento.</p>
          ) 
          : (
            blogs.slice(0, 3).map((blog) => {
              return (
                <div className="box" key={blog.id}>
                  <div className="image">
                    <img src={blog.imagem} alt={blog.titulo} />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <Link to="#"><i className="fas fa-user" /> Por {blog.autor}</Link>
                    </div>
                    <h3>{blog.titulo}</h3>
                    <p>
                      {blog.desc}
                    </p>
                    <Link to="/blog/post/" className="btn">Leia Mais</Link>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </section>
      
      {/*footer*/}
      <Footer />
    </>
  );
}

export default Home;