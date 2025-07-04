import axios from "axios";

/**
 * Serviço centralizado para armazenar o caminho base da API e reutilizá-lo
 * nas páginas/componentes para fazer chamadas HTTP.
 */

const api = axios.create({
    baseURL: "https://agro-way-api.onrender.com",
    //timeout: 10,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;