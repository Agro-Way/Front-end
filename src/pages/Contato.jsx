// src/pages/Contato.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactImg from "../assets/img/contact.png";
// import './../assets/css/contato.css'
import ContactStyle from '@/assets/css/ContactStyle';

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
      <ContactStyle className="infos">
        <div className="info-container">
          <div className="info">
            <i className="fas fa-clock" />
            <h3>Hora De Abertura</h3>
            <p>Segunda - Quinta: 08:00 - 16:00</p>
            <p>Sexta-feira: 09:00 - 14:00</p>
          </div>

          <div className="info">
            <i className="fas fa-phone" />
            <h3>Nosso Telefone</h3>
            <p>+244 999999999</p>
          </div>

          <div className="info">
            <i className="fas fa-map-marker-alt" />
            <h3>Nosso Endereço</h3>
            <address>Angola, Luanda</address>
          </div>
        </div>
      </ContactStyle>

      {/*contato*/}
      <ContactStyle className="contact">
        <h1 className="heading">Preencha O <span>Formulário</span></h1>

        <div className="row">
          <div className="image">
            <img src={contactImg} alt="Nos Contacte" />
          </div>

          <form action="" className="form">
            <div className="inputBox">
              <input type="text" name="nome" placeholder="Seu nome" required />
              <input type="text" name="email" placeholder="exemplo@gmail.com" required />
            </div>

            <div className="inputBox">
              <input type="tel" name="tel" placeholder="Seu telefone" required />
              <input type="text" name="assunto" placeholder="Seu assunto" required />
            </div>

            <div className="inputBox">
              <textarea name="msg" placeholder="Sua mensagem..." cols="30" rows="10" required />
            </div>

            <button type="submit" className="btn">Enviar Mensagem</button>
          </form>
        </div>
      </ContactStyle>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Contato;