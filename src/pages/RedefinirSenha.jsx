// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/login.css";
//import LoginStyle from '@/assets/css/LogintStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { senhaValidation } from "../validations/senhaValidation";
import { toast, ToastContainer } from "react-toastify";

function RedefinirSenha() {
  useDocumentTitle("Redefinir senha | Agroway");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(senhaValidation),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("Senha redefinida com sucesso!");
      reset(); // Limpa o formulário
    } catch (error) {
      toast.error("Erro ao redefinir senha. Tente novamente.");
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
          <h3>Redefina Sua Senha</h3>
          <input
            type="password"
            name="senha"
            {...register("senha")}
            placeholder="Digite sua nova senha"
            className="box"
          />
          <p className="error-msg">{errors.senha?.message}</p>
          <input
            type="password"
            name="confirmarSenha"
            {...register("confirmarSenha")}
            placeholder="Confirme sua nova senha"
            className="box"
          />
          <p className="error-msg">{errors.confirmarSenha?.message}</p>

          <input type="submit" name="entrar" value="Redefinir Senha" className="btn" />
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

export default RedefinirSenha;
