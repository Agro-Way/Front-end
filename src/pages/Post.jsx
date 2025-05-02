// src/pages/Post.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import postImg from "../assets/img/post.jpg";
import './../assets/css/post.css';

function Post() {
  useDocumentTitle("Post | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />
      
      {/*post*/}
      <section className="post-read pt-8">
        <h1>Duis aute irure dolor in reprehenderit in voluptate velit</h1>
        <div className="data">
            <span><i className="fas fa-calendar"></i> Postado: 24/04/2025</span>
            <span><i className="fas fa-calendar"></i> Última atualização: 6/05/2025</span>
        </div>
        <div className="post-img">
            <a href={postImg}>
                <img src={postImg} alt="Imagem do Post" title="Imagem do POST"/>
            </a>
        </div>
        <div className="post-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
       </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default Post;