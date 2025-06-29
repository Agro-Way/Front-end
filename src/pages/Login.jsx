import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./../assets/css/login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation2 } from "../validations/loginValidation2";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  useDocumentTitle("Login | Agroway");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation2),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/auth/login",
        {
          email: data.email,
          password: data.senha, 
        }
      );

      const {user, token} = response.data

      // Armazena os dados no localstorage
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", token)


      toast.success("Login feito com sucesso!");
      reset();

      // Redireciona após um pequeno delay
      setTimeout(() => {
        if (data.role === "PRODUTOR") {
           navigate("/dashboard");
        } else if(data.role === "") {
           navigate("/dashboard-motorista");
        } else {
          navigate("/");
        }
      }, 3000);
      
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else {
        toast.error("E-mail ou senha inválidos.");
      }
    }
  };

  return (
    <>
      <section className="login">
        <h1 className="title">Agroway</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
          autoComplete="on"
        >
          <h3>Faça o Seu Login</h3>

          <input
            type="email"
            {...register("email")}
            placeholder="exemplo@gmail.com"
            className="box"
          />
          <p className="error-msg">{errors.email?.message}</p>

          <input
            type="password"
            {...register("senha")}
            placeholder="Sua Palavra-Passe"
            className="box"
          />
          <p className="error-msg">{errors.senha?.message}</p>

          <input type="submit" value="Entrar" className="btn" />
          <p>
            Esqueceu a senha? <Link to="/recuperar-senha">Recuperar senha</Link>
          </p>
          <p>
            Não tenho uma conta? <Link to="/cadastrar">Criar conta</Link>
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

export default Login;
