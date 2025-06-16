import * as yup from "yup";

export const loginValidation  = yup.object().shape({
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
  senha: yup.string().required("A senha é obrigatória.").min(8, "A senha deve ter no mínimo 8 caracteres."),
});