import React from 'react';
import style from './Home.module.css';
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import { pets } from '../../api/adopetApi.js';

export default function TelaHome() {
  return (
    <div>
      <Cabecalho />
      <section className={style.conteudo}>
        <h1>Olá! Veja os amigos disponíveis para adoção!</h1>
        <ul>
          {pets.map((pet) => {
            return (
              <li>
                <h2>{pet.nome}</h2>
              </li>
            );
          })}
        </ul>
      </section>
      <Rodape />
    </div>
  );
}
