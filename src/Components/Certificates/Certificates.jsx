import { useEffect, useRef, useId } from "react";
import arrayCertificates from "../../Data/arrayCertificates";
import "./Certificates.scss";

export function Certificates() {
  const carouselRef = useRef(null);
  const carouselId = useId();

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = carousel.querySelectorAll(".carousel-item");

    const handleSlide = () => {
      items.forEach((item) => {
        item.classList.remove("animate-slide");
      });

      const activeItem = carousel.querySelector(".carousel-item.active");
      if (activeItem) {
        void activeItem.offsetWidth;
        activeItem.classList.add("animate-slide");
      }
    };

    carousel.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carousel.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <section id="certificates" className="container-flex py-5">
      <h3 className="text-center fw-bolder">Certificados</h3>

      <div
        id={carouselId}
        ref={carouselRef}
        className="carousel slide container text-white"
        data-bs-ride="carousel"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          {arrayCertificates.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to={index}
              className={`rounded-circle ${index === 0 ? "active" : ""}`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner pb-2">
          {arrayCertificates.map((item, index) => (
            <div
              key={index}
              className={`carousel-item p-5 ${index === 0 ? "active animate-slide" : ""}`}
            >
              <div className="carousel-content mx-auto border rounded-3">
                <div>
                  <img
                    src={item.img}
                    className="rounded-top-3"
                    alt={`Certificado: ${item.title}`}
                  />
                  <h4 className="my-3">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
}
