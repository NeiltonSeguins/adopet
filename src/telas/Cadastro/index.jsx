import React from "react";
import style from "./Cadastro.module.css";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Botao from "../../components/Botao";
import { ReactComponent as Logo } from "../../assets/imagens/LogoAzul.svg";
import { ReactComponent as Patas } from "../../assets/Patas.svg";
import { ReactComponent as Forma3 } from "../../assets/Forma3.svg";

export default function TelaCadastro() {
  return (
    <div>
      <Cabecalho />
      <Patas className={style.patas} />
      <div className={style.conteudo}>
        <Logo />
        <p className={style.descricao}>
          Ainda não tem cadastro? <br /> Então, antes de buscar seu melhor
          amigo, precisamos de alguns dados:
        </p>
        <form className={style.formulario}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Escolha seu melhor email"
          />
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Digite seu nome completo" />
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Crie uma senha" />
          <label htmlFor="confirmacao">Confirmação de senha</label>
          <input
            type="password"
            id="confirmacao"
            placeholder="Repita a senha criada acima"
          />
          <Botao>Cadastrar</Botao>
        </form>
      </div>
      <Forma3 className={style.forma3} />
      <Rodape />
    </div>
  );
}
