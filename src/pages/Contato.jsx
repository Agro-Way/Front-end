// src/pages/Contato.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactImg from "../assets/img/contact.png";
import './../assets/css/contato.css'

function Contato() {
  useDocumentTitle("Contato | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section className="sub-heading">
        <h1>Nos Contate</h1>
      </section>

      {/*infos*/}
      <section className="infos">
        <div className="info-container">
          <div className="info">
            <i className="fas fa-clock"></i>
            <h3>Hora De Abertura</h3>
            <p>Segunda - Quinta: 08:00 - 16:00</p>
            <p>Sexta-feira: 09:00 - 14:00</p>
          </div>

          <div className="info">
            <i className="fas fa-phone"></i>
            <h3>Nosso Telefone</h3>
            <p>+244 999999999</p>
          </div>

          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Nosso Endereço</h3>
            <address>Angola, Luanda</address>
          </div>
        </div>
      </section>

      {/*contato*/}
      <section class="contact" id="contact">
        <h1 class="heading">Preencha O <span>Formulário</span></h1>

        <div class="row">
          <div class="image">
            <img src={contactImg} alt="Nos Contacte" />
          </div>

          <form action="" class="form">
            <div class="inputBox">
              <input type="text" name="nome" placeholder="Seu nome" required />
              <input type="text" name="email" placeholder="exemplo@gmail.com" required />
            </div>

            <div class="inputBox">
              <input type="tel" name="tel" placeholder="Seu telefone" required />
              <input type="text" name="assunto" placeholder="Seu assunto" required />
            </div>

            <div class="inputBox">
              <textarea name="msg" placeholder="Sua mensagem..." cols="30" rows="10" required></textarea>
            </div>

            <button type="submit" class="btn">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Contato;