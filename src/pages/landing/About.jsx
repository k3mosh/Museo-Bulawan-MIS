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

      <div className='w-screen h-auto min-h-[79rem] bg-black'>
       <div className='max-[140rem] xl:max-w-[140rem] 3xl:[180rem] h-auto min-h-[79rem] mx-auto bg-amber-800'>
          <div className='flex flex-col sm:flex-row'>
            <span className='w-full sm:w-1/2  h-full bg-amber-200'>left message</span>
            <span className='w-full sm:w-1/2 h-full bg-amber-600'>right message</span>
          </div>
          <div className='flex flex-col sm:flex-row'>
            <span className='w-full sm:w-1/2  h-full bg-amber-200'>left message</span>
            <span className='w-full sm:w-1/2 h-full bg-amber-600'>right message</span>
          </div>
          


        <div>
           
        </div>
      </div>
    </div>
    </>
  )
}

export default About
