import * as yup from "yup";

export const loginValidation2  = yup.object().shape({
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
  senha: yup.string().required("A senha é obrigatória.").min(6, "A senha deve ter no mínimo 8 caracteres."),
});
