import React from "react";
import style from "./Login.module.css";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Botao from "../../components/Botao";
import { ReactComponent as Logo } from "../../assets/imagens/LogoAzul.svg";
import { ReactComponent as Patas } from "../../assets/Patas.svg";
import { ReactComponent as Forma3 } from "../../assets/Forma3.svg";

export default function TelaLogin() {
  return (
    <div>
      <Cabecalho />
      <Patas className={style.patas} />
      <div className={style.conteudo}>
        <Logo />
        <p className={style.descricao}>Já tem conta? Faça seu login:</p>
        <form className={style.formulario}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Insira seu email" />
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Insira sua senha" />
          <p className={style.link}>Esqueceu sua senha?</p>
          <Botao>Entrar</Botao>
        </form>
      </div>
      <Forma3 className={style.forma3} />
      <Rodape />
    </div>
  );
}
