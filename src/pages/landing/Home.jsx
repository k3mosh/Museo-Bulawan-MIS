import React from 'react'
import { NavLink } from 'react-router-dom'
import LandingNav from '../../components/navbar/LandingNav'
import { ScrollRestoration } from 'react-router-dom'

const Home = () => {
  return (

    <>
      <ScrollRestoration />

      <div className='bg-cover bg-center bg-no-repeat  min-h-[79rem] h-screen w-screen pt-7' style={{ backgroundImage: "url('/src/assets/06-AfternoonMealOfTheWorker 1.png')" }}>
        <div className='min-h-[10%] w-screen'>
          <LandingNav />
        </div>

        <div className='max-w-[140rem] 3xl:max-w-[180rem] mx-auto flex min-h-[89%] '>

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
                MUSEO

                <br />
                BULAWAN
              </span>
            </div>

            <div className='w-fit h-fit text-2xl flex gap-x-5 ml-11 my-10 sm:my-20'>
              <a href="#learn_more">
              <button className="w-48 h-16 bg-white flex items-center justify-center font-medium text-black transition duration-300 hover:shadow-lg cursor-pointer outline-3 outline-white">
                Learn More
              </button>
              </a>
              <NavLink to='/appointment'>
                <button className="w-48 h-16 bg-transparent flex items-center justify-center outline-3 outline-white text-2xl font-medium text-white transition duration-300 hover:bg-white hover:text-black cursor-pointer">
                  BOOK A VISIT
                </button>
              </NavLink>
            </div>

            <div className='ml-11 flex flex-col gap-y-5'>
              <div className="w-auto h-auto text-white flex items-start gap-2">
                <i className="fa-solid fa-clock text-xl relative mt-1.5 mr-2 w-5"></i>
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

      <div id='learn_more' className='w-screen h-screen min-h-[79rem] bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: "url('./src/assets/bghome2.png')" }}>
          <div className='h-full w-full py-34'>
            <div className='h-full w-full flex flex-col xl:pl-30 xl:py-12 '>
              <div className='flex items-center gap-2 px-4'> <h1 className='w-10 h-0.5 bg-[#63635C]'></h1><span className='text-2xl text-[#63635C]'> About Museo Bulawan</span></div>
                <div className='h-[65em] w-full flex flex-col xl:flex-row gap-10 items-center justify-end '>
                    <div className='xl:w-1/2 w-full h-[22em] flex flex-col pt-14 gap-3 px-4'>
                      <span className="text-3xl font-hina">
                        <span className="text-4xl font-semibold xl:text-6xl">Museo Bulawan</span>, known as the “Golden Museum,” is the leading and the most viewer-friendly community museum that serves as the nerve center for education and communication of the rich cultural, artistic and natural heritage and history of Camarines Norte, the ultimate medium for preservation, exhibition of significant objects that strengthen the values of the people and deepen their patriotism and sense of identity.
                      </span>

                        <span className='text-2xl'>Learn More <i class="fa-solid fa-arrow-right "></i> </span>
                      </div>
                    <div className="xl:w-1/2 h-[60em] w-full">
                        <img 
                          src="./src/assets/dhome2.png" 
                          className="w-full h-full object-contain" 
                          alt="" 
                        />
                      </div>

                </div>
            </div>
          </div>
      </div>

      <div className='w-screen h-screen min-h-[79rem]'>

      </div>
    </>
  )
}

export default Home
