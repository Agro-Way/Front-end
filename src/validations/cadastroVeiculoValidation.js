import * as yup from "yup";
import { placaAtualAngolaRegex, placaAngolaRegex } from "./regex";

export const cadastroVeiculoValidation = yup.object().shape({
   marcaCarro: yup.string().required("A marca do carro é obrigatória")
    .min(2, "Marca muito curta"),

  modeloCarro: yup.string().required("O modelo do carro é obrigatório")
    .min(1, "Modelo muito curto"),

  placaCarro: yup.string().required("A placa do carro é obrigatória")
    .matches(placaAtualAngolaRegex, "Placa inválida"),

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
