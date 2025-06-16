import * as yup from "yup";
import { passwordRegex } from "./regex";

export const senhaValidation = yup.object().shape({
  senha: yup
    .string().required("A senha é obrigatória.")
    .matches(passwordRegex, "A senha deve conter letras e números, mínimo 8 caracteres."),
  confirmarSenha: yup
    .string().required("A confirmação da senha é obrigatória.")
    .oneOf([yup.ref("senha")], "As senhas não coincidem."),
});
