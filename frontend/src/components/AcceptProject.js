import React from "react";
import axios from "axios";

const AcceptProject = ({ projectId, candidateId }) => {
  const acceptProject = () => {
    axios.put(`http://localhost:5000/api/projects/${projectId}/accept`, { candidateId })
      .then(() => alert("Project accepted successfully!"))
      .catch((error) => console.error("Error accepting project", error));
  };

  return <button onClick={acceptProject}>Accept Project</button>;
};

export default AcceptProject;
