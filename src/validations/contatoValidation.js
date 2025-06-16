import * as yup from "yup";
import { telefoneAngolaRegex } from "./regex";

export const contatoValidation = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório."),
  
  email: yup
    .string().required("O e-mail é obrigatório.")
    .email("E-mail inválido."),

  telefone: yup
    .string().required("O telefone é obrigatório.")
    .matches(telefoneAngolaRegex, "Use o formato: +244 923 456 789."),

  assunto: yup
    .string()
    .required("O assunto é obrigatório."),

  mensagem: yup
    .string().required("A mensagem é obrigatória.")
    .min(10, "A mensagem deve ter no mínimo 10 caracteres."),
});
