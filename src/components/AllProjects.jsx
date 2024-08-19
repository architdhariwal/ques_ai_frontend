import React, { useContext } from 'react'
import ProjectCard from './ProjectCard'
import { myContext } from '../hooks/MyContextProvider'
let proj = [
    {title:"Sample Project 1" , episode:'One',lastEdited: '10 Jun'},
    {title:"Sample Project 2" , episode:'two',lastEdited: '15 Jun'},
    {title:"Sample Project 3" , episode:'three',lastEdited: '20 Jun'},
    {title:"Sample Project 4" , episode:'One',lastEdited: '30 Aug'},
    {title:"Sample Project 5" , episode:'six',lastEdited: '15 Sep'},
]


function AllProjects() {
  let {projects} = useContext(myContext)
  return (
    <div className='flex flex-row flex-wrap gap-5 py-6'>
    {projects.map(ele=>
        <ProjectCard id={ele._id} title={ele.title} episodes={ele.episodes.length} lastEdited={new Date(ele.updatedAt).toLocaleDateString()}/>)
    }
    </div>
  )
}

export default AllProjects