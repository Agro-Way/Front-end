// src/utils/Format.js
export const formatarKz = (valor) => {
  return new Intl.NumberFormat("pt-AO", {// Define o idioma/locale: português de Angola
    style: "currency", // Define o estilo como moeda
    currency: "AOA", // Define a moeda como Kwanza
    minimumFractionDigits: 2, // Não mostra casas decimais (ex: Kz 1.000 em vez de Kz 1.000,00)
  }).format(Number(valor)); // Formata o número e retorna como string
};