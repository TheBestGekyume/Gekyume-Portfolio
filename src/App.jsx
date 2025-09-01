import "./styles/App.scss";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projetos } from "./Components/Projetos/Projetos";
import { Formacao } from "./Components/Formacao/Formacao";
import { Sobre } from "./Components/Sobre/Sobre";
import { Contato } from "./Components/Contato/Contato";
import { Experiencia } from "./Components/Experiencia/Experiencia";

import Particulas from "./Components/Particulas/Particulas";
import arrayItemSvg from "./Data/arraySvg";
import arrayProjetos from "./Data/arrayProjetos";


export function App() {
 

  return (
    <div className="App">

      <Navbar />

      <Header/>

      <Projetos  />

      <Experiencia/>

      <Formacao />

      <Sobre />

      <Contato />

      <Particulas id="particulas" />

    </div>
  );
}
