import React from "react";
import style from "./Inicio.module.css";
import { ReactComponent as Adopet } from "../../assets/icones/Logo.svg";
import { ReactComponent as Ilustracao } from "../../assets/imagens/Ilustracao1.svg";
import { ReactComponent as Forma2 } from "../../assets/Forma2.svg";
import Botao from "../../components/Botao";
import Rodape from "../../components/Rodape";
import Cabecalho from "../../components/Cabecalho";

export default function TelaInicio() {
  return (
    <div className={style.wrapper}>
      <Cabecalho />
      <main className={style.principal}>
        <section className={style.conteudo}>
          <Adopet />
          <h1 className={style.titulo}>Boas-vindas!</h1>
          <p className={style.descricao}>
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
            gente!
          </p>
        </section>
        <Forma2 className={style.forma2} />
        <div className={style.botoes}>
          <Botao>Já tenho conta</Botao>
          <Botao>Quero me cadastrar</Botao>
        </div>
        <div className={style.imagem}>
          <Ilustracao />
        </div>
      </main>
      <Rodape />
    </div>
  );
}
