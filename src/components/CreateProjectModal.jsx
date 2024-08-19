import React, { useRef } from 'react'

function CreateProjectModal({createProjectHandler,hide}) {
  let titleRef = useRef()
  return (
    <div className="w-[70vw]">
    <h1 className="text-2xl font-bold pb-4">Create Project </h1>
    <form  onSubmit={(e)=>createProjectHandler(e,titleRef.current.value)}>
    <div >
     <label >Enter Project Name:</label>
     <br/>
     <input className="p-3 border border-gray-400 rounded-lg my-3  w-full outline-none" ref={titleRef} placeholder="Type here" type="text" required />
    </div>
     <p className="flex flex-row-reverse gap-5 text-md">
     <button className="text-white bg-primary py-2 px-4 rounded-lg" type="submit" >Create</button>
     <button className="text-red-500" onClick={hide}>Cancel</button>
     </p>
    </form>
    </div>
  )
}

export default CreateProjectModal