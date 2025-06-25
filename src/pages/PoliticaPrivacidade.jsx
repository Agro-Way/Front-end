// src/pages/PoliticaPrivacidade.jsx
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./../assets/css/politicas.css";

function PoliticaPrivacidade() {
  useDocumentTitle("Políticas e Privacidade | Agroway");

  return (
    <>
      {/*Header*/}
      <Header />

        <section className="termos-header">
            <h1>Política de Privacidade</h1>
            <p>Como protegemos seus dados no AgroWay</p>
        </section>

        <section className="politicas">
            <div>
                <h2>1. Introdução</h2>
                <p>Esta Política de Privacidade descreve como o Agroway coleta, usa, armazena e protege as 
                informações dos usuários. Ao utilizar nossos serviços, você concorda com esta política.</p>
            </div>

            <div>
                <h2>2. Dados Coletados</h2>
                <p>Coletamos dados para oferecer uma melhor experiência e suporte técnico, incluindo:</p>
                <ul>
                    <li>Informações de cadastro: nome, e-mail, telefone, CPF/CNPJ;</li>
                    <li>Dados de propriedade rural e produção;</li>
                    <li>Informações de acesso, como IP, localização e tipo de dispositivo.</li>
                </ul>
            </div>

            <div>
                <h2>3. Finalidade do Uso</h2>
                <p>Utilizamos os dados coletados para:</p>
                <ul>
                    <li>Gerenciar e operar funcionalidades da plataforma;</li>
                    <li>Enviar notificações e alertas agrícolas personalizados;</li>
                    <li>Oferecer suporte técnico e melhorar nossos serviços;</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
            </div>

            <div>
                <h2>4. Compartilhamento de Dados</h2>
                <p>Seus dados não são vendidos. Podemos compartilhá-los apenas com:</p>
                <ul>
                    <li>Parceiros autorizados para análise ou suporte técnico;</li>
                    <li>Autoridades legais, quando exigido por lei.</li>
                </ul>
            </div>

            <div>
                <h2>5. Segurança</h2>
                <p>Adotamos medidas de segurança técnicas e organizacionais para proteger suas informações, 
                incluindo criptografia, autenticação e backups regulares.</p>
            </div>

            <div>
                <h2>6. Cookies</h2>
                <p>Utilizamos cookies para melhorar a navegação e personalizar a experiência do usuário. 
                Você pode configurar seu navegador para recusar cookies.</p>
            </div>

            <div>
                <h2>7. Direitos do Usuário</h2>
                <p>Você pode solicitar a qualquer momento:</p>
                <ul>
                    <li>Acesso aos seus dados;</li>
                    <li>Correção ou exclusão de informações;</li>
                    <li>Revogação do consentimento de uso.</li>
                </ul>
            </div>

            <div>
                <h2>8. Alterações na Política</h2>
                <p>Esta política poderá ser atualizada. Recomendamos a revisão periódica. As alterações entrarão em
                vigor a partir da publicação nesta página.</p>
            </div>

            <div>
                <h2>9. Contato</h2>
                <p>Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:privacidade@agroway.com">privacidade@agroway.com</a> ou
                acesse o formulário de contato no final da página <Link to="/sobre">Sobre</Link>.</p>
            </div>
        </section>

      {/*footer*/}
      <Footer />
    </>
  );
}

export default PoliticaPrivacidade;
