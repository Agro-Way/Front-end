// src/pages/Carrinho.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Carrinho() {
  useDocumentTitle("Carrinho | Agroway");

  return (
    <>
        {/*Header*/}
        <Header />

        {/*Header*/}
        <section className="carrinho">a</section>

        {/*footer*/}
        <Footer />
    </>
  );
}

export default Carrinho;