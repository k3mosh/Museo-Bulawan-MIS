import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'
import { ScrollRestoration } from 'react-router-dom'

const Article = () => {
  return (
    <>
      <ScrollRestoration />
    
    <div className='bg-white  flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
      <div className='min-h-[10%] w-screen'>
        <LandingNav/>
      </div>

      <div className='w-screen h-[20rem] font-hina'>
      <h1 className='flex w-auto h-full text-center items-center justify-center text-[7rem]'>Title of the News or Event</h1>
      </div>
      <div className="flex w-auto justify-center my-[5rem]">
        <div className="flex w-[70rem] h-auto items-center justify-center text-center text-[2rem]">
            <span className="w-1/4 h-[13rem] border border-black flex flex-col items-center justify-center">
                <h1 className='text-[1.5rem]'>Date</h1>
                <p>month dd, yyyy</p>
            </span>
            <span className="w-1/4 h-[13rem] border border-black flex flex-col items-center justify-center">
                <h1 className='text-[1.5rem]'>Author</h1>
                <p>Name of the Author</p>
            </span>
            <span className="w-1/4 h-[13rem] border border-black flex flex-col items-center justify-center">
                <h1 className='text-[1.5rem]'>Address</h1>
                <p>Location of the event or news</p>
            </span>
            <span className="w-1/4 h-[13rem] border border-black flex flex-col items-center justify-center">
                <h1 className='text-[1.5rem]'>News</h1>
                <p>[placeholder]</p>
            </span>
        </div>
        </div>


    </div>

      <div className='w-screen h-auto min-h-[79rem] mx-auto font-hina'>
       <div className='max-w-[140rem] 3xl:max-w-[180rem] h-auto min-h-[79rem] mx-auto text-[3rem]'>
        {/* 1st image */}
        <div className='flex flex-col sm:flex-row m-[2rem]'>
          <img src="../src/assets/456411725_818119137184125_1334004125955189067_n.png" alt="" />
          </div>
          
          {/* 2nd part */}
          <div className='flex flex-col sm:flex-row '>
            
            <span className='w-full sm:w-1/2  h-full '>
                <div className="m-[2rem] sm: max-w-full h-auto  items-end text-justify">
                    <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupi</p>
                </div>
              
            </span>
            <span className='w-full sm:w-1/2 h-full text-justify'>
                <div className='m-[2rem] sm:m-[2rem]'> 
                    <h1 className='text-[4.3rem] font-bold'>Discovered at Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h1>
                    
                    </div>
            </span>
          </div>

            {/* 3nd part */}
          <div className='flex flex-col sm:flex-row '>
            
            <span className='w-full sm:w-1/2  h-full '>
                <div className="m-[2rem] sm: max-w-full h-auto  items-end text-justify">
                    <h1 className='text-[5.3rem] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </h1>
                </div>
              
            </span>
            <span className='w-full sm:w-1/2 h-full text-justify'>
                <div className='m-[2rem] sm:m-[2rem]'> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </span>
          </div>

           {/* 4th part */}
           <div className='flex flex-col sm:flex-row '>
            
           <span className="w-full sm:w-1/2 h-full">
            <div className="m-[2rem] max-w-full h-auto items-end text-justify">
                <div className="w-3/4 sm:w-4/5 h-[35rem] sm:h-[70rem] bg-[#867055] flex items-center justify-center">
           
                <img
                    src="../src/assets/455363415_812761527719886_1195461782753847821_n (1).png"
                    alt=""
                    className=" flex flex-col items-center justify-center ml-[10rem]"
                />
                </div>
            </div>
            </span>

            <span className='w-full sm:w-1/2 h-full text-justify'>
                <div className='m-[2rem] sm:m-[2rem]'> 
                <span className='text-[15rem] font-bold text-black float-left leading-none mr-4'>L</span>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </span>
          </div>

            {/* 5th part */}
          <div className='flex flex-col sm:flex-row '>
            
            <span className='w-full sm:w-1/2  h-full '>
                <div className="m-[2rem] sm: max-w-full h-auto  items-end text-justify">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src="../src/assets/456426171_818223347173704_7806646081153137378_n 2.png" alt="" className='my-[2rem]'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
              
            </span>
            <span className='w-full sm:w-1/2 h-full text-justify'>
                <div className='m-[2rem] sm:m-[2rem]'> 
                    <img src="../src/assets/456426171_818223347173704_7806646081153137378_n 2.png" alt="" />
                    <h1 className='text-[4.3rem] font-bold my-[2rem]'>Discovered at Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </span>
          </div>

        {/* 6th part */}
        <div className='flex flex-col sm:flex-row mb-[3rem]'>
            
        <span className='w-full sm:w-1/2 h-full text-justify'>
                <div className='m-[2rem] sm:m-[2rem]'> 
                <span className='text-[15rem] font-bold text-black float-left leading-none mr-4'>L</span>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </span>
            <span className='w-full sm:w-1/2 h-full text-justify'>
                <div className='m-[2rem] sm:m-[2rem]'> 
                <span className='text-[15rem] font-bold text-black float-left leading-none mr-4'>L</span>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </span>
          </div>

      </div>





      
    </div>
    </>
  )
}

export default Article
