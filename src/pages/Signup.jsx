// src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import sobreFocus3 from "../assets/img/focus-3.jpg";
import "./../assets/css/signup.css";
//import SignStyle from '@/assets/css/SignStyle';
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroValidation } from "../validations/cadastroValidation";
import { toast, ToastContainer } from "react-toastify";

function Signup() {
  useDocumentTitle("Cadastrar-se | Agroway");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroValidation),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("Cadastro feito com sucesso!");
      reset(); // Limpa o formulário
    } catch (error) {
      toast.error("Erro ao fazer cadastro. Tente novamente.");
    }
  };

  return (
    <>
      {/*Signup*/}
      <section className="signup">
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="form-signup"
        >
          <h3>Vamos, Faça O Seu Cadastro</h3>

          <div className="inputBox">
            <input
              type="text"
              {...register("nome")}
              name="nome"
              placeholder="Seu nome"
              className="box"
            />
            <p className="error-msg">{errors.nome?.message}</p>
          </div>
          <div className="inputBox">
            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="exemplo@gmail.com"
              className="box"
            />
            <p className="error-msg">{errors.email?.message}</p>
          </div>

          <div className="inputBox">
            <input type="tel" name="tel" {...register("telefone")} placeholder="Seu telefone" className="box" />
            <p className="error-msg">{errors.telefone?.message}</p>
          </div>

          <div className="inputBox">
            <select id="funcao" {...register("funcao")} name="funcao" className="box" defaultValue="">
              <option value="" disabled>Selecione sua função</option>
              <option value="1">Cliente</option>
              <option value="2">Motorista</option>
              <option value="3">Produtor</option>
            </select>
            <p className="error-msg">{errors.funcao?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("senha")}
              name="senha"
              placeholder="Sua palavra-pass"
              className="box"
            />
            <p className="error-msg">{errors.senha?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("confirmarSenha")}
              name="confirmarSenha"
              placeholder="Confirme sua palavra-pass"
              className="box"
            />
            <p className="error-msg">{errors.confirmarSenha?.message}</p>
          </div>

          <button type="submit" className="btn">
            Cadastrar-se
          </button>
          <p>
            Já tenho uma conta? <Link to="/login">Fazer Login</Link>
          </p>
        </form>
      </section>

      {/* Container de Notificações */}
      <ToastContainer
        toastClassName="toast-tam"
        position="top-right"
        autoClose={4000}
      />
    </>
  );
}

export default Signup;
