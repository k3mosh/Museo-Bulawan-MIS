import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'
import { ScrollRestoration } from 'react-router-dom'

const Form = () => {
  return (
    <>
      <ScrollRestoration />

      <div className=' flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav/>
        </div>



      </div>
      <div className='h-screen min-h-[79rem] w-screen'>

      </div>
    </>
  )
}

export default Form
