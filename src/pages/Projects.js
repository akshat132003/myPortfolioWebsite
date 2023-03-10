import React from "react";
import ProjectItem from "../components/ProjectItem";
import wordle from "../assets/wordle.png";
import crypto from "../assets/crypto.png";
import "../styles/Projects.css";
import { projectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
