// src/pages/Produtos.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Produtos() {
  useDocumentTitle("Produtos | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section class="sub-heading">
        <h1>Nossos Produtos</h1>
      </section>
      
      {/*produtos*/}
      <section className="product">
        <h1 className="heading">Nossos <span>Produtos</span></h1>

        <form action="" className="search-form">
          <input type="search" name="busca" id="search-box" placeholder="Busque aqui..." required/>
          <button type="submit" className="fas fa-search" title="Pesquisar"></button>
        </form>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/product-1.jpg" alt="Produto 1" />
            </div>
            <div className="content">
              <h3>Grãos</h3>
              <div className="price">100Kz</div>
              <div></div>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <Link to="#" className="fas fa-eye"></Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-2.jpg" alt="Produto 2" />
            </div>
            <div className="content">
              <h3>Melancia</h3>
              <div className="price">100Kz</div>
              <div></div>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <Link to="#" className="fas fa-eye"></Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-3.jpg" alt="Produto 3" />
            </div>
            <div className="content">
              <h3>Folhas</h3>
              <div className="price">100Kz</div>
              <div></div>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <Link to="#" className="fas fa-eye"></Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-4.jpg" alt="Produto 4" />
            </div>
            <div className="content">
              <h3>Ananás</h3>
              <div className="price">100Kz</div>
              <div></div>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <Link to="#" className="fas fa-eye"></Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-2.jpg" alt="Produto 2" />
            </div>
            <div className="content">
              <h3>Melancia 2</h3>
              <div className="price">100Kz</div>
              <div></div>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <Link to="#" className="fas fa-eye"></Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/product-3.jpg" alt="Produto 3" />
            </div>
            <div className="content">
              <h3>Folhas 2</h3>
              <div className="price">100Kz</div>
              <div></div>
              <Link to="#" className="fas fa-shopping-cart"></Link>
              <Link to="#" className="fas fa-eye"></Link>
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
                    <a class="page-link" href="#" title="Anterior">
                      <i class="fas fa-chevron-left"></i>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" title="Próximo">
                      <i class="fas fa-chevron-right"></i>
                    </a>
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

export default Produtos;