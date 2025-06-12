// src/pages/DetalhesProdutos.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../assets/css/detalhes.css";

function DetalhesProdutos() {
  useDocumentTitle("Detalhes Do Produto | Agroway");

  const precoRef = useRef(null); // Referência ao <span id="preco">
  const [quantidade, setQuantidade] = useState(1); // Quantidade do produto
  const [total, setTotal] = useState("0 KZ"); // Total formatado em moeda

  useEffect(() => {
    if (precoRef.current) {
      // Pega texto do span, remove pontos
      const precoTexto = precoRef.current.textContent
      .replace(/[^\d,]/g, "")  // Remove símbolos e espaços (ex: "AOA ")
      .replace(/\./g, "")      // Remove pontos de milhar
      .replace(",", ".");      // Troca vírgula por ponto decimal;

      const preco = Number.parseFloat(precoTexto); // Converte para número

      const totalNumerico = preco * quantidade; // Calcula total

      // Formata para moeda (Kwanza - AOA)
      const totalFormatado = new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: 2,
      }).format(totalNumerico);

      setTotal(totalFormatado); // Atualiza o estado com o total
    }
    }, [quantidade]); // Atualiza sempre que a quantidade muda


  return (
    <>
      {/*Header*/}
      <Header />

      {/*Carrinho*/}
      <section className="detalhes-produtos pt-8">
        <form action="" method="POST" className="form">
          <div className="produto-imagem">
            <img src="/images/product-1.jpg" alt="Produto 1" />
          </div>
          <div className="produto-detalhes">
            <h1>25 Kilos De Grãos</h1>
            {/*<p className="price"> <span id="preco"  ref={precoRef}>280.000</span></p>*/}
            <p className="price">
              <span id="preco" ref={precoRef}>
                {new Intl.NumberFormat('pt-AO', {
                  style: 'currency',
                  currency: 'AOA',
                }).format(280000)}
              </span>
            </p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" name="quantidade" id="quantidade" Value="{quantidade}" min="1" onChange={(e) => setQuantidade(Number.parseInt(e.target.value))} required/>

            <div className="total">
              Total a pagar: <span id="total">{total}</span>
            </div>

            <Link to="/checkout" className="btn">Comprar Agora</Link>
          </div>
        </form>
        
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default DetalhesProdutos;
