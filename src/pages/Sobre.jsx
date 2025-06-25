// src/pages/Sobre.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import sobreImg from '../assets/img/sobre2.jpg'
import sobreFocus1 from '../assets/img/focus-1.jpg'
import sobreFocus2 from '../assets/img/focus-2.jpg'
import sobreFocus3 from '../assets/img/focus-3.jpg'
import contactImg from "../assets/img/contact.png";
//import './../assets/css/sobre.css';
// import './../assets/css/contato.css'
import AboutStyle from '@/assets/css/AboutStyle'
import ContactStyle from '@/assets/css/ContactStyle'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contatoValidation } from '../validations/contatoValidation'
import { toast, ToastContainer } from 'react-toastify'

function Sobre() {
  useDocumentTitle('Sobre | Agroway')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(contatoValidation)
  })

  const onSubmit = (data) => {
    try {
      console.log(data)
      toast.success('Mensagem enviada com sucesso!')
      reset() // Limpa o formulário
    } catch (error) {
      toast.error('Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <>
      {/*Header*/}
      <Header />

      {/*sub-heading*/}
      <section className="sub-heading">
        <h1>Sobre Nós</h1>
      </section>

      {/*about*/}
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={sobreImg} alt="Sobre nós" title="Sobre nós" />
          </div>
          <div className="content">
            <h3>
              Seja Bem-Vindo A <span>Agroway</span>
            </h3>
            <p>
              Nossa plataforma conecta agricultores, transportadoras e clientes finais, 
              facilitando a comercialização e logística de produtos do agronegócio. Buscamos tornar o processo 
              mais eficiente, transparente e acessível, promovendo o desenvolvimento do setor rural. Com tecnologia 
              simples e intuitiva, aproximamos quem produz, quem transporta e quem consome, fortalecendo toda a cadeia 
              produtiva.
            </p>
          </div>
        </div>
      </section>

      {/*section-about*/}
      <AboutStyle className="section-about">
        <div className="content">
          <h3>IMPULSIONE SEU NEGÓCIO NA AGROWAY</h3>
          <p>
            Plataforma de qualidade significativa para o seu negócio, conectando
            produtores, motoristas e clientes.
          </p>
          <Link to="/cadastrar" className="btn">
            Cadastrar
          </Link>
        </div>
      </AboutStyle>

      {/*focus*/}
      <AboutStyle className="focus">
        <h3 className="heading">
          Nossas <span>Prioridades</span>
        </h3>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={sobreFocus1} alt="Prioridade 1: Clientes" />
              <div className="share">
                <Link
                  href="tel:+244 999999999"
                  className="fas fa-phone"
                  title="Ligar Agora"
                />
                <Link
                  href="https://api.whatsapp.com/send/?phone=244999999999&text=Oi"
                  target="_blank"
                  className="fab fa-whatsapp"
                  title="Enviar mensagem via Whatsapp"
                />
                <Link href="#" className="fab fa-instagram" title="Ver Instagram" />
              </div>
            </div>
            <div className="content">
              <h3>Clientes</h3>
              <h5>Agroway</h5>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={sobreFocus2} alt="Prioridade 2: Motoristas" />
              <div className="share">
                <Link
                  href="tel:+244 999999999"
                  className="fas fa-phone"
                  title="Ligar Agora"
                />
                <Link
                  href="https://api.whatsapp.com/send/?phone=244999999999&text=Oi"
                  target="_blank"
                  className="fab fa-whatsapp"
                  title="Enviar mensagem via Whatsapp"
                />
                <Link href="#" className="fab fa-instagram" title="Ver Instagram" />
              </div>
            </div>
            <div className="content">
              <h3>Motoristas</h3>
              <h5>Agroway</h5>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={sobreFocus3} alt="Prioridade 3: Produtores" />
              <div className="share">
                <Link
                  href="tel:+244 999999999"
                  className="fas fa-phone"
                  title="Ligar Agora"
                />
                <Link
                  href="https://api.whatsapp.com/send/?phone=244999999999&text=Oi"
                  target="_blank"
                  className="fab fa-whatsapp"
                  title="Enviar mensagem via Whatsapp"
                />
                <Link href="#" className="fab fa-instagram" title="Ver Instagram" />
              </div>
            </div>
            <div className="content">
              <h3>Produtores</h3>
              <h5>Agroway</h5>
            </div>
          </div>
        </div>
      </AboutStyle>

      {/*infos*/}
      <ContactStyle className="infos">
        <h1 className="heading">
          Nos <span>Contate</span>
        </h1>

        <div className="info-container">
          <div className="info">
            <i className="fas fa-clock" />
            <h3>Hora De Abertura</h3>
            <p>Segunda - Quinta: 08:00 - 16:00</p>
            <p>Sexta-feira: 09:00 - 14:00</p>
          </div>

          <div className="info">
            <i className="fas fa-phone" />
            <h3>Nosso Telefone</h3>
            <p>+244 999999999</p>
          </div>

          <div className="info">
            <i className="fas fa-map-marker-alt" />
            <h3>Nosso Endereço</h3>
            <address>Angola, Luanda</address>
          </div>
        </div>
      </ContactStyle>

      {/*contato*/}
      <ContactStyle className="contact">
        <h1 className="heading">
          Preencha O <span>Formulário</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={contactImg} alt="Nos Contacte" />
          </div>

          <form action="" className="form"  onSubmit={handleSubmit(onSubmit)}>
            <div className="inputBox">
              <div>
                <input type="text" name="nome" {...register("nome")} placeholder="Seu nome" />
                <p className="error-msg">{errors.nome?.message}</p>
              </div>
              <div>
                <input type="email" name="email" {...register("email")} placeholder="exemplo@gmail.com" />
                <p className="error-msg">{errors.email?.message}</p>
              </div>
            </div>

            <div className="inputBox">
              <div>
                <input type="tel" name="tel" {...register("telefone")} placeholder="Seu telefone" />
                <p className="error-msg">{errors.telefone?.message}</p>
              </div>
              <div>
                <input type="text" name="assunto" {...register("assunto")} placeholder="Seu assunto" />
                <p className="error-msg">{errors.assunto?.message}</p>
              </div>
            </div>

            <div className="inputBox">
              <div>
                <textarea {...register("mensagem")}  placeholder="Sua mensagem..." cols="30" rows="10" />
                <p className="error-msg">{errors.mensagem?.message}</p>
              </div>
            </div>

            <button type="submit" className="btn">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </ContactStyle>

      {/* Container de Notificações */}
      <ToastContainer toastClassName="toast-tam" position="top-right" autoClose={4000} />

      {/*footer*/}
      <Footer />
    </>
  )
}

export default Sobre
