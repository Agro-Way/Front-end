// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
        <div className="box-container">
        	<div className="box">
          		<h3>Encontra-nos aqui</h3>
            	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod aliqua.</p>
	            <div className="share">
	              <a href="https://web.facebook.com/" arial-label="Facebook" target="_blank" className="fab fa-facebook" rel="noreferrer"></a>
	              <a href="https://www.twitter.com/" arial-label="Twitter" target="_blank" className="fab fa-twitter" rel="noreferrer"></a>
	              <a href="https://www.instagram.com/" arial-label="Instagram" target="_blank" className="fab fa-instagram" rel="noreferrer"></a>
	              <a href="https://www.linkedin.com/" arial-label="Linkedin" target="_blank" className="fab fa-linkedin" rel="noreferrer"></a>
	            </div>
        	</div>

	        <div className="box">
	            <h3>Links Rápidos</h3>
	            <Link to="/" className="links"> Home</Link>
	            <Link to="/sobre" className="links"> Sobre</Link>
	            <Link to="/blog" className="links"> Blog</Link>
	            <Link to="/produtos" className="links"> Produtos</Link>
	            <Link to="/contato" className="links"> Contato</Link>
	        </div>

			<div className="box">
	            <h3>Outros Links </h3>
	            <Link to="termos-condicoes" className="links"> Termos e Condições</Link>
	            <Link to="/politicas-privacidade" className="links"> Política e Privacidade</Link>
	        </div>

	        <div className="box">
	            <h3>Contatos</h3>
	            <a href="tel:+244 999999998" className="links"> +244 999999998</a>
	            <a href="tel:+244 999999997" className="links"> +244 999999997</a>
	            <a href="mailto:agroway@gmail.com" className="links"> agroway@gmail.com</a>
	            <a href="mailto:agroway2@gmail.com" className="links"> agroway2@gmail.com</a>
	        </div>
     	</div>

        <div className="credit">&copy; Copyright Agroway 2025 - Criado por <span>Mundo da Tecnologia</span> | Todos os direitos reservados!</div>
    </footer>
  );
}

export default Footer;