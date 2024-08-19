import React, { useContext, useEffect, useState } from "react";
import heroImage from "./../assets/heroImage.svg";
import Button from "../components/Button";
import add from "./../assets/add.svg";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import CreateProjectModal from "../components/CreateProjectModal";
import { myContext } from "../hooks/MyContextProvider";
import useProject from "../hooks/useProject";

function HomePage() {
  let [show, setShow] = useState(false);
  let { auth, projects } = useContext(myContext);
  let {createProject} = useProject()

  let { getAllProjects } = useProject();

  let navigate = useNavigate();

  function showModal() {
    setShow((prev) => true);
  }

  function hide() {
    setShow((prev) => false);
  }

  function createProjectHandler(e,title) {
    e.preventDefault();
    let data = {title:title}
    createProject(data)
    navigate("/projects");
  }

  if (projects && projects.length) {
    navigate("/projects");
  }



  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-primary text-center p-2">
        Create a New Project
      </h1>
      <div className="flex justify-center p-4">
        <img src={heroImage} />
      </div>
      <p className="text-gray-300 text-[#838383] px-10 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <div className="flex justify-center p-4">
        <Button
          text={"Create new Project"}
          width={90}
          size="xl"
          onClick={showModal}
        >
          <img src={add} width={30} />
        </Button>
      </div>
      {show && (
        <Modal onClose={hide}>
          <CreateProjectModal
            createProjectHandler={createProjectHandler}
            hide={hide}
          />
        </Modal>
      )}
    </div>
  );
}

export default HomePage;