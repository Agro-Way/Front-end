// src/pages/NotFound.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  useDocumentTitle("Página não encontrada | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />
      
      {/*error 404*/}
      <section className="error pt-8 d-flex">
        <div className="content">
            <h1>404</h1>
            <p>Página não encontrada ou inexistente!</p>
            <div className="d-flex">
                <Link to="/" className="btn">Voltar Para Home</Link>
            </div>
        </div>
      </section>
      
      {/*footer*/}
      <Footer />
    </>
  );
}

export default NotFound;