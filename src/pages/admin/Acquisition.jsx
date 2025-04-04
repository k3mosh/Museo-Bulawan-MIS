import React from 'react'
import AdminNav from '../../components/navbar/AdminNav'

const Acquisition = () => {
  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
        </div>
        <div className='w-full min-h-full h-full flex flex-col gap-y-10 px-7 pb-7 pt-[4rem] overflow-scroll'>
          <span className=' text-5xl font-semibold'>Donation and Lending Management</span>
          <div className='w-full h-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 xl:gap-x-5 '>
            <div className='min-w-[34rem] h-full flex flex-col gap-y-7'>
              {/* info bar */}
              <div className='w-full max-w-[35rem] h-[5rem] py-2 flex justify-between'>
                <button className='px-4 h-full border-2 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Form</span>
                </button>
                <button className='px-4 h-full border-2 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Donation Records</span>
                </button>
                <button className='px-4 h-full border-2 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Transfer Status</span>
                </button>
              </div>

              <div className='w-[30rem] h-full flex flex-col gap-y-[5rem]'>
                <div className='bg-[#161616] px-4 h-[5rem] flex justify-between items-center rounded-sm'>
                  <span className='text-2xl text-white font-semibold'>Total Forms</span>
                  <div className='w-[6rem] h-[3rem] bg-[#D4DBFF] flex items-center justify-center rounded-md'>
                    <span className='text-2xl text-black font-semibold'>273</span>
                  </div>
                </div>

                <div className='w-full h-auto flex flex-col gap-y-7'>
                  {/* Date */}
                  <span className='text-2xl font-semibold text-[#727272]'>January 8, 2025</span>
                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Approved</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>255</span>
                    </div>
                  </div>

                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Rejected</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>255</span>
                    </div>
                  </div>

                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Donation</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>255</span>
                    </div>
                  </div>

                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Lend</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>255</span>
                    </div>
                  </div>



                </div>
              </div>

              

            </div>
            
            <div className='w-full h-full bg-amber-950'>
              {/* table */}


              </div>
            
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Acquisition
