import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroValidation } from "../validations/cadastroValidation";
import { toast, ToastContainer } from "react-toastify";

function Signup() {
  useDocumentTitle("Cadastrar-se | Agroway");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroValidation),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.nome,
        email: data.email,
        telefone: data.telefone,
        role: Number.parseInt(data.funcao),
        password: data.senha,
      };

      const response = await axios.post(
        "https://agro-way-api.onrender.com/api/auth/signup",
        payload
      );

      toast.success("Cadastro feito com sucesso!");
      reset();

      // Redireciona para login após breve delay
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else {
        toast.error("Erro ao fazer cadastro. Tente novamente.");
      }
    }
  };

  return (
    <>
      <section className="signup">
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="form-signup"
        >
          <h3>Vamos, Faça O Seu Cadastro</h3>

          <div className="inputBox">
            <input
              type="text"
              {...register("nome")}
              placeholder="Seu nome"
              className="box"
            />
            <p className="error-msg">{errors.nome?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="email"
              {...register("email")}
              placeholder="exemplo@gmail.com"
              className="box"
            />
            <p className="error-msg">{errors.email?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="tel"
              {...register("telefone")}
              placeholder="Seu telefone"
              className="box"
            />
            <p className="error-msg">{errors.telefone?.message}</p>
          </div>

          <div className="inputBox">
            <select
              {...register("funcao")}
              className="box"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione sua função
              </option>
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
              placeholder="Sua palavra-pass"
              className="box"
            />
            <p className="error-msg">{errors.senha?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("confirmarSenha")}
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

      <ToastContainer
        toastClassName="toast-tam"
        position="top-right"
        autoClose={4000}
      />
    </>
  );
}

export default Signup;
