import * as yup from "yup";

export const loginValidation2  = yup.object().shape({
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido.").oneOf(["eve.holt@reqres.in"], "Use o e-mail de teste fornecido"),
  senha: yup.string().required("A senha é obrigatória.").min(8, "A senha deve ter no mínimo 8 caracteres.").oneOf(["cityslicka"], "Use a senha de teste fornecida"),
});
