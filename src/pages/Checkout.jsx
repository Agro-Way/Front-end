// src/pages/Checkout.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './../assets/css/checkout.css'
import { formatarKz } from "../utils/Format";
import { useCarrinho } from "../contexts/CarrinhoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {checkoutValidation} from "./../validations/checkoutValidation";
import { toast, ToastContainer } from "react-toastify"

function Checkout() {
  useDocumentTitle("Checkout | Agroway");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(checkoutValidation)
  });

  const metodoPagamento = watch("metodoPagamento");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)

    toast.success("Pedido feito com sucesso!");
    reset();

    // Redireciona após um pequeno delay
    setTimeout(() => {
      navigate("/pedido-confirmado")
    }, 3000);
  }

  const { itensCarrinho } = useCarrinho(); //pegar produtos do carrinho
  
  const total = itensCarrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <>
      {/*Header*/}
      <Header />

      {/*Checkout*/}
      <section className="checkout pt-8">
        <form method="POST" className="form-checkout" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <h2 className="title">Resumo do Pedido</h2>
          <div className="form-group">
            {itensCarrinho.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.imagem} alt={item.nome} />
                <div className="product-details">
                  <p>{item.nome} — {item.quantidade}x {formatarKz(item.preco)} = {formatarKz(item.preco * item.quantidade)}</p>
                </div>
              </div>
            ))}
            <p className="total">Total: {formatarKz(total)}</p>
          </div>

          <h2>Informações do Cliente</h2>
          <input type="text" {...register("nome")} name="nome" className="box" placeholder="Seu nome" />
          <p className="error-msg">{errors.nome?.message}</p>
          <input type="email" {...register("email")} name="email" className="box" placeholder="exemplo@gmail.com" />
          <p className="error-msg">{errors.email?.message}</p>
          <input type="tel" name="tel" {...register("tel")} className="box" placeholder="Seu telefone" />
          <p className="error-msg">{errors.tel?.message}</p>

          <h2>Endereço de Entrega</h2>
          <select name="provincia" {...register("provincia")} className="box" id="provincia">
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
          <p className="error-msg">{errors.provincia?.message}</p>

          <input type="text" {...register("municipio")} name="municipio" className="box" placeholder="Seu município"/>
          <p className="error-msg">{errors.municipio?.message}</p>
          <input type="text" {...register("distrito")} name="distrito" className="box" placeholder="Seu Distrito" />
          <p className="error-msg">{errors.distrito?.message}</p>
          <input type="text" {...register("bairro")} name="bairro" className="box" placeholder="Seu bairro" />
          <p className="error-msg">{errors.bairro?.message}</p>
          <input type="text" {...register("cidade")} name="cidade" className="box" placeholder="Sua cidade" />
          <p className="error-msg">{errors.cidade?.message}</p>

          <h2>Forma de Pagamento <span>(De momento a forma de pagamento disponível é o Multicaixa Express)</span></h2>
          <select name="metodo-pagamento" {...register("metodoPagamento")}  className="box" id="metodo-pagamento">
            <option value="" disabled selected>-- Opções de Pagamento --</option>
            <option value="multicaixaExpress">Multicaixa Express</option>
            <option value="cartao" disabled>Cartão de Crédito</option>
            <option value="visa" disabled>Visa</option>
            <option value="paypal" disabled>Paypal</option>
          </select>
          <p className="error-msg">{errors.metodoPagamento?.message}</p>

          {/* Renderização condicional dos campos */}
          {metodoPagamento !== "multicaixaExpress" && metodoPagamento !== "" && (
            <>
              <input type="text" name="num-cartao" className="box" placeholder="Número do cartão" />
              <label htmlFor="validade-cartao">Selecione a data de validade do cartão</label>
              <input type="date" name="validade-cartao" id="validade-cartao" className="box" placeholder="Validade do cartão" />
            </>
          )}

          {metodoPagamento === "multicaixaExpress" && (
            <>
              <label htmlFor="comprovativo-pagamento">Selecione a imagem do comprovativo do pagamento do Express</label>
              <input type="file" {...register("comprovativo")} id="comprovativo-pagamento" className="box" accept=".jpg, .jpeg, .png, .pdf" />
              <p className="error-msg">{errors.comprovativo?.message}</p>
            </>
          )}

          <h2>Outros</h2>
          <input type="number" {...register("codigoDesconto")} name="codigo-desconto" className="box" placeholder="Código de Desconto" />
          <textarea {...register("notasAdicionais")} className="box" cols="30" rows="10" placeholder="Escreva aqui alguma observação..." />
          <p className="error-msg">{errors.notasAdicionais?.message}</p>

          <button type="submit" className="btn">Finalizar Pedido</button>
        </form>
      </section>

      {/*footer*/}
      <Footer />

      <ToastContainer toastClassName="toast-tam" position="top-right" autoClose={5000}/>
    </>
  );
}

export default Checkout;