import React, { useContext, useEffect, useRef, useState } from "react";
import youtube from "./../assets/youtube.svg";
import UploadCard from "../components/UploadCard";
import rss from "./../assets/RSS.svg";
import upload from "./../assets/upload.svg";
import FileUploadCard from "../components/FileUploadCard";
import AllEpisodes from "../components/AllEpisodes";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { myContext } from "../hooks/MyContextProvider";
import useProject from "../hooks/useProject";

let arr = [
  { text: "Upload from Youtube", svg: youtube },
  { text: "Upload from RSS FEED", svg: rss },
  { text: "Upload from Files", svg: upload },
];

function AddPodCast() {
  let nameRef = useRef();
  let transcriptRef = useRef();
  let { selectedProject,episodes} = useContext(myContext);
  let { getAllEpisodes, addEpisode } = useProject();
  let [text, selectedText] = useState({ text: "", svg: "" });
  let [show, setShow] = useState(false);
  function showModal(id) {
    setShow((prev) => true);
    selectedText((prev) => arr[id]);
  }
  function hide() {
    setShow((prev) => false);
  }


  async function addEpisodeHandler(e) {
    e.preventDefault();
    let id = selectedProject;
    let data = {
      title: nameRef.current.value,
      content: transcriptRef.current.value,
    };
    addEpisode(id, data);
    
    hide();
  }

  useEffect(() => {
    getAllEpisodes(selectedProject);
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-black">Add Podcast</h1>
      <div className="flex flex-wrap justify-between py-4">
        <UploadCard
          svg={youtube}
          text={"Youtube Video"}
          onClick={() => showModal(0)}
        />
        <UploadCard svg={rss} text={"RSS Feed"} onClick={() => showModal(1)} />
        <UploadCard
          svg={upload}
          text={"Youtube Video"}
          onClick={() => showModal(2)}
        />
      </div>
      <div>
        {episodes.length ? (
          <AllEpisodes episodes={episodes} />
        ) : (
          <FileUploadCard onClick={() => showModal(2)} />
        )}
      </div>
      {show && (
        <Modal onClose={hide}>
          <div className="flex gap-2 items-center">
            <img className="h-12 w-12" src={text.svg} />
            <h1 className="text-3xl font-bold">{text.text}</h1>
          </div>
          <form onSubmit={addEpisodeHandler}>
            <div className="flex flex-col gap-2 mb-2">
              <label>Name</label>
              <input
                className="w-[25rem] border border-black rounded-md px-4 py-2 "
                type="text"
                placeholder=""
                ref={nameRef}
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label>Transcript</label>
              <input
                className="w-[25rem] border border-black rounded-md px-4 py-2 "
                type="text"
                placeholder=""
                ref={transcriptRef}
                required
              />
            </div>
            <div className="float-end">
              <Button text={"Save"} />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AddPodCast;