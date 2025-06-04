// src/pages/RecuperarConta.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import './../assets/css/login.css';
//import LoginStyle from '@/assets/css/LogintStyle';

function RecuperarConta() {
  useDocumentTitle("Recuperar Conta | Agroway");

  return (
    <>
      {/*login*/}
      <section className="login">
         <h1 className="title">Recuperar Conta</h1>

        <form action="" method="POST" className="login-form" autoComplete="on">
            <h3>Faça A Recuperação Da Sua Conta</h3>
            <input type="email" name="email" placeholder="exemplo@gmail.com" className="box" required />
            
            <input type="submit" name="codigo" value="Enviar Código De Recuperação" className="btn" />
        </form>
      </section>
    </>
  );
}

export default RecuperarConta;
