import * as yup from "yup";
import { apenasLetras, telefoneAngolaRegex } from "./regex";

export const checkoutValidation = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório").matches(apenasLetras, "Apenas letras são permitidas"),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  tel: yup.string().required("Telefone é obrigatório").matches(telefoneAngolaRegex, "Use o formato: +244 923 456 789."),
  provincia: yup.string().required("Província é obrigatória").matches(apenasLetras, "Apenas letras são permitidas"),
  municipio: yup.string().required("Município é obrigatório").matches(apenasLetras, "Apenas letras são permitidas"),
  distrito: yup.string().required("Distrito é obrigatório").matches(apenasLetras, "Apenas letras são permitidas"),
  bairro: yup.string().required("Bairro é obrigatório").matches(apenasLetras, "Apenas letras são permitidas"),
  cidade: yup.string().required("Cidade é obrigatória").matches(apenasLetras, "Apenas letras são permitidas"),
  metodoPagamento: yup.string().required("Escolha uma forma de pagamento"),
  comprovativo: yup
  .mixed()
  .test("fileRequired", "Comprovativo é obrigatório", function (value) {
    const { metodoPagamento } = this.parent;
    if (metodoPagamento !== "multicaixaExpress") return true;
    return value instanceof FileList && value.length > 0;
  })
  .test("fileType", "Tipo de arquivo inválido", (value) => {
    if (!value || !(value instanceof FileList) || value.length === 0) return true;
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    return allowedTypes.includes(value[0]?.type);
  }),
  codigoDesconto: yup.string().notRequired(),
  notasAdicionais: yup.string().required("Notas adicionais são obrigatórias").min(20, "Escreva pelo menos 20 caracteres"),
});
