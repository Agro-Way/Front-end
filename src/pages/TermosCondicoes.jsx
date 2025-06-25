// src/pages/TermosCondicoes.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function TermosCondicoes() {
  useDocumentTitle("Termos e Condições | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      <section className="termos pt-8">
        
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default TermosCondicoes;
