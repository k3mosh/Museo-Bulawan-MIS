import React, { useState } from 'react'
import AdminNav from '../../components/navbar/AdminNav'
import axios from "axios";
import CustomDatePicker from '../../components/function/CustomDatePicker'


export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [address, setAddress] = useState("");
  // const [coverImage, setCoverImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState("")

;
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("article_category", category);
    formData.append("description", description);
    formData.append("user_id", 1); // hardcoded user ID for now
    formData.append("author", author);
    formData.append("address", address);
    formData.append("selectedDate", selectedDate);
    
    // if (coverImage) formData.append("cover_image", coverImage);

    console.log("Form Data:", {
      title,
      category,
      description,
      user_id: 1,
      author,
      address,
      selectedDate,
      // coverImage,
      
    });

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const res = await axios.post(`${API_URL}/api/auth/article`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    
      alert("Article submitted!");
      setTitle("");
      setCategory("");
      setDescription("");
      setAuthor("");
      setAddress("");
      setSelectedDate("");
      // setCoverImage(null);
      setShowModal(false);
    } catch (error) {
      if (error.response?.data?.message) {
        alert("Error: " + error.response.data.message);
      } else {
        alert("Error submitting article.");
      }
      console.error(error);
    }
  };    
  
  
  
  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
        </div>
        <div className='w-full min-h-full h-full flex flex-col gap-y-10 px-7 pb-7 pt-[4rem] overflow-scroll'>
          <span className='text-5xl font-semibold'>Article Management</span>
          <div className='w-full h-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 xl:gap-x-5 '>
            <div className='min-w-[34rem] h-full flex flex-col gap-y-7'>
              {/* info bar */}
              <div className='w-full max-w-[35rem] text-gray-500 min-h-[5rem] flex justify-start py-2 gap-x-2'>
                <button className='px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Artifact</span>
                </button>
              </div>

              <div className='w-full h-full flex flex-col gap-y-[5rem]'>
                <div className='bg-[#161616] px-4 h-[5rem] flex justify-between items-center rounded-sm'>
                  <span className='text-2xl text-white font-semibold'>Articles</span>
                  <div className='w-[6rem] h-[3rem] bg-[#D4DBFF] flex items-center justify-center rounded-md'>
                    <span className='text-2xl text-black font-semibold'>255</span>
                  </div>
                </div>

                <div className='w-full h-auto flex flex-col gap-y-7'>
                  {/* Date */}
                  <span className='text-2xl font-semibold text-[#727272]'>January 8, 2025</span>
                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Posted</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>545</span>
                    </div>
                  </div>

                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Pending Edit</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>10</span>
                    </div>
                  </div>

                  <button
                      onClick={() => setShowModal(true)}
                      className="cursor-pointer flex items-center justify-between w-full px-6 py-4 bg-[#6BFFD5] text-black font-medium"
                    >
                      <span className='text-2xl font-semibold'>Add New Article</span>
                      <span className="border-2 border-black rounded-full p-2 flex items-center justify-center">
                        <i className="fas fa-plus text-xl"></i>
                      </span>
                    </button>
                </div>
              </div>
            </div>

            <div className='w-full h-full flex flex-col gap-y-7 overflow-x-scroll overflow-y-scroll'>
              {/* table */}
              <div className='min-w-[94rem] min-h-[5rem] py-2 flex items-center gap-x-2'>
                {/* 3) Replace the static button with CustomDatePicker */}
                <div className='flex-shrink-0'>
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    popperPlacement="bottom-start"
                    popperClassName="z-50"
                    customInput={
                      <button className='px-3 h-16 rounded-lg border-1 border-gray-500 cursor-pointer'>
                        <i className="text-gray-500 fa-regular fa-calendar text-4xl"></i>
                      </button>
                    }
                  />
                </div>

                <div className="relative h-full min-w-[20rem]">
                  <i className="text-2xl fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"></i>
                  <input
                    type="text"
                    placeholder="Search History"
                    className="h-full pl-10 pr-3 py-2 border-1 border-gray-500 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative h-full min-w-48">
                  <input
                    type="text"
                    placeholder="Filter..."
                    className="pl-4 h-full text-2xl pr-8 py-2 border-1 border-gray-500 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="cursor-pointer text-2xl fas fa-plus absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>

                <div className="relative h-full min-w-48">
                  <select className="appearance-none border-1 border-gray-500 h-full text-2xl rounded-lg text-gray-500 w-full py-2 pl-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Actions</option>
                    <option>Action 1</option>
                    <option>Action 2</option>
                  </select>
                  <i className="text-2xl fas fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"></i>
                </div>
              </div>

              <div className='min-w-[160rem] w-full font-semibold h-fit grid grid-cols-6 justify-between'>
                {/* table headers */}
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Date</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Title</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Author</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Status</span>
                </div>
                
                <div className='text-[#727272] justify-between flex text-2xl border-l-1 pl-3 cols-span-1'>
                  <span className='my-2'>Updated</span>
                  <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 w-[7rem] cols-span-1'>
                    <span>Action</span>
                  </div>
                </div>
              </div>

              <div className='w-full min-w-[160rem] h-auto flex flex-col border-t-1 border-t-gray-400'>
                {/* table data rows */}
                <div className='min-w-[94rem] text-xl h-fit font-semibold grid grid-cols-6 justify-between cursor-pointer hover:bg-gray-300'>
                  <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400 cols-span-1'>
                    <span>02-19-2024</span>
                  </div>
                  <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400 cols-span-1'>
                    <span>Perlas ng silanganan</span>
                  </div>
                  <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400 cols-span-1'>
                    <span>Olivia Harper</span>
                  </div>
                  <div className='px-4 py-4 border-b-1 border-gray-400 cols-span-1'>
                    <span className='text-white bg-[#9C7744] border-1 border-black rounded-md px-15 py-1'>Posted</span>
                  </div>
                  
                  <div className='pl-4 pt-1 pb-3 flex justify-between border-b-1 border-gray-400 cols-span-1'>
                    <span className='w-full truncate'>02-19-2024</span>
                    <div className='min-w-[7rem] flex gap-x-2 pl-3 items-center'>
                      <i className='fa-solid fa-pen-to-square cursor-pointer'></i>
                      <i className='fa-solid fa-trash cursor-pointer'></i>
                      <i className='fa-solid fa-bars cursor-pointer'></i>
                    </div>
                  </div>
                </div>
                {/* Additional table rows can follow here */}
              </div>
            </div>
          </div>
        </div>
        {showModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[40rem] p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6">Add New Article</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Author"
            className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="date"
            className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Address"
            className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <select
            className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="education">Education</option>
            <option value="exhibition">Exhibition</option>
            <option value="contest">Contest</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* <input
          type="file"
          accept="image/*"
          className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
          onChange={(e) => setCoverImage(e.target.files[0])}
        /> */}

        <textarea
          placeholder="Description"
          rows={4}
          className="border-2 border-gray-300 px-4 py-2 rounded text-xl"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="mt-4 bg-[#6BFFD5] px-6 py-2 text-xl font-semibold text-black rounded hover:bg-[#5deac2]"
        >
          Submit Article
        </button>
      </form>

          </div>
        </div>
      )}

      </div>
    </>
  )
}

