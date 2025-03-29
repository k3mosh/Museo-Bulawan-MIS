import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const Content = () => {
  return (
    <>
    <div className='bg-[#1C1B19] flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
      <div className='min-h-[10%] w-screen'>
        <LandingNav/>
      </div>

      <div className='w-screen  h-[40rem] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./src/assets/Fernando-Amorsolo-Women-Bathing-and-Washing Clothes-7463.png')" }}>

      </div>
    </div>

    <div className='bg-[#1C1B19] pt-10 w-screen h-screen min-h-[79rem]'>
      <div className='w-[130rem] xl:w-[130rem] 3xl:w-[160rem] h-full bg-white mx-auto'>

      </div>
    </div>

    
    </>
  )
}

export default Content
