import * as yup from "yup";
import { telefoneAngolaRegex } from "./regex";

export const contatoValidation = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório."),
  
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("O e-mail é obrigatório."),

  telefone: yup
    .string()
    .matches(telefoneAngolaRegex, "Use o formato: +244 923 456 789.")
    .required("O telefone é obrigatório."),

  assunto: yup
    .string()
    .required("O assunto é obrigatório."),

  mensagem: yup
    .string()
    .min(10, "A mensagem deve ter no mínimo 10 caracteres.")
    .required("A mensagem é obrigatória."),
});
