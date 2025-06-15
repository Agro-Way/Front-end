export const telefoneAngolaRegex = /^\+244 \d{3} \d{3} \d{3}$/;

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

/**
 * Faz validação do formato novo |
 * Formato atual (novo) – desde 2016: AA-12-34, AA são duas letras (referente à província), 12 são dois dígitos (série), 34 são dois dígitos (número sequencial).
*/
export const placaAtualAngolaRegex = /^[A-Z]{2}-\d{2}-\d{2}$/;

/**
 * Faz validação do formato antigo e novo
 * Formato atual (novo) – desde 2016: AB-12-34, AB: letras (província), 12: dígitos (série), 34: dígitos (número sequencial) |
 * Formato antigo: LD-12-34-AA. LD: letras (Luanda), 12: dígitos, 34: dígitos, AA: letras (sufixo)
*/
export const placaAngolaRegex = /^([A-Z]{2}-\d{2}-\d{2}|[A-Z]{2}-\d{2}-\d{2}-[A-Z]{2})$/;

/**
 * Aceita apenas números (sem espaços, letras ou símbolos)
 */
export const apenasNumerosRegex = /^\d+$/;
