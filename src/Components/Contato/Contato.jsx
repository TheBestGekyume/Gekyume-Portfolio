import "./Contato.scss";
import curriculoPDF from "/assets/curriculoGekyumeSerna.pdf"
export function Contato() {
    return (
        <footer id="contato" className="text-center py-4 border-top">
            <h4 className="pt-1 fw-semibold">Contate-me!</h4>
            <div className="
            container
            d-flex flex-column
            flex-md-row
            justify-content-evenly
            align-items-center
            gap-5
            flex-wrap py-4">

                <a
                    href="mailto:contatogekyume@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <i className="bi bi-envelope-fill"></i> Email
                </a>

                <a
                    href="https://www.linkedin.com/in/gekyumeserna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <i className="bi bi-linkedin"></i>LinkedIn
                </a>

                <a
                    href="https://github.com/TheBestGekyume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <i className="bi bi-github"></i> GitHub
                </a>

                <a
                    href={curriculoPDF}
                    download="Gekyume_Serna_Curriculo.pdf"
                    className="contact-link"
                >
                    <i className="bi bi-download"></i> Currículo
                </a>

            </div>

            <h5 className="pt-2">© {new Date().getFullYear()} Gekyume Serna. Todos os direitos reservados.</h5>
        </footer>
    );
}
