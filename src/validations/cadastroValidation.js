import * as yup from "yup";
import { telefoneAngolaRegex, passwordRegex } from "./regex";

export const cadastroValidation = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório."),
  email: yup.string().email("E-mail inválido.").required("O e-mail é obrigatório."),
  telefone: yup
    .string()
    .matches(telefoneAngolaRegex, "Use o formato: +244 923 456 789.")
    .required("O telefone é obrigatório."),
  senha: yup
    .string()
    .matches(passwordRegex, "A senha deve conter letras e números, mínimo 8 caracteres.")
    .required("A senha é obrigatória."),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "As senhas não coincidem.")
    .required("A confirmação da senha é obrigatória."),
  funcao: yup
    .string()
    .oneOf(["1", "2", "3"], "Selecione uma função válida.")
    .required("A função é obrigatória."),
});
