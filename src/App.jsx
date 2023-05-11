import style from "./components/Card/App.module.css";

import { CardPerson } from "./components/Card/CardPerson";

import {Agenda} from "./components/Agenda/agenda";

import "./components/Agenda/style.css"


export function App() {
  const listStack = [
    { Tec: "JavaScript", color:""},
    { Tec: "HTML", color:""},
    { Tec: "CSS" , color:""},
    { Tec: "Typescript" , color:""},
    { Tec: "React" , color:""},
  ];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        avatar="https://avatars.githubusercontent.com/u/107023990?s=400&u=ea216307f3a3bc5c0abd5c265d808006bc02306c&v=4"
        name="Vitor Manoel Buss"
        office="Web Developer"
        stacks={listStack}
      />
      
      <Agenda/>
    </div>


  );
}


