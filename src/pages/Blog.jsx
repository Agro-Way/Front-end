// src/pages/Blog.jsx
import React, {useState} from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import blogs from "../components/DadosBlogs"

function Blog() {
  useDocumentTitle("Blog | Agroway");

  const [termoBusca, setTermoBusca] = useState("") // Estado para o texto digitado
  
  // Função de filtragem dos produtos
  const blogsFiltrados = blogs.filter((blog) =>
    blog.titulo.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section className="sub-heading">
        <h1>Nosso Blog</h1>
      </section>

      {/*categorias*/}

      {/*blogs*/}
      <section className="blog">
        <h1 className="heading">Nossos <span>Posts</span></h1>

        <form action="" className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input type="search" name="busca" id="search-box" value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} placeholder="Busque aqui..." required/>
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>

        <div className="box-container">
          {blogsFiltrados.length === 0 ? (
            <p className="none"> Nenhum post disponível no momento.</p>
          ) 
          : (
            blogsFiltrados.map((blog) => {
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
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <li className="page-item" key={n}><Link className="page-link" to="#">{n}</Link ></li>
              ))}
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