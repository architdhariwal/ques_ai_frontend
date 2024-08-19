
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import home from "./../assets/home.svg";
import Button from "../components/Button";
import Modal from "../components/Modal";
import add from "./../assets/add.svg";
import CreateProjectModal from "../components/CreateProjectModal";
import useProject from "../hooks/useProject";

function ProjectsPage() {
  let [show, setShow] = useState(false);
  let { createProject } = useProject();
  let navigate = useNavigate();

  function showModal() {
    setShow((prev) => true);
  }

  function hide() {
    setShow((prev) => false);
  }

  function createProjectHandler(e, title) {
    e.preventDefault();
    let data = {title:title}
    createProject(data);
    hide();
  }

  return (
    <div className="px-20">
      <div className="flex justify-between">
        <Link
          to={"/"}
          className="flex content-center gap-2 border border-black rounded-lg px-4 py-1 w-52 items-center"
        >
          <img src={home} />
          Back to Home
        </Link>

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
      <Outlet />
    </div>
  );
}

export default ProjectsPage;