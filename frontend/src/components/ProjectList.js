import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects", error));
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Status: {project.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
