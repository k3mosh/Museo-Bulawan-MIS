import React from 'react'
import { NavLink } from 'react-router-dom'
import LandingNav from '../../components/navbar/LandingNav'

const Home = () => {
  return (

    <>
      <div className='bg-cover bg-center bg-no-repeat  min-h-[79rem] h-screen w-screen pt-7' style={{ backgroundImage: "url('/src/assets/06-AfternoonMealOfTheWorker 1.png')" }}>
        <div className='min-h-[10%] w-screen'>
          <LandingNav/>
        </div>

        <div className='max-w-[140rem] 3xl:max-[180rem] mx-auto flex min-h-[89%] '>

            <div className='hidden text-white w-10 sm:flex flex-col h-auto justify-around'>
              <a href="https://www.facebook.com/museobulawancn" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto  flex items-center text-xl font-bold  ">
                  <i className="fa-solid fa-circle text-sm mr-2"></i>
                  <i className="mx-3 rotate-90 fa-brands fa-square-facebook mr-2"></i> 
                  <span>Museo Bulawan</span>
                </div>
              </a>

              <a href="https://www.instagram.com/museobulawanofficial/" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto flex items-center text-xl font-bold">
                  <i className="fa-solid fa-circle text-sm mr-2"></i>
                  <i className="mx-3 rotate-90 fa-brands fa-instagram mr-2"></i> 
                  <span>museobulawanofficial</span>
                </div>
              </a>

            </div>



            <div className='flex sm:hidden text-white w-10  flex-col h-auto justify-center gap-y-4 font-bold text-3xl'>
              <a href="https://www.facebook.com/museobulawancn" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto  flex items-center justify-center">
                  {/* <i className="fa-solid fa-circle text-sm mr-2"></i> */}
                  <i className="fa-brands fa-square-facebook mx-auto"></i> 
                </div>
              </a>

              <a href="https://www.instagram.com/museobulawanofficial/" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto flex items-center">
                  {/* <i className="fa-solid fa-circle text-sm mr-2"></i> */}
                  <i className="fa-brands fa-instagram mx-auto"></i> 
                </div>
              </a>
              <a href="https://www.tiktok.com/@museobulawan" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto flex items-center">
                  {/* <i className="fa-solid fa-circle text-sm mr-2"></i> */}
                  <i className="fa-brands fa-brands fa-tiktok mx-auto"></i> 
                </div>
              </a>

                <a href="https://www.youtube.com/@museobulawanofficial" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                  <div className="w-10 h-auto flex items-center">
                    {/* <i className="fa-solid fa-circle text-sm mr-2"></i> */}
                    <i className="fa-brands fa-youtube mx-auto"></i> 
                </div>
              </a>

            </div>

            <div className='w-full pt-35 h-fit flex flex-col'>
            
              <div className='w-fit h-fit flex flex-col ml-8'>
                <span className="text-5xl w-full font-bold text-[#DAB765]  drop-shadow-[3px_3px_0px_black] ">
                  WELCOME TO
                </span>
            
                <span className='text-9xl font-bold text-white drop-shadow-[3px_3px_0px_black] -mt-3'>
                  BULAWAN
                  <br />
                  MUSEO 
                </span>
              </div>

              <div className='w-fit h-fit text-2xl flex gap-x-5 ml-11 my-10 sm:my-20'>
                <button className="w-48 h-16 bg-white flex items-center justify-center font-medium text-black transition duration-300 hover:shadow-lg cursor-pointer outline-3 outline-white">
                    Learn More
                </button>
                <NavLink to='/appointment'>
                  <button className="w-48 h-16 bg-transparent flex items-center justify-center outline-3 outline-white text-2xl font-medium text-white transition duration-300 hover:bg-white hover:text-black cursor-pointer">
                    BOOK A VISIT
                  </button>
                </NavLink>
              </div>

              <div className='ml-11 flex flex-col gap-y-5'>
                <div className="w-auto h-auto text-white flex items-start gap-2">
                    <i className="fas fa-clock text-xl relative mt-1.5 mr-2 w-5"></i>
                    <div>
                      <span className="block text-xl font-bold">Museum Hours</span>
                      <span className="text-md font-normal leading-tight">Open Daily 9:00am-5:00pm, Monday-Friday,</span>
                    </div>
                  </div>

                  <div className="w-auto h-auto text-white flex items-start gap-2">
                    <i className="fa-solid fa-location-dot text-xl relative mt-1 mr-2 w-5"></i>
                    <div>
                      <span className="block text-xl font-bold">Museum Location</span>
                      <span className="text-md font-normal leading-tight">Camarines Norte Provincial Capitol Grounds, Daet Philippines</span>
                    </div>
                  </div>
              </div>


            </div>

            <div className='hidden text-white  w-10 sm:flex flex-col h-auto justify-around'>
              <a href="https://www.tiktok.com/@museobulawan" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto flex items-center text-xl font-bold">
                  <i className="fa-solid fa-circle text-sm mr-2"></i>
                  <i className="mx-3 rotate-90 fa-brands fa-brands fa-tiktok mr-2"></i> 
                  <span>museobulawan</span>
                </div>
              </a>

                <a href="https://www.youtube.com/@museobulawanofficial" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                  <div className="w-10 h-auto flex items-center text-xl font-bold">
                    <i className="fa-solid fa-circle text-sm mr-2"></i>
                    <i className="mx-3 rotate-90 fa-brands fa-youtube mr-2"></i> 
                    <span>Museo Bulawan (Abel C. Icatlo)</span>
                </div>
              </a>

            </div>

        </div>  
      
      </div>

      <div className='w-screen h-screen min-h-[79rem]'>

      </div>
      
      <div className='w-screen h-screen min-h-[79rem]'>

</div>
    </>
  )
}

export default Home
