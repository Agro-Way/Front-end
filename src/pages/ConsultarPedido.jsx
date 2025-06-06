// src/pages/ConsultarPedido.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactImg from "../assets/img/contact.png";
import './../assets/css/consultar.css'

function ConsultarPedido() {
  useDocumentTitle("Consultar Pedido | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section className="sub-heading">
        <h1>Consulte Seu Pedido</h1>
      </section>

      {/*consultar pedido*/}
      <section className="consultar-pedido">
        <h1 className="heading">Verificar <span>Pedido</span></h1>

        <form action="" className="search-form">
          <input type="search" name="busca" id="search-box" placeholder="Digite o código do seu produto..." required/>
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>
      </section>
      
      {/*footer*/}
      <Footer />
    </>
  );
}

export default ConsultarPedido;