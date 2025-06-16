import * as yup from "yup";
import { emailRegex } from "./regex";

export const emailValidation = yup.object().shape({
  /*email: yup.string().email("E-mail inválido.").required("O e-mail é obrigatório."),*/
  email: yup.string().matches(emailRegex, "E-mail inválido. Exemplo: exemplo@gmail.com")
  .required("O e-mail é obrigatório."),
});
