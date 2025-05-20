// src/pages/Sobre.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sobreImg from "../assets/img/sobre2.jpg";
import sobreFocus1 from "../assets/img/focus-1.jpg";
import sobreFocus2 from "../assets/img/focus-2.jpg";
import sobreFocus3 from "../assets/img/focus-3.jpg";
//import './../assets/css/sobre.css';
import AboutStyle from '@/assets/css/AboutStyle';

function Sobre() {
  useDocumentTitle("Sobre | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section class="sub-heading">
        <h1>Sobre Nós</h1>
      </section>
      
      {/*about*/}
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={sobreImg} alt="Sobre nós" title="Sobre nós" />
          </div>
          <div className="content">
            <h3>Seja Bem-Vindo A <span>Agroway</span></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Esse nesciunt impedit voluptatibus! Ipsam veniam, amet aliquid mollitia odio, 
              aliquam iure error deserunt sint nobis eius vitae, blanditiis ex commodi molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perspiciatis consequatur nostrum culpa rem debitis sequi accusantium pariatur placeat, facere, accusamus ullam. Facilis alias consequuntur natus voluptates. 
              Commodi incidunt asperiores a.
            </p>
          </div>
        </div>
      </section>

      {/*section-about*/}
      <AboutStyle className="section-about">
        <div className="content">
          <h3>IMPULSIONE SEU NEGÓCIO NA AGROWAY</h3>
          <p>
            Plataforma de qualidade significativa para o seu negócio, conectando produtores, motoristas e clientes.
          </p>
          <Link to="#" className="btn">Cadastrar</Link>
        </div>
      </AboutStyle>

      {/*focus*/}
      <AboutStyle className="focus">
        <h3 className="heading">Nossas <span>Prioridades</span></h3>

        <div className="box-container">
          <div class="box">
            <div class="image">
              <img src={sobreFocus1} alt="Prioridade 1: Clientes"/>
              <div class="share">
                <a href="tel:+244 999999999" class="fas fa-phone" title="Ligar Agora"></a>
                <a href="https://api.whatsapp.com/send/?phone=244999999999&text=Oi" target="_blank" class="fab fa-whatsapp" title="Enviar mensagem via Whatsapp"></a>
                <a href="#" class="fab fa-instagram" title="Ver Instagram"></a>
                </div>
            </div>
            <div class="content">
              <h3>Clientes</h3>
              <h5>Agroway</h5>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={sobreFocus2}  alt="Prioridade 2: Motoristas"/>
              <div class="share">
                <a href="tel:+244 999999999" class="fas fa-phone" title="Ligar Agora"></a>
                <a href="https://api.whatsapp.com/send/?phone=244999999999&text=Oi" target="_blank" class="fab fa-whatsapp" title="Enviar mensagem via Whatsapp"></a>
                <a href="#" class="fab fa-instagram" title="Ver Instagram"></a>
                </div>
            </div>
            <div class="content">
              <h3>Motoristas</h3>
              <h5>Agroway</h5>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={sobreFocus3}  alt="Prioridade 3: Produtores"/>
              <div class="share">
                <a href="tel:+244 999999999" class="fas fa-phone" title="Ligar Agora"></a>
                <a href="https://api.whatsapp.com/send/?phone=244999999999&text=Oi" target="_blank" class="fab fa-whatsapp" title="Enviar mensagem via Whatsapp"></a>
                <a href="#" class="fab fa-instagram" title="Ver Instagram"></a>
                </div>
            </div>
            <div class="content">
              <h3>Produtores</h3>
              <h5>Agroway</h5>
            </div>
          </div>
        </div>
      </AboutStyle>
      

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Sobre;