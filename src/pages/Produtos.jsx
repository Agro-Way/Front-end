// src/pages/Produtos.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CategorySlider from "../components/CategorySlider";

function Produtos() {
  useDocumentTitle("Produtos | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section className="sub-heading">
        <h1>Nossos Produtos</h1>
      </section>

      <CategorySlider />
      
      {/*produtos*/}
      <section className="product">
        <h1 className="heading">Nossos <span>Produtos</span></h1>

        <form action="" className="search-form">
          <input type="search" name="busca" id="search-box" placeholder="Busque aqui..." required/>
          <button type="submit" className="fas fa-search" title="Pesquisar" />
        </form>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/product-1.jpg" alt="Produto 1" />
            </div>
            <div className="content">
              <h3>Grãos</h3>
              <div className="price">100Kz</div>
              <div />
              <Link to="/carrinho" className="fas fa-shopping-cart" />
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
              <Link to="/carrinho" className="fas fa-shopping-cart" />
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
              <Link to="/carrinho" className="fas fa-shopping-cart" />
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
              <Link to="/carrinho" className="fas fa-shopping-cart" />
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
              <Link to="/carrinho" className="fas fa-shopping-cart" />
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
              <Link to="/carrinho" className="fas fa-shopping-cart" />
              <Link to="#" className="fas fa-eye" />
            </div>
          </div>
        </div>
      </section>

      {/*paginação*/}
      <section>
        <div className="d-flex">
          <nav className="nav-page">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" title="Anterior">
                  <i className="fas fa-chevron-left" />
                </Link >
              </li>
              <li className="page-item"><Link class="page-link" to="#">1</Link ></li>
              <li className="page-item"><Link class="page-link" to="#">2</Link ></li>
              <li className="page-item"><Link class="page-link" to="#">3</Link ></li>
              <li className="page-item"><Link class="page-link" to="#">4</Link ></li>
              <li className="page-item"><Link class="page-link" to="#">5</Link ></li>
              <li className="page-item"><Link class="page-link"to="#">6</Link ></li>
              <li className="page-item">
                <Link  className="page-link" to="#" title="Próximo">
                  <i className="fas fa-chevron-right" />
                </Link >
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