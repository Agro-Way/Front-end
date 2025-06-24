// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/login.css";
//import LoginStyle from '@/assets/css/LogintStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../validations/loginValidation";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  useDocumentTitle("Login 2 | Agroway");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("Login feito com sucesso!");
      reset(); // Limpa o formulário
    } catch (error) {
      toast.error("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <>
      {/*login*/}
      <section className="login">
        <h1 className="title">Agroway</h1>

        <form
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
          autoComplete="on"
        >
          <h3>Faça o Seu Login</h3>
          <input
            type="email"
            name="email"
            {...register("email")}
            placeholder="exemplo@gmail.com"
            className="box"
          />
          <p className="error-msg">{errors.email?.message}</p>
          <input
            type="password"
            name="senha"
            {...register("senha")}
            placeholder="Sua Palavra-Pass"
            className="box"
          />
          <p className="error-msg">{errors.senha?.message}</p>

          <input type="submit" name="entrar" value="Entrar" className="btn" />
          <p>
            Esqueceu a senha? <Link to="/recuperar-senha">Recuperar senha</Link>
          </p>
          <p>
            Não tenho uma conta? <Link to="/cadastrar">Criar conta</Link>
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

export default Login;
