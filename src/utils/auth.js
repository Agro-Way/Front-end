// src/utils/auth.js
export function getUser() {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null;
}

export function getToken() {
    return localStorage.getItem("token")
}

export function logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
}