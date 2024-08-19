import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../hooks/MyContextProvider";

function ProjectCard({ id, title, episodes, lastEdited }) {
  let { setSelectedProject } = useContext(myContext);

  function setId() {
    setSelectedProject((prev) => id);
  }
  return (
    <Link
      to={`/projects/${title}`}
      className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200"
      onClick={setId}
    >
      {/* Icon Container */}
      <div className="bg-purple-600 rounded-lg w-16 h-16 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">SP</span>
      </div>

      {/* Project Info */}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{episodes} Episodes</p>
        <p className="text-xs text-gray-400">Last edited {lastEdited}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;