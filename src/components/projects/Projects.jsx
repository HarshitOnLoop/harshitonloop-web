import React from "react";
import "./Projects.css"; 
import projectsData from "./projectsData"; // Import your new data file

function Projects() {
  return (
    <div className="projetsection">
      <img src="macbook.png" className="laptop" alt="Laptop" />

      <div className="projects">
        <div className="paper">
          <div className="pin">
            <div className="shadow"></div>
            <div className="metal"></div>
            <div className="bottom-circle"></div>
          </div>
          <h1>projects</h1>
        </div>
      </div>

      <div className="cards-wrapper">
        {projectsData.map((project) => (
          <div key={project.id} id={`card${project.id}`} className="flip-card">
            <div className="flip-card-inner">
              
              {/* FRONT OF CARD */}
              <div className="flip-front">
                <img src={project.img} alt={project.title} />
                <p className="flip-title">{project.title}</p>
                <p className="flip-desc">{project.desc}</p>
              </div>

              {/* BACK OF CARD */}
              <div className="flip-back">
                <p className="flip-title">More Info</p>
                <p>{project.longDesc}</p>
                
                <div className="btn-group">
                  {/* These now use the links from your data file */}
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <button>Demo</button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button>Code</button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="blankspace"></div>
    </div>
  );
}

export default Projects;