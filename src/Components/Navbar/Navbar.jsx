import { Link } from "react-scroll";
import "./Navbar.scss";

export function Navbar() {

  return (
    <nav className="navbar sticky-top navbar-expand-xl navbar-style">
      <div className="container-fluid py-1">

        <h1 className="navbar-brand">
          <a href="https://github.com/TheBestGekyume" rel="noopener noreferrer" target="_blank">Gekyume Serna</a>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          

        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 mt-3 mt-lg-0">

            <li className="nav-item">
              <Link
                className="link-react"
                to="header"
                smooth={true}
                duration={750}
                offset={-70}
                tabIndex={0}
              >
                Início
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="link-react"
                to="projetos"
                smooth={true}
                duration={750}
                offset={-70}
                tabIndex={0}
              >
                Meus Projetos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#"
                className="link-react"
                to="formacao"
                smooth={true}
                duration={750}
                offset={-70}
                tabIndex={0}

              >
                Certificados
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="link-react"
                to="sobreMim"
                smooth={true}
                duration={750}
                offset={-70}
                tabIndex={0}
              >
                Sobre Mim
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="link-react"
                to="#"
                smooth={true}
                duration={750}
                offset={-70}
                tabIndex={0}
              >
                Contato
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav >
  );
}
