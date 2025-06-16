import * as yup from "yup";
import { apenasNumerosRegex } from "./regex";

export const codigoValidation = yup.object().shape({
  codigo: yup.string() .required("O código é obrigatório.")
  .matches(apenasNumerosRegex, "O código deve ser um número")
  .min(6, "O código deve ter 6 digítos"),
});
