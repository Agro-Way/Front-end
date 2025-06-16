// src/pages/RecuperarSenha.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/login.css";
//import LoginStyle from '@/assets/css/LogintStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { codigoValidation } from "../validations/codigoValidation";
import { toast, ToastContainer } from "react-toastify";

function ConfirmarCodigo() {
  useDocumentTitle("Confirmar Código | Agroway");

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(codigoValidation ),
    });
  
    const onSubmit = (data) => {
      try {
        console.log(data);
        toast.success("Código de recuperação verificado com sucesso!");
        reset(); // Limpa o formulário
      } catch (error) {
        toast.error("Erro ao verificar código de recuperação. Tente novamente.");
      }
    };

  return (
    <>
      {/*login*/}
      <section className="login">
        <h1 className="title">Confirmar Código</h1>

        <form action="/recuperar-senha/redefinir-senha/" onSubmit={handleSubmit(onSubmit)} method="POST" className="login-form" autoComplete="on">
          <h3>Digite o Código Recebido</h3>
          <input
            type="number"
            name="confirmarCodigo"
            {...register("codigo")} 
            placeholder="Digite o código de corfirmação"
            className="box"
          />
          <p className="error-msg">{errors.codigo?.message}</p>

          <input
            type="submit"
            name="codigo"
            value="Confirmar Código De Recuperação"
            className="btn"
          />
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

export default ConfirmarCodigo;
