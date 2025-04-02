import React from 'react';
import LandingNav from '../../components/navbar/LandingNav';
import { ScrollRestoration } from 'react-router-dom';

const itemsData = {
  "items": [
    {
      "image": "src/assets/image1.png",
      "category": "Education",
      "name": "Event Name 1",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Subtopic",
      "name": "Event Name 2",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Content",
      "name": "Event Name 3",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Workshop",
      "name": "Event Name 4",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Seminar",
      "name": "Event Name 5",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Conference",
      "name": "Event Name 6",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Dance",
      "name": "Event Name 7",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Exhibit",
      "name": "Event Name 8",
      "date": "Month dd, yyyy"
    },
    {
      "image": "src/assets/image1.png",
      "category": "Performance",
      "name": "Event Name 9",
      "date": "Month dd, yyyy"
    }
  ]
};

const Content = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="bg-[#1C1B19] flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7">
        <LandingNav />
        {/* Background Image Section with Search Bar */}
        <div
          className="w-screen h-[40rem] bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage:
              "url('./src/assets/Fernando-Amorsolo-Women-Bathing-and-Washing Clothes-7463.png')",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 sm:p-6 md:p-8 rounded-md shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex justify-between items-center gap-2">
            <input
              type="text"
              placeholder="Enter keyword"
              className="border px-4 sm:px-6 py-3 rounded-md w-[35%] sm:w-[40%] md:w-[45%] lg:w-[50%] h-13 text-lg"
            />
            <select className="border px-4 sm:px-6 py-3 rounded-md w-[25%] sm:w-[30%] md:w-[35%] lg:w-[40%] h-13 text-lg">
              <option value="">Category</option>
            </select>
            <select className="border px-4 sm:px-6 py-3 rounded-md w-[25%] sm:w-[30%] md:w-[35%] lg:w-[40%] h-13 text-lg">
              <option value="">Municipality</option>
            </select>
            <button className="bg-black text-white px-6 py-3 rounded-md text-lg w-[15%] sm:w-[18%] md:w-[20%] h-13 cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-black">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1B19] min-h-screen py-15">
        <div className="w-full px-4 mx-auto flex justify-around">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-x-20">
            {itemsData.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={item.image}
                  alt={`Event ${index + 1}`}
                  className="w-[300px] h-auto"
                />
                <p className="text-[#F05454] text-base uppercase mt-2">
                  {item.category}
                </p>
                <h2 className="text-white text-2xl font-bold mt-1">
                  {item.name}
                </h2>
                <p className="text-gray-300 text-base mt-1">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
