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
        role: data.role,
        password: data.password,
        confirmPassword: data.confirmPassword,
        status: data.status,
      };

      const response = await axios.post("/api/auth/signup", payload);

      // Verifica se o status está OK
      if (response.status === 201 || response.status === 200) {
        const msg = response.data?.message || "Cadastro feito com sucesso!";
        toast.success(msg);
        reset();

        // Redireciona após delay
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        
      } else {
        // Trata casos inesperados de sucesso
        toast.warn("Cadastro concluído, mas a resposta foi inesperada.");
        console.warn("Resposta inesperada:", response);
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);

      // Verifica mensagens específicas vindas do backend
      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else if (error.response?.status === 400) {
        toast.error("Erro de validação. Verifique os dados informados.");
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
            <select {...register("role")} className="box" defaultValue="">
              <option value="" disabled>
                Selecione sua função
              </option>
              <option value="USUARIO">Cliente</option>
              <option value="CONDUTOR">Motorista</option>
              <option value="PRODUTOR">Produtor</option>
            </select>
            <p className="error-msg">{errors.role?.message}</p>
          </div>

          <div className="inputBox">
            <select {...register("status")} className="box" defaultValue="">
              <option value="" disabled>
                Selecione seu status
              </option>
              <option value="ATIVO">Ativo</option>
              <option value="INATIVO">Inativo</option>
              <option value="PENDENTE">Pendente</option>
              <option value="BANIDO">Banido</option>
            </select>
            <p className="error-msg">{errors.status?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("password")}
              placeholder="Sua senha"
              className="box"
            />
            <p className="error-msg">{errors.password?.message}</p>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirme sua senha"
              className="box"
            />
            <p className="error-msg">{errors.confirmPassword?.message}</p>
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
        autoClose={5000}
      />
    </>
  );
}

export default Signup;
