import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const About = () => {
  return (
    <>
    <div className='bg-white  flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
      <div className='min-h-[10%] w-screen'>
        <LandingNav/>
      </div>
      <div className='w-screen h-[40rem] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./src/assets/440832115_947772303495782_6010038099693171993_n.png')" }}>

      </div>
    </div>

    <div className='w-screen h-screen min-h-[79rem]'>

    </div>
    </>
  )
}

export default About
