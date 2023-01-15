import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const projectId = projectList[id];
  return (
    <div className="project">
      <h1>{projectId.name}</h1>
      <img src={projectId.image} />
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
