import * as yup from "yup";

export const loginValidation  = yup.object().shape({
  email: yup.string().email("E-mail inválido.").required("O e-mail é obrigatório."),
  senha: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres.").required("A senha é obrigatória."),
});