import React, { useContext, useEffect } from 'react'
import LeftSideBar from './LeftSideBar'
import Breadcrumb from './BreadCrumb'
import { Outlet, useNavigation } from 'react-router-dom'
import useCheckAuth from '../hooks/useCheckAuth'
import Loading from './Loading'

function ProjectNavigation() {
  let {auth,navigate} = useCheckAuth()
  let navi = useNavigation();

  if (navi.state == "loading") {
    return <Loading />;
  } else
  return (
    <div className='flex justify-between bg-slate-100'>
    <LeftSideBar/>
    <div className='w-full px-8 py-12'>
    <div  className='flex justify-between  '>
    <Breadcrumb/>
    </div>
    <Outlet/>
    </div>
    </div>
  )
}

export default ProjectNavigation