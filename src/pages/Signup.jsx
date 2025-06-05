// src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import sobreFocus3 from "../assets/img/focus-3.jpg";
import './../assets/css/signup.css';
//import SignStyle from '@/assets/css/SignStyle';

function Signup() {
  useDocumentTitle("Cadastrar-se | Agroway");

  return (
    <>
      {/*Signup*/}
      <section className="signup">
        <form action="" className="form-signup">
          <h3>Vamos, Faça O Seu Cadastro</h3>

          <div className="inputBox">
            <input type="text" name="nome" placeholder="Seu nome"  className="box" required />
            <input type="email" name="email" placeholder="exemplo@gmail.com"  className="box" required />
          </div>

          <div className="inputBox">
            <input type="tel" name="tel" placeholder="Seu telefone"  className="box" required />
            <select id="funcao" name="funcao" className="box">
              <option disabled selected>Selecione sua função</option>
              <option value="1">Cliente</option>
              <option value="2">Motorista</option>
              <option value="3">Produtor</option>
            </select>
          </div>

          <div className="inputBox">
            <input type="tel" name="password" placeholder="Sua palavra-pass"  className="box" required />
            <input type="text" name="password-confirma" placeholder="Confirme sua palavra-pass"  className="box" required />
          </div>

          <button type="submit" className="btn">Cadastrar-se</button>
          <p>Já tenho uma conta? <Link to="/login">Fazer Login</Link></p>
        </form>
      </section>
    </>
  );
}

export default Signup;