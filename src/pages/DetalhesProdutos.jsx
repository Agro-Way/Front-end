// src/pages/DetalhesProdutos.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../assets/css/carrinho.css";

function DetalhesProdutos() {
  useDocumentTitle("Detalhes Do Produto | Agroway");

  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      {/*Header*/}
      <Header />

      {/*Carrinho*/}
      <section className="detalhes-produtos pt-8">
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default DetalhesProdutos;
