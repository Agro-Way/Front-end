import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext"; //Importa o contexto do modal

function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const { openModal } = useModal(); //Usa o hook para abrir o modal

  const toggleMenu = () => {
    setMenuAtivo((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuAtivo(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo">
        Agro<span>way</span>
      </Link>

      <nav className={`navbar ${menuAtivo ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/produtos">Produtos</Link>
        <Link onClick={openModal}>Consultar Pedido</Link> {/*Link substituído */}
      </nav>

      <div className="icons">
        <Link to="/login" className="fas fa-user" id="login-btn" />
        <Link to="/carrinho" className="fas fa-shopping-cart" id="cart-btn">
          <span className="count">0</span>
        </Link>
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
