// src/pages/TermosCondicoes.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./../assets/css/termos.css";

function TermosCondicoes() {
  useDocumentTitle("Termos e Condições | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

      <section className="termos-header">
        <h1>Termos e Condições de Uso</h1>
        <p>Bem-vindo ao Agroway</p>
      </section>

      <section className="termos">
        <div>
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar ou utilizar o sistema Agroway, você concorda com os presentes Termos e Condições. 
          Se você não concordar, não utilize o sistema.</p>
        </div>

        <div>
          <h2>3. Cadastro do Usuário</h2>
          <p>Para utilizar determinadas funcionalidades, o usuário deverá se cadastrar, fornecendo informações
          corretas e atualizadas. É de responsabilidade do usuário manter seus dados em sigilo.</p>
        </div>

        <div>
          <h2>4. Uso Permitido</h2>
          <p>Você se compromete a utilizar o sistema de forma legal, ética e segura, sem praticar atividades 
          que possam comprometer o funcionamento do sistema ou a segurança de outros usuários.</p>
        </div>

        <div>
          <h2>5. Propriedade Intelectual</h2>
          <p>Todos os conteúdos, marcas e códigos presentes no AgroSystem são de propriedade exclusiva da 
          empresa desenvolvedora e estão protegidos por leis de direitos autorais.</p>
        </div>

        <div>
          <h2>6. Modificações</h2>
          <p>Os Termos de Uso podem ser atualizados a qualquer momento. É responsabilidade do usuário verificar
          regularmente as alterações.</p>
        </div>

        <div>
          <h2>7. Limitação de Responsabilidade</h2>
          <p>O Agroway não se responsabiliza por danos diretos ou indiretos resultantes do uso ou da 
          mpossibilidade de uso do sistema, somente em casos manutenção do sistema.</p>
        </div>

        <div>
          <h2>8. Contato</h2>
          <p>Para dúvidas ou suporte, entre em contato pelo e-mail: <a href="mailto:suporte@agroway.com.ao">suporte@agroway.com,ao</a> ou
          acesse o formulário de contato no final da página <Link to="/sobre">Sobre</Link>.</p>
        </div>
      </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default TermosCondicoes;
