// src/pages/RecuperarSenha.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import './../assets/css/login.css';
//import LoginStyle from '@/assets/css/LogintStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidation } from "../validations/emailValidation";
import { toast, ToastContainer } from "react-toastify";

function RecuperarSenha() {
  useDocumentTitle("Recuperar Senha | Agroway");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailValidation ),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("Código de recuperação enviado com sucesso!");
      reset(); // Limpa o formulário
    } catch (error) {
      toast.error("Erro ao código de recuperação. Tente novamente.");
    }
  };

  return (
    <>
      {/*login*/}
      <section className="login">
         <h1 className="title">Recuperar Senha</h1>

        <form action="/recuperar-senha/codigo-confirmacao/" onSubmit={handleSubmit(onSubmit)}  method="POST" className="login-form" autoComplete="on">
            <h3>Faça A Recuperação Da Sua Senha</h3>
            <input type="email" name="email" {...register("email")} placeholder="exemplo@gmail.com" className="box" />
            <p className="error-msg">{errors.email?.message}</p>
            
            <input type="submit" name="codigo" value="Enviar Código De Recuperação" className="btn" />
        </form>
      </section>

      {/* Container de Notificações */}
      <ToastContainer toastClassName="toast-tam" position="top-right" autoClose={4000} />
    </>
  );
}

export default RecuperarSenha;
