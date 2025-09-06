import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Project } from "../Project/Project";
import projectArray from "../../Data/projectArray";
import "./Projects.scss";

export function Projects() {

  const divAnimadaRef = useRef(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isSingleView, setIsSingleView] = useState(false);

  useLayoutEffect(() => {
    if (isSingleView && divAnimadaRef.current) {
      const yOffset = 45;
      const y = divAnimadaRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [isSingleView]);

  const handleProjectSelect = (index) => {
    setSelectedProjectIndex(index);
    setIsSingleView(true);
  };

  const handleReturnToList = () => {
    setIsSingleView(false);
    setSelectedProjectIndex(null);
  };

  return (
    <section id="projects" className="pb-5">
      <div className="divAnimada" ref={divAnimadaRef}>
        <h3 className="text-white fs-2 fw-bolder">Meus projetos</h3>
      </div>

      <div className="container">
        {/* VIEW DE PROJETO ÚNICO */}
        {isSingleView && (
          <div className="single-view-wrapper">

            <div className="px-1 px-lg-5 mx-auto mx-lg-5">
              <AnimatePresence mode="wait">
                <Project
                  key={`single-${selectedProjectIndex}`}
                  imageSrc={projectArray[selectedProjectIndex].imageSrc}
                  title={projectArray[selectedProjectIndex].title}
                  linkRepo={projectArray[selectedProjectIndex].linkRepo}
                  linkSite={projectArray[selectedProjectIndex].linkSite}
                  description={projectArray[selectedProjectIndex].description}
                  icons={projectArray[selectedProjectIndex].icons}
                  isSelected={true}
                  onToggle={() => handleReturnToList()}
                />

              </AnimatePresence>
            </div>
          </div>
        )}

        {/* VIEW DE LISTA DE PROJETOS */}
        {!isSingleView && (
          <div className="list-view-wrapper">
            <div className="list">
              <AnimatePresence>
                {projectArray.map((project, index) => (
                  <Project
                    key={`list-${index}`}
                    imageSrc={project.imageSrc}
                    title={project.title}
                    linkRepo={project.linkRepo}
                    linkSite={project.linkSite}
                    description={project.description}
                    isSelected={false}
                    onToggle={() => handleProjectSelect(index)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}