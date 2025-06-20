// src/pages/Blog.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import blogs from "../components/DadosBlogs"

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

      {/*blogs*/}
      <section className="blog">
        <h1 className="heading">Nossos <span>Posts</span></h1>

        <form action="" className="search-form">
          <input type="search" name="busca" id="search-box" placeholder="Busque aqui..." required/>
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>

        <div className="box-container">
          {blogs.length === 0 ? (
            <p className="none"> Nenhum post disponível no momento.</p>
          ) 
          : (
            blogs.map((blog) => {
              return (
                <div className="box" key={blog.id}>
                  <div className="image">
                    <img src={blog.imagem} alt={blog.titulo} />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <Link to="#"><i className="fas fa-user" /> Por {blog.autor}</Link>
                    </div>
                    <h3>{blog.titulo}</h3>
                    <p>
                      {blog.desc}
                    </p>
                    <Link to="/blog/post/" className="btn">Leia Mais</Link>
                  </div>
                </div>
              )
            })
          )}
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