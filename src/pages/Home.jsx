// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeVideo from "../assets/video/Agroway-home.mp4";
import sobreImg from "../assets/img/sobre.jpg";

function Home() {
  useDocumentTitle("Agroway");

  return (
    <>
      {/*header*/}
      <Header />

      {/*home*/}
      <section className="home">
        <div className="content">
          <h1>Agroway Limited</h1>
          <p>DÊ O IMPULSO QUE O SEU NEGÓCIO PRECISA</p>
          <Link to="#" className="btn">Iniciar Agora</Link>
        </div>

        <div className="video-container">
          <video src={homeVideo} id="video" loop autoPlay muted type="video/mp4" />
        </div>
      </section>

      {/*about*/}
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={sobreImg} alt="Sobre nós" title="Sobre nós" />
          </div>
          <div className="content">
            <h3>Sobre <span>Agroway</span></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Esse nesciunt impedit voluptatibus! Ipsam veniam, amet aliquid mollitia odio, 
              aliquam iure error deserunt sint nobis eius vitae, blanditiis ex commodi molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <Link to="/sobre" className="btn">Leia Mais</Link>
          </div>
        </div>
      </section>

      {/*banner*/}
      <section className="banner">
        <ul className="grid">
          <li className="small small-1" id="small-1" />
          <li className="large" id="large-1" />
          <li className="large" id="large-2" />
          <li className="small" id="small-2" />
        </ul>
      </section>

      {/*serviços*/}
      <section className="services">
        <h1 className="heading">Nossos <span>Serviços</span></h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-truck" />
            <h3>Transporte</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-bug-slash" />
            <h3>Insecticida</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-apple-whole" />
            <h3>Frutas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-leaf" />
            <h3>Vegetais</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-carrot" />
            <h3>Legumes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="box">
            <i className="fas fa-apple-whole" />
            <h3>Frutas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </section>

      {/*produtos*/}
      <section className="product">
        <h1 className="heading">Nossos <span>Produtos</span></h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/product-1.jpg" alt="Produto 1" />
            </div>
            <div className="content">
              <h3>Grãos</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="#" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-2.jpg" alt="Produto 2" />
            </div>
            <div className="content">
              <h3>Melancia</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="#" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-3.jpg" alt="Produto 3" />
            </div>
            <div className="content">
              <h3>Folhas</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="#" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-4.jpg" alt="Produto 4" />
            </div>
            <div className="content">
              <h3>Ananás</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="#" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-2.jpg" alt="Produto 2" />
            </div>
            <div className="content">
              <h3>Melancia 2</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="#" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-3.jpg" alt="Produto 3" />
            </div>
            <div className="content">
              <h3>Folhas 2</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="#" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>
        </div>

        <div className="d-flex pt-8">
        <Link to="/produtos" className="btn">Ver Mais Produtos <i className="fas fa-arrow-right" /></Link>
        </div>
      </section>

      {/*parallax*/}
      <section className="parallax">
        <div className="content">
          <h3>DÊ O IMPULSO QUE O SEU NEGÓCIO PRECISA</h3>
          <p>
            Investir em produtos de qualidade pode trazer retornos significativos para o seu negócio, aumentando seus lucros e atraindo novos clientes.
          </p>
          <Link to="#" className="btn">Cadastrar</Link>
        </div>
      </section>

      {/*blogs*/}
      <section className="blog">
        <h1 className="heading">Blog & <span>Artigos</span></h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/blog1.png" alt="Blog 1" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to="#"><i className="fas fa-user" /> Por Admin</Link>
              </div>
              <h3>Vegetais Saudáveis Para Experimentar</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/blog/post/" className="btn">Leia Mais</Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/blog2.png" alt="Blog 2" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to="#"><i className="fas fa-user" /> Por Admin</Link>
              </div>
              <h3>Vegetais Saudáveis Para Experimentar</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/blog/post/" className="btn">Leia Mais</Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/blog3.png" alt="Blog 3" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to="#"><i className="fas fa-user" /> Por Admin</Link>
              </div>
              <h3>Vegetais Saudáveis Para Experimentar</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/blog/post/" className="btn">Leia Mais</Link>
            </div>
          </div>
        </div>
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Home;