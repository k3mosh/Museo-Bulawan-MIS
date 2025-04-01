import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'
import { ScrollRestoration } from 'react-router-dom'

const Support = () => {
  return (
    <>
      <ScrollRestoration />
    <div className='bg-white min-h-[79rem] h-screen w-screen pt-7'>
      <div className='min-h-[10%] w-screen'>
          <LandingNav />
        </div>
        <div className='max-w-[140rem] 3xl:max-w-[180rem] mx-auto flex min-h-[89%] '>

        </div>
    </div>
    </>
    
  )
}

export default Support
