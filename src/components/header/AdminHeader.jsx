import React from 'react'

const AdminHeader = () => {
  return (
        <header className="bg-[#1C1B19] w-screen fixed z-50 text-white h-[7rem] flex-row justify-center items-center drop-shadow-xl shadow-gray-900/50 py-3">
          <div className="flex justify-center items-center h-full w-full">
              <div className="h-12 w-full flex justify-between items-center px-3 px-9">
                  <div className="h-full w-auto flex justify-center items-center gap-x-1.5">
                      <img src="/LOGO.png" alt="Museo Bulawan Logo" className="h-full"></img>
                      <div className="bg-[#FFFFFF] rounded-2xl h-full w-1.5"></div>
                      <div className="h-12 w-auto flex flex-col justify-center leading-tight">
                          <a className="w-full text-[24px] font-bold text-justify tracking-wider">MUSEO BULAWAN</a>
                          <a className="w-full text-[12px] font-bold text-justify">MANAGEMENT INFORMATION SYSTEM</a>
                      </div>
                  </div>

                  
                  <button className="w-[34px] h-[32px] bg-[#0B0B0B] flex items-center justify-center rounded focus:outline-none hover:bg-[#505050] active:bg-[#333]">
                      <i className="fa-regular fa-bell text-white text-[18px]"></i>
                  </button>
              </div>
          </div>
          <h1 className="bg-white h-[1px] mx-9"></h1>
      </header>
  )
}

export default AdminHeader
