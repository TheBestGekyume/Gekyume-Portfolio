import "./Header.scss";
import arraySvgIcons from "../../Data/arraySvgIcons";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export function Header({ }) {
  return (
    <header id="header" className="d-flex justify-content-center align-items-center text-white">
      <section className="section-content py-4 px-3">
        <h2>Boa-Vindas ao Meu Portfólio!</h2>

        <h3>
          <span>Desenvolvedor Front-End</span>
        </h3>
        <p className="pb-3">
          Olá! Meu nome é <span>Gekyume</span>, sou estudante de
          <span> Análise e Desenvolvimento de Sistemas</span> e atuo como desenvolvedor
          Front-end, com foco em <span>React</span> e <span>Angular</span> para criar
          interfaces modernas e funcionais. Tenho boa <span>lógica de programação </span>
          e experiência com tecnologias voltadas para a estruturação e desenvolvimento web.
        </p>

        <hr />
        <h3 className="mx-auto text-center p-0 m-0">Minhas</h3>
        <h3 className="mx-auto text-center mb-4 "><span>Linguagens</span> & <span>Tecnologias</span></h3>
        <div className="text-center mx-auto svg-content">

          {arraySvgIcons.slice(0, 16).map((item, index) => (
            <SvgIcon
              key={index}
              title={item.title}
              color={item.color}
              link={item.link}
              path={item.path}
            />
          ))}
        </div>

      </section>

    </header>
  );
}
