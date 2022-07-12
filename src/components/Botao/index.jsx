import React from "react";
import style from "./Botao.module.css";

export default function Botao({ children }) {
  return <button className={style.botao}>{children}</button>;
}
