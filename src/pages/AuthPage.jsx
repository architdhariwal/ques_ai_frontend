import React from 'react'
import { Outlet } from 'react-router-dom'
import questLogo from '../assets/questLogo.svg'
import backgroundImage from '../assets/image.png'

function AuthPage() {
  return (
    <div className='flex'>
      <div 
        className='w-[70%] relative bg-cover bg-center bg-primary' 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='absolute inset-0 flex flex-col items-start justify-start p-8'>
          <img src={questLogo} alt="Logo" className='mb-4'/>
          <h1 className='text-white text-7xl font-bold w-[50%]'>Your podcast will no longer be just a hobby.</h1>
          <p className='text-white text-2xl mt-2 w-[40%]'>Supercharge Your Distribution using our AI assistant!</p> 
        </div>
      </div>
      <div className='w-[30%] my-10'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AuthPage

