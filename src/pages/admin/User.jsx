import React from 'react'
import AdminNav from '../../components/navbar/AdminNav'

const User = () => {
  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
        </div>
        <div className='w-full min-h-full h-full flex flex-col gap-y-10 px-7 pb-7 pt-[4rem] bg-[#151515] overflow-y-scroll'>
        <span className=' text-5xl font-semibold text-white'>User Management</span>

          <div className='w-full h-full flex flex-col'>
            <div className='w-full min-h-[30rem] border-t-1 py-10 border-t-[#373737] flex flex-col sm:flex-row sm:justify-between'>
              <div className='w-full h-full gap-y-4 flex flex-col'>
                <span className='text-white text-3xl font-semibold w-fit'>Users</span>
                <span className='text-xl w-[25rem] text-[#9C9C9C]'>Manage system by users by assigning roles,
                updating account details, and controlling
                access levels.
                </span>
                <button className='cursor-pointer w-fit h-fit rounded-md px-4 py-2 bg-[#6F3FFF] text-white font-semibold'>
                  Invite People
                </button>
              </div>

              <div className='w-full sm:min-w-[70rem] h-full rounded-xl bg-[#1C1B19] border-1 border-[#373737] overflow-y-scroll overflow-x-scroll'>
                {/* table */}

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>




                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>

                <div className='w-full h-[5rem] flex justify-between px-4 sm:pl-20 sm:pr-10 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>

                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <div class="relative w-30 sm:w-40">
                      <select class="appearance-none w-full bg-[#3A3A3A] text-white text-xs sm:text-sm rounded-md border-1 border-[#A6A6A6] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <option></option>
                        <option>Viewer</option>
                        <option>Administrator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <i class="fa-solid fa-trash text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                    <i class="fa-solid fa-user-pen text-xl sm:text-3xl cursor-pointer text-[#999999]"></i>
                  </div>
                </div>



                

              </div>
            </div>




            <div className='w-full h-fit sm:h-full gap-y-10 flex border-t-1 py-10 border-t-[#373737] flex-col sm:flex-row '>


              <div className='w-full h-fit sm:h-full gap-y-4 flex flex-col'>
                <span className='text-white text-3xl font-semibold w-fit'>Pendings</span>
                <span className='text-xl w-[25rem] text-[#9C9C9C]'>
                View and manage pending user invitations. Approve, resend, or revoke invites to control system access.
                </span>
              </div>

              <div className='w-full sm:min-w-[70rem] h-[15rem] sm:h-full rounded-xl bg-[#1C1B19] border-1 border-[#373737]'>
              <div className='w-full h-[5rem] flex justify-between px-4 sm:px-20 border-b-1 border-[#373737]'>
                  <div className='w-fit h-full flex gap-x-2 sm:gap-x-7 items-center'>
                    <div className='w-[3rem] h-[3rem] rounded-full bg-amber-200 flex items-center justify-center'>
                      <span className='text-2xl font-semibold'>JT</span>
                    </div>
                    <div className='w-fit h-full justify-center flex flex-col'>
                      <span className='text-white text-xl sm:text-2xl font-semibold'>Jefferson Talagtag</span>
                      <span className='text-lg sm:text-lg font-semibold text-[#9C9C9C]'>jeffersontalagtag06@gmail.com</span>
                    </div>
                  </div>

                  <div className='w-fit gap-x-3 h-full flex items-center'>
                    <button className='cursor-pointer w-fit h-fit rounded-md px-4 py-2 bg-[#3A3A3A] border-[#A6A6A6] border-1 text-white font-semibold'>
                      Resend Invite
                    </button>
                    <button className='cursor-pointer w-fit h-fit rounded-md px-4 py-2 border-[#FF8080] border-1 text-[#FF8080] font-semibold'>
                      Revoke Invite
                    </button>
                      
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default User
