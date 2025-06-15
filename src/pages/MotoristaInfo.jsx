// src/pages/MotoristaInfo.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/signup.css";
//import SignStyle from '@/assets/css/SignStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroVeiculoValidation } from "../validations/cadastroVeiculoValidation";
import { toast, ToastContainer } from "react-toastify";

function MotoristaInfo() {
  useDocumentTitle("Cadastrar Veículo | Agroway");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroVeiculoValidation),
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
          <h3>Vamos, Faça O Cadastro Do Seu Veículo</h3>

          <div className="inputBox">
            <input
              type="text"
              {...register("marcaCarro")}
              name="marcaCarro"
              placeholder="Marca do seu carro"
              className="box"
            />
            <p className="error-msg">{errors.marcaCarro?.message}</p>
          </div>
          <div className="inputBox">
            <input
              type="modeloCarro"
              {...register("modeloCarro")}
              name="modeloCarro"
              placeholder="O modelo do seu carro"
              className="box"
            />
            <p className="error-msg">{errors.modeloCarro?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="placaCarro"
              {...register("placaCarro")}
              placeholder="A placa(matruícula) do carro | Exemplo: AA-12-34 ou LD-12-34-AA"
              className="box"
            />
            <p className="error-msg">{errors.placaCarro?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="file"
              {...register("imagemCarro")}
              name="imagemCarro"
              className="box"
            />
            <p className="error-msg">{errors.imagemCarro?.message}</p>
          </div>

          <button type="submit" className="btn">
            Cadastrar Veículo
          </button>
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

export default MotoristaInfo;
