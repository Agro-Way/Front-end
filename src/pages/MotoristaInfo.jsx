// src/pages/MotoristaInfo.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/signup.css";
//import SignStyle from '@/assets/css/SignStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroVeiculoValidation } from "../validations/cadastroVeiculoValidation";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function MotoristaInfo() {
  useDocumentTitle("Cadastrar Veículo | Agroway");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroVeiculoValidation),
  });

  const onSubmit = async (data) => {
    try {
      const imagem = data.imagemCarro[0];
      const payload = {
        marca: data.marcaCarro,
        modelo: data.modeloCarro,
        placa: data.placaCarro,
        imagem: imagem.name,
      };

      const response = await axios.post("/api/driver/", payload);

      // Verifica se o status está OK
      if (response.status === 201 || response.status === 200) {
        const msg = response.data?.message || "Cadastro do carro feito com sucesso!";
        toast.success(msg);
        reset();

        // Redireciona após delay
        setTimeout(() => {
          navigate("/login");
        }, 3000);

      } else {
        // Trata casos inesperados de sucesso
        toast.warn("Cadastro do carro concluído, mas a resposta foi inesperada.");
        console.warn("Resposta inesperada:", response);
      }

    } catch (error) {
      console.error("Erro ao fazer cadastro do carro:", error);

      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else if(error.response?.status === 400) {
        toast.error("Erro de validação. Verifique os dados informados.");
      } else {
        toast.error("Erro ao fazer cadastro do carro. Tente novamente.");
      }
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
              accept="image/*"
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
