import * as yup from "yup";
import { telefoneAngolaRegex, passwordRegex } from "./regex";

export const cadastroValidation = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório."),
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
  telefone: yup
    .string().required("O telefone é obrigatório.")
    .matches(telefoneAngolaRegex, "Use o formato: +244 923 456 789."),
  senha: yup
    .string().required("A senha é obrigatória.")
    .matches(passwordRegex, "A senha deve conter letras e números, mínimo 8 caracteres."),
  confirmarSenha: yup
    .string().required("A confirmação da senha é obrigatória.")
    .oneOf([yup.ref("senha")], "As senhas não coincidem."),
  funcao: yup
    .string().required("A função é obrigatória.")
    .oneOf(["1", "2", "3"], "Selecione uma função válida."),
});
