import * as yup from "yup";
import { telefoneAngolaRegex, passwordRegex } from "./regex";

export const cadastroValidation = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório."),
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
  telefone: yup
    .string().required("O telefone é obrigatório.")
    .matches(telefoneAngolaRegex, "Use o formato: +244 923 456 789."),
  password: yup
    .string().required("A senha é obrigatória.")
    .matches(passwordRegex, "A senha deve conter letras e números, mínimo 8 caracteres."),
  confirmPassword: yup
    .string().required("A confirmação da senha é obrigatória.")
    .oneOf([yup.ref("password")], "As senhas não coincidem."),
  role: yup
    .string().required("A função é obrigatória.")
    .oneOf(["USUARIO", "CONDUTOR", "PRODUTOR"], "Selecione uma função válida."),
  status: yup
    .string().required("A função é obrigatória.")
    .oneOf(["ATIVO", "INATIVO", "PENDENTE", "BANIDO"], "Selecione um status válido."),
});
