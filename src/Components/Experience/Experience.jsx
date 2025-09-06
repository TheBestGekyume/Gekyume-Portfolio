import "./Experience.scss"

export function Experience() {

    const items = [
        {
          id: 1,
          title: "Desenvolvimento Colaborativo",
          description: `O desenvolvimento do projeto freelance foi feito colaborativamente, 
          com base em conversas diretas, troca constante de ideias e testes práticos.
          Ao longo do processo, mantive um diálogo aberto com a cliente, garantindo que cada
          etapa da criação refletisse suas expectativas e necessidades. Por meio do feedback contínuo,
          ajustamos e aperfeiçoamos cada detalhe, resultando numa solução personalizada.`,
          side: "left",
        },
        {
          id: 2,
          title: "Comunicação e Profissionalismo",
          description: `Além do desenvolvimento técnico, essa experiência me proporcionou aprendizados
          valiosos em comunicação. Foi meu primeiro contato direto com um cliente real, o que me ensinou
          sobre o alinhamento de expectativas, clareza nas entregas e, principalmente, a importância de
          cumprir prazos e metas em um contexto profissional.`,
          side: "right",
        },
        {
          id: 3,
          title: "Aprofundando nas Tecnologias Web",
          description: `Durante o projeto, também aprofundei meus conhecimentos em SEO, performance,
                    acessibilidade e boas práticas de desenvolvimento web. Além disso, refinei
                    minhas habilidades com React, consolidando tanto aspectos técnicos quanto
                    interpessoais que foram fundamentais para o sucesso dessa entrega.`,
          side: "left",
        },
      ];

    return (
        <section id="experience" className="container-fluid pt-5">
            <h3 className="text-center m-0 fw-bolder">Experiência <span>Profissional</span></h3>


            <div className="timeline-container pt-5">
                <div className="timeline">
                    {items.map((item) => (
                        <div key={item.id} className={`timeline-item ${item.side} `}>
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