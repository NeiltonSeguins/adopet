import React from 'react';
import style from './Cabecalho.module.css';
import { ReactComponent as Casa } from '../../assets/icones/Casa.svg';
import { ReactComponent as Mensagem } from '../../assets/icones/Mensagens.svg';
import { ReactComponent as Usuario } from '../../assets/icones/Usuario.svg';
import { ReactComponent as Forma1 } from '../../assets/Forma1.svg';

export default function Cabecalho() {
  return (
    <header>
      <Forma1 className={style.forma1} />
      <nav>
        <div className={style.nav}>
          <Casa />
          <Mensagem />
        </div>
      </nav>
    </header>
  );
}
