import React, { useContext, useEffect } from 'react'
import { myContext } from './MyContextProvider'
import { useNavigate } from 'react-router-dom';

function useCheckAuth(str) {
    let {auth} = useContext(myContext)
    let navigate = useNavigate()
    useEffect(() => {
        if (!auth.Authorize) {
          navigate('/auth/login');
        }
      }, []);
  return (
   {auth,navigate}
  )
}

export default useCheckAuth