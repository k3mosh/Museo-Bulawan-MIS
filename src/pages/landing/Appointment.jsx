
import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const Appointment = () => {
  return (
    <>
      <div className=' flex flex-col gap-y-4 min-h-fit h-auto w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav />
        </div>


        <div className='max-w-full h-auto bg-white py-6 font-medium font-[HinaMincho] shadow-lg px-20'>
          <span className='text-5xl'>Appointment Form</span>
        </div>

        <div className='flex-col w-[140rem] 3xl:w-[180rem] mx-auto h-[200rem] flex min-h-[89%] gap-y-10 mt-4'>

          <div className='flex w-fit gap-x-5'>
            <div className='flex mx-auto min-w-[30rem] flex-col font-[HindKochi] text-xl'>
              <div className='flex items-center gap-x-3'>
                <i className="text-3xl fa-solid fa-clock"></i>
                <span className='font-bold'>Museo Bulawan</span>
              </div>
              <span className='ml-11'>Open Daily 9:00am-5:00pm, Monday- Friday,</span>
            </div>
            <div className='flex mx-auto min-w-[30rem] flex-col font-[HindKochi] text-xl'>
              <div className='flex items-center gap-x-3'>
                <i class="text-3xl fa-solid fa-location-dot"></i>
                <span className='font-bold'>Museum Location</span>
              </div>
              <span className='ml-9'>Camarines Norte Provincial Capitol Grounds, Daet Philippines</span>
            </div>
          </div>
          <form action="">


          </form>
        </div>

      </div>

      <div className='w-screen h-auto min-h-screen'>
        <div className='w-[140rem] max-w-[140rem] 3xl:max-[180rem] mx-auto h-[200rem] flex min-h-screen '>

        </div>

      </div>

    </>
  )
}

export default Appointment
