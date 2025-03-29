import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const Home = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat  min-h-[720px] h-screen w-screen pt-7' style={{ backgroundImage: "url('/src/assets/06-AfternoonMealOfTheWorker 1.png')" }}>
        <LandingNav/>

        <div className='max-w-[145rem] flex  h-[90%] mt-1 mx-auto'>
          <div className='text-white  w-10 flex flex-col h-auto justify-around'>
            <a href="https://www.facebook.com/museobulawancn" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
              <div className="w-10 h-auto whitespace-nowrap flex items-center text-xl font-medium">
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="mx-3 rotate-90 fa-brands fa-square-facebook mr-2"></i> 
                <span>Museo Bulawan</span>
              </div>
            </a>

            <a href="https://www.instagram.com/museobulawanofficial/" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
              <div className="w-10 h-auto whitespace-nowrap flex items-center text-xl font-medium">
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="mx-3 rotate-90 fa-brands fa-instagram mr-2"></i> 
                <span>museobulawanofficial</span>
              </div>
            </a>

          </div>

          <div className='w-full h-full'>


          </div>

          <div className='text-white  w-10 flex flex-col h-auto justify-around'>
            <a href="https://www.facebook.com/museobulawancn" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
              <div className="w-10 h-auto whitespace-nowrap flex items-center text-xl font-medium">
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="mx-3 rotate-90 fa-brands fa-square-facebook mr-2"></i> 
                <span>Museo Bulawan</span>
              </div>
            </a>

              <a href="https://www.instagram.com/museobulawanofficial/" target="_blank" rel="noopener noreferrer" className='[writing-mode:vertical-rl]'>
                <div className="w-10 h-auto whitespace-nowrap flex items-center text-xl font-medium">
                  <i className="fa-solid fa-circle text-sm mr-2"></i>
                  <i className="mx-3 rotate-90 fa-brands fa-instagram mr-2"></i> 
                  <span>museobulawanofficial</span>
              </div>
            </a>

          </div>

        </div>  


        
    </div>
  )
}

export default Home
