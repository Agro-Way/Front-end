// src/utils/auth.js
export function getUser() {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null;
}

/*export function getUser() {
    try {
    const user = localStorage.getItem("user");
    // Verifica se user existe e não é a string "undefined" ou "null"
    if (!user || user === "undefined" || user === "null") return null;
    return JSON.parse(user);
  } catch (error) {
    console.error("Erro ao fazer parse do user:", error);
    return null;
  }
}*/

export function getToken() {
    return localStorage.getItem("token")
}

export function logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
}