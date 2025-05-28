// src/pages/Carrinho.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './../assets/css/checkout.css'

function Checkout() {
  useDocumentTitle("Checkout | Agroway");

  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      {/*Header*/}
      <Header />

      {/*Checkout*/}
      <section className="checkout pt-8">
          
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Checkout;