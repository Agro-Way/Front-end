// src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import sobreFocus3 from "../assets/img/focus-3.jpg";
import './../assets/css/signup.css';
//import LoginStyle from '@/assets/css/SignStyle';

function Signup() {
  useDocumentTitle("Cadastrar-se | Agroway");

  return (
    <>
      {/*Signup*/}
      <section className="signup.">
      </section>
    </>
  );
}

export default Signup;