// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  // Cria um estado chamado "menuAtivo", inicialmente false (menu fechado)
  // "setMenuAtivo" é a função que muda o estado
  const [menuAtivo, setMenuAtivo] = useState(false);

  // Função que alterna o estado do menu (abre e fecha)
  const toggleMenu = () => {
    setMenuAtivo((prev) => !prev); // Inverte o valor atual
  };

  // useEffect roda uma vez quando o componente é montado (dependência vazia [])
  useEffect(() => {
    // Função que fecha o menu ao rolar a página
    const handleScroll = () => {
      setMenuAtivo(false); // Fecha o menu
    };

    // Adiciona o ouvinte de evento para "scroll" na janela
    window.addEventListener("scroll", handleScroll);

    // Função de limpeza (executa quando o componente for desmontado)
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove o ouvinte
    };
  }, []); // Executa apenas uma vez (como componentDidMount)

  return (
    <header className="header">
      <Link to="/" className="logo">Agroway</Link>

      <nav className={`navbar ${menuAtivo ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <div className="icons">
        <Link to="#"
          className="fas fa-user"
          id="login-btn"
        />
        <Link to="/carrinho"
          className="fas fa-shopping-cart"
          id="cart-btn"
        ><span className="count">0</span></Link>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className={`fas ${menuAtivo ? "fa-times" : "fa-bars"}`}
          id="menu"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
}

export default Header;