import { useState, useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence } from "framer-motion";
import { Project } from "../Project/Project";
import arrayProject from "../../Data/arrayProject";
import { Link } from "react-scroll";

import "./Projects.scss";

export function Projects() {

  const divAnimadaRef = useRef(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isSingleView, setIsSingleView] = useState(false);
  const [showAllProjects, setshowAllProjects] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const renderedProjects = isMobile && !showAllProjects
    ? arrayProject.slice(0, Math.floor(arrayProject.length) / 2)
    : arrayProject;

  useLayoutEffect(() => {
    if (isSingleView && divAnimadaRef.current) {
      const yOffset = 45;
      const y = divAnimadaRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y });
    }
  }, [isSingleView]);

  const handleProjectSelect = index => {
    if (isSingleView) {
      setIsSingleView(false);
      setSelectedProjectIndex(null);
    } else {
      setSelectedProjectIndex(index);
      setIsSingleView(true);
    }
  };

  const toggleProjects = () => setshowAllProjects(!showAllProjects);

  return (
    <section id="projects" className="pb-5">
      <div className="divAnimada" ref={divAnimadaRef}>
        <h3 className="text-white fs-2 fw-bolder">Meus projetos</h3>
      </div>

      <div className="container">
        {/* VIEW DE PROJETO ÚNICO */}
        {isSingleView && (
          <div className="single-view-wrapper">

            <div className="px-1 px-lg-5 mx-auto mx-lg-5 border-none">
              <AnimatePresence mode="wait">
                <Project
                  key={`single-${selectedProjectIndex}`}
                  {...arrayProject[selectedProjectIndex]}
                  isSelected={true}
                  onToggle={() => handleProjectSelect()}
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
                {renderedProjects.map((project, index) => (
                  <Project
                    key={`list-${index}`}
                    {...project}
                    isSelected={false}
                    onToggle={() => handleProjectSelect(index)}
                  />
                ))}
              </AnimatePresence>
            </div>
            {isMobile && (
              <div className="d-flex mt-5 justify-content-center">

                {showAllProjects ?
                  <Link
                    to="projects"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    tabIndex={0}>
                    <button className="btn-custom px-3 py-2" onClick={toggleProjects}>
                      Ver menos
                    </button>
                  </Link>
                  :
                  <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    tabIndex={0}>
                    <button className="btn-custom px-3 py-2 mx-auto" onClick={toggleProjects}>
                      Ver mais
                    </button>
                  </Link>
                }
              </div>
            )}

          </div>
        )}
      </div>
    </section>
  );
}