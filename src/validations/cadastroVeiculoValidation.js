import * as yup from "yup";
import { placaAtualAngolaRegex, placaAngolaRegex } from "./regex";

export const cadastroVeiculoValidation = yup.object().shape({
   marcaCarro: yup.string()
    .min(2, "Marca muito curta")
    .required("A marca do carro é obrigatória"),

  modeloCarro: yup.string()
    .min(1, "Modelo muito curto")
    .required("O modelo do carro é obrigatório"),

  placaCarro: yup.string()
    .matches(placaAtualAngolaRegex, "Placa inválida")
    .required("A placa do carro é obrigatória"),

  imagemCarro: yup
  .mixed()
  .required("Imagem obrigatória")
  .test(
    "fileType",
    "A imagem deve ser JPG ou PNG",
    (value) =>
      value &&
      value.length > 0 &&
      ["image/jpeg", "image/png"].includes(value[0]?.type)
  )
  .test(
    "fileSize",
    "Imagem muito grande (máx. 5MB)",
    (value) =>
      value &&
      value.length > 0 &&
      value[0]?.size <= 5 * 1024 * 1024
  ),

});
