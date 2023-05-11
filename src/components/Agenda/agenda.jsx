import React from "react";

import style from "./style.css"

export function Agenda({}){
return (
    <div>
<header className={style.BaseAG}>
      <span className={style.TopoAG}>Meu contatos</span>
      <div>
      <input className={style.Busca}></input>
      </div>
      <div>
      <main className={style.corpinho}></main>
      </div>
    </header>
    </div>
)};

  