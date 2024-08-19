import React, { createContext, useState } from "react";

// Create the context
export let myContext = createContext();

function MyContextProvider({ children }) {
  // State for auth object
  let [auth, setAuth] = useState({
    username: "",
    Authorize: false,
    email: ""
  });

  // State for events (if you need it)
  let [projects, setProjects] = useState([]);
  let [selectedProject,setSelectedProject] = useState({})
  let [episodes,setEpisodes] = useState([])

  // Provide both auth state and setAuth function in the context
  return (
    <myContext.Provider value={{auth, setAuth, projects, setProjects,selectedProject,setSelectedProject,episodes,setEpisodes }}>
      {children}
    </myContext.Provider>
  );
}

export default MyContextProvider;