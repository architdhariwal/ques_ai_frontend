import React, { useEffect, useRef, useState } from "react";
import back from "./../assets/back.svg";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import useProject from "../hooks/useProject";

function EditEpisode() {
  let param = useParams();
  let contentRef = useRef();
  // let [content,setContent] = useState()
  let [newContent, setNewContent] = useState();
  let { getEpisodeContent, updateContent } = useProject();
  let [isEdit, setIsEdit] = useState(false);
  function edit() {
    setIsEdit((prev) => true);
  }
  function disCard() {
    setIsEdit((prev) => false);
    setNewContent((prev) => contentRef.current);
  }
  async function save() {
    await updateContent(param.episodeId, newContent);
    contentRef.current = newContent;
    setIsEdit((prev) => false);
  }
  let navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  async function getContent(id) {
    let content = await getEpisodeContent(id);
    contentRef.current = content;
    setNewContent((prev) => content);
  }

  useEffect(() => {
    let id = param.episodeId;
    getContent(id);
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src={back}
            className="h-8 w-8 cursor-pointer "
            onClick={goBack}
          />{" "}
          Edit Transcript
        </div>
        <div>
          {!isEdit ? (
            <Button onClick={edit} width={16} text={"Edit"}></Button>
          ) : (
            <div className="flex gap-4">
              <Button
                text={"Discard"}
                onClick={disCard}
                className="text-red-500 border border-red-500 px-4 rounded-md"
              />
              <Button width={16} onClick={save} text={"Save"}></Button>
            </div>
          )}
        </div>
      </div>

      <textarea
        readOnly={!isEdit}
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        className="bg-white p-8 rounded-md w-full mt-8 h-[35rem] outline-none overflow-y-scroll"
      ></textarea>
    </div>
  );
}

export default EditEpisode;