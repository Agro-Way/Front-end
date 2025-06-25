// src/pages/Carrinho.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './../assets/css/checkout.css'
import { formatarKz } from "../utils/Format";

function Checkout() {
  useDocumentTitle("Checkout | Agroway");

  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      {/*Header*/}
      <Header />

      {/*Checkout*/}
      <section className="checkout pt-8">
        <form action="/pedido-confirmado" method="POST" className="form-checkout" encType="multipart/form-data">
          <h2 className="title">Resumo do Pedido</h2>
          <div className="form-group">
            <div class="product">
              <img src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww" alt="Produto 1"/>
              <div class="product-details">
                <p>Produto 1 - {formatarKz(50)}</p>
              </div>
            </div>
            <div class="product">
              <img src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww" alt="Produto 2"/>
              <div class="product-details">
                <p>Produto 1 - {formatarKz(30)}</p>
              </div>
            </div>
            <p class="total">Total: {formatarKz(80)}</p>
          </div>

          <h2>Informações do Cliente</h2>
          <input type="text" name="nome" className="box" placeholder="Seu nome" required />
          <input type="email" name="email" className="box" placeholder="exemplo@gmail.com" required />
          <input type="tel" name="tel" className="box" placeholder="Seu telefone" required />

          <h2>Endereço de Entrega</h2>
          <select name="provincia" className="box" id="provincia">
            <option disabled selected>-- Selecione sua Província --</option>
            <option value="bengo">Bengo</option>
            <option value="benguela">Benguela</option>
            <option value="bie">Bié</option>
            <option value="cabinda">Cabinda</option>
            <option value="cuando-cubango">Cuando Cubango</option>
            <option value="cuanza-norte">Cuanza Norte</option>
            <option value="cuanza-sul">Cuanza Sul</option>
            <option value="cunene">Cunene</option>
            <option value="huambo">Huambo</option>
            <option value="huila">Huíla</option>
            <option value="luanda">Luanda</option>
            <option value="lunda-norte">Lunda Norte</option>
            <option value="lunda-sul">Lunda Sul</option>
            <option value="malanje">Malanje</option>
            <option value="moxico">Moxico</option>
            <option value="namibe">Namibe</option>
            <option value="uige">Uíge</option>
            <option value="zaire">Zaire</option>
          </select>
          <input type="text" name="municipio" className="box" placeholder="Seu município" required />
          <input type="text" name="distrito" className="box" placeholder="Seu Distrito" required />
          <input type="text" name="bairro" className="box" placeholder="Seu bairro" required />
          <input type="text" name="cidade" className="box" placeholder="Sua cidade" required />

          <h2>Forma de Pagamento <span>(De momento a forma de pagamento disponível é o Multicaixa Express)</span></h2>
          <select name="provincia" className="box" id="provincia">
            <option disabled selected>-- Opções de Pagamento --</option>
            <option value="multicaixaExpress">Multicaixa Express</option>
            <option value="cartao" disabled>Cartão de Crédito</option>
            <option value="visa" disabled>Visa</option>
            <option value="paypal" disabled>Paypal</option>
          </select>
          <input type="text" name="num-cartao" className="box" placeholder="Número do cartão" required />
          <label htmlFor="validade-cartao">Selecione a data de validade do cartão</label>
          <input type="date" name="validade-cartao" id="validade-cartao" className="box" placeholder="Validade do cartão" required />
          <label htmlFor="comprovativo-pagamento">Selecione a imagem do comprovativo do pagamento do Express</label>
          <input type="file" name="comprovativo-pagamento" id="comprovativo-pagamento" className="box" placeholder="Comprovativo do pagamento" required />

          <h2>Outros</h2>
          <input type="number" name="codigo-desconto" className="box" placeholder="Código de Desconto" required />
          <textarea name="notas-adicionais" class="box" cols="30" rows="10" placeholder="Escreva aqui alguma observação..." required />

          <button type="submit" className="btn">Finalizar Pedido</button>
        </form>
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Checkout;