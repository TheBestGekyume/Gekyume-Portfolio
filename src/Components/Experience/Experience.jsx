import "./Experience.scss"
import arrayExperince from "../../Data/arrayExperience";

export function Experience() {
    return (
        <section id="experience" className="container-fluid pt-5">
            <h3 className="text-center m-0 fw-bolder">Experiência <span>Profissional</span></h3>

            <div className="timeline-container pt-5">
                <div className="timeline">
                    {arrayExperince.map((item, index) => (
                        <div key={index} className={`timeline-item ${item.side} `}>
                            <div className="timeline-content text-white ">
                                <div className="mx-md-5 card-body p-3 rounded-4">
                                    <h5 className="card-title text-center mb-2 fs-4 fw-bold">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                    <div className="timeline-line"></div>
                </div>
            </div>

        </section>
    )
}