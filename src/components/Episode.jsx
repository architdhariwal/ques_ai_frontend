import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../hooks/MyContextProvider";
import useProject from "../hooks/useProject";

function Episode({ index, file }) {
  let {selectedProject} = useContext(myContext)
  let {deleteEpisode} = useProject()
   
  function episodeDeleteHandler(){
      console.log(file,selectedProject)
      deleteEpisode(file._id,selectedProject)
  }
   
  return (
    <tr key={index}>
      <td className="border-b py-2">{index + 1}</td>
      <td className="border-b py-2">{file.title}</td>
      <td className="border-b py-2">{new Date(file.updatedAt).toLocaleString()}</td>
      <td className="border-b py-2">
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
            file.status === "In Progress"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          Done
        </span>
      </td>
      <td className="border-b py-2">
        <Link  to={`edit/${file._id}`} className=" hover:bg-slate-200 text-black px-4 py-2.5 border border-black border-r-0 rounded-tl-md rounded-bl-md">
          View
        </Link>
        <button onClick={episodeDeleteHandler} className=" hover:bg-red-300 text-red-500 py-2 px-4 border border-black  rounded-tr-md rounded-br-md ">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Episode;