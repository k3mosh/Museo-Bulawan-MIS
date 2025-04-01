import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'
import { ScrollRestoration } from 'react-router-dom'

const Content = () => {
  return (
    <>
      <ScrollRestoration />

      <div className='bg-[#1C1B19] flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav />
        </div>

        <div className='w-screen  h-[40rem] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./src/assets/Fernando-Amorsolo-Women-Bathing-and-Washing Clothes-7463.png')" }}>

        </div>
      </div>

      <div className="bg-[#1C1B19] min-h-screen py-10">
        <div className="w-full px-4 mx-auto">
          {/* 
          1 column on extra-small,
          2 columns at ≥640px (sm),
          3 columns at ≥768px (md),
          4 columns at ≥1024px (lg),
          gap-10 for spacing
        */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {/* ITEM #1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 1"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Education
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 2"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Subtopic
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 3"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Content
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #4 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 4"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Workshop
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #5 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 5"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Seminar
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #6 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 6"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Conference
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #7 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 7"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Dance
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #8 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 8"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Exhibit
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>

            {/* ITEM #9 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="src/assets/image1.png"
                alt="Event 9"
                className="w-[300px] h-auto"
              />
              <p className="text-[#F05454] text-base uppercase mt-2">
                Performance
              </p>
              <h2 className="text-white text-2xl font-bold mt-1">
                Events Name
              </h2>
              <p className="text-gray-300 text-base mt-1">
                Month dd, yyyy
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Content
