import React, { useContext, useEffect } from 'react'
import logo from './../assets/logo.svg'
import setting from './../assets/setting.svg'
import notification from './../assets/notification.svg'
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom'
import { myContext } from '../hooks/MyContextProvider'
import useCheckAuth from '../hooks/useCheckAuth'
import Loading from './Loading'

function Navigation() {
  let {auth,navigate} = useCheckAuth('')

  let navi = useNavigation();

  if (navi.state == "loading") {
    return <Loading />;
  } else
  return (
    <>
    <header className='flex justify-between p-6'>
     <div>
     <Link to={'/'}>
     <img src={logo} />
     </Link>
     </div>
     <div className='flex gap-3'>

    <img src={setting}/>
    <img src={notification}/>
     </div>
    </header>
    <Outlet/>
    </>

  )
}

export default Navigation