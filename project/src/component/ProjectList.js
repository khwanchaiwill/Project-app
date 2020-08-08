import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectsList({ project }) {
  return (
    <div className="movie-list">
      {
        project.map(pro => (
          <Link key={pro.id} to={`/projects/${pro.id}/actions`}>
            <ProjectCard pro={pro} />
          </Link>
        ))
      }
    </div>
  );
}

export default ProjectsList;
