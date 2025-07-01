import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "../contexts/ModalContext"; //Importa o contexto do modal
import {getUser, logout} from "@/utils/auth";
import { toast, ToastContainer } from "react-toastify";

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

  const navigate = useNavigate();

  //pegando os dados do usuário
	const user = getUser()

  // Escolher ícone baseado no tipo de usuário
  const renderUserIcon = () => {
    if (!user) {
      return (
        <Link to="/login" className="fas fa-sign-in-alt" id="login-btn" title="Entrar" />
      );
    }

    switch (user.role) {
      case "PRODUTOR":
        return (
          <Link to="/dashboard" className="fas fa-cogs" title="Painel Admin" />
        );
      case "CONDUTOR":
        return (
          <Link to="/dashboard-motorista" className="fas fa-cogs" title="Painel Admin" />
        );
      case "USUARIO":
        return (
          <Link to="/" className="fas fa-right-from-bracket" title="Estou no site, clica em mim para sair"
          onClick={() => {
            logout();
            toast.success("Sessão encerrada com sucesso.");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }}
          />
        );
      default:
        return (
          <Link to="/login" className="fas fa-sign-in-alt" title="Entrar" />
        );
    }
  };

  return (
    <>
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
        {user?.name && <button type="button" className="toast-tam">{user.name}</button>}
        {renderUserIcon()}
        {/*<button type="button">{user?.name}</button>*/}
        {/*<Link to="/login" className="fas fa-user" id="login-btn" />*/}
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

    <ToastContainer toastClassName="toast-tam" position="top-right" autoClose={3000}/>
    </>
  );
}

export default Header;
