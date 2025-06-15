import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../assets/css/pedido-confirmado.css";

function PedidoConfirmado() {
  useDocumentTitle("Pedido Confirmado | Agroway");

  return (
    <>
      {/*header*/}
      <Header />

      <section className="pedido-confirmado pt-8">
        <div className="container">
            <h1>✅ Pedido Confirmado!</h1>
            <p className="p-size">Obrigado por comprar conosco. Seu pedido foi realizado com sucesso.</p>
            <p className="p-size">Anote o código do seu pedido para acompanhar a entrega:</p>
            <div className="codigo">AGRO-20250614-00123</div>
            <Link to="/consultar-pedido/?codigo=AGRO-20250614-00123" class="btn">Acompanhar Pedido</Link>
        </div>
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default PedidoConfirmado;
