// src/pages/Blog.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Blog() {
  useDocumentTitle("Blog | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section class="sub-heading">
        <h1>Nosso Blog</h1>
      </section>

      {/*categorias*/}
      {/*<section>
        <div class="category">
          <div class="swiper category-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide">
                <a href="#">Notícias</a>
              </div>
              <div class="swiper-slide slide">
                    <a href="#">Desporto</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Sociedade</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Música</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Ciência</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Tecnologia</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Cultura</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Saúde</a>
              </div>
              <div class="swiper-slide slide">
                <a href="#">Entretenimento</a>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/*blogs*/}
      <section className="blog">
        <h1 className="heading">Nossos <span>Posts</span></h1>

        <form action="" className="search-form">
          <input type="search" name="busca" id="search-box" placeholder="Busque aqui..." required/>
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>

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

      {/*paginação*/}
      <section>
        <div class="d-flex">
          <nav class="nav-page">
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" to="#" title="Anterior">
                  <i class="fas fa-chevron-left" />
                </Link>
              </li>
              <li class="page-item"><Link class="page-link" to="#">1</Link></li>
              <li class="page-item"><Link class="page-link" to="#">2</Link></li>
              <li class="page-item"><Link class="page-link" to="#">3</Link></li>
              <li class="page-item"><Link class="page-link" to="#">4</Link></li>
              <li class="page-item"><Link class="page-link" to="#">5</Link></li>
              <li class="page-item"><Link class="page-link" to="#">6</Link></li>
              <li class="page-item">
                <Link class="page-link" to="#" title="Próximo">
                  <i class="fas fa-chevron-right" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Blog;