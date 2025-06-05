// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import './../assets/css/login.css';
//import LoginStyle from '@/assets/css/LogintStyle';

function Login() {
  useDocumentTitle("Login | Agroway");

  return (
    <>
      {/*login*/}
      <section className="login">
         <h1 className="title">Agroway</h1>

        <form action="" method="POST" className="login-form" autoComplete="on">
            <h3>Faça o Seu Login</h3>
            <input type="email" name="email" placeholder="exemplo@gmail.com" className="box" required />
            <input type="password" name="senha" placeholder="Sua Palavra-Pass" className="box" required />
            {/*<div class="remember">
               <input type="checkbox" name="lembrar" id="lembrar" />
               <label for="lembrar">Lembrar de mim</label>
            </div>*/}
            
            <input type="submit" name="entrar" value="Entrar" className="btn" />
            <p>Esqueceu a senha? <Link to="/recuperar-senha">Recuperar senha</Link></p>
            <p>Não tenho uma conta? <Link to="/cadastrar">Criar conta</Link></p>
        </form>
      </section>
    </>
  );
}

export default Login;