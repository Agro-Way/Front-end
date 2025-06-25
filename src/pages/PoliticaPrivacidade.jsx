// src/pages/PoliticaPrivacidade.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function PoliticaPrivacidade() {
  useDocumentTitle("Políticas e Privacidade | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      <section className="politicas pt-8">
        
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default PoliticaPrivacidade;
