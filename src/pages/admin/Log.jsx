import React from 'react'
import AdminNav from '../../components/navbar/AdminNav'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { connectWebSocket, closeWebSocket } from '../../utils/websocket';


const Log = () => {
  const [logs, setLogs] = useState([]);
  
  const token = localStorage.getItem('token');
  const fetchLogs = () => {
    axios
      .get('http://localhost:5000/api/auth/fetchLogs', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error(
          'Error fetching users:',
          error.response?.data || error.message
        );
      });
  };

    useEffect(() => {
      fetchLogs();
      
      const handleDataChange = () => {
        fetchLogs();
      };
  
      const handleRefresh = () => {
        fetchLogs();
      };
  
      connectWebSocket(handleDataChange, handleRefresh);
  
      return () => {
        closeWebSocket();
      };
    }, []);

    console.log(logs);

  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
        </div>

        <div className='w-full bg-[#151515] min-h-full h-full flex flex-col gap-y-10 px-7 pb-7 pt-[4rem] overflow-scroll'>
          <span className=' text-5xl font-semibold text-white'>Logging</span>
          <div className='w-full h-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 xl:gap-x-5 '>
           
            <div className=' w-full h-full flex flex-col gap-y-7 overflow-x-scroll overflow-y-scroll'>
              {/* table */}
              <div className='min-w-[94rem] min-h-[5rem] py-2 flex items-center gap-x-2'>
                {/* toolbar */}
                <button className='px-3 h-full rounded-lg border-1 border-gray-500  cursor-pointer'>
                  <i className="text-gray-500 fa-regular fa-calendar text-4xl"></i>
                </button>

                <div className="relative h-full min-w-[20rem]">
                  <i className="text-2xl fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"></i>
                  <input type="text" placeholder="Search History" className="text-gray-500 h-full pl-10 pr-3 py-2  border-1 border-gray-500 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>

                <div className="relative h-full  min-w-48">
                  <input type="text" placeholder="Filter..." className="text-gray-500 pl-4 h-full text-2xl pr-8 py-2 border-1 border-gray-500  rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                  <i className="cursor-pointer text-2xl fas fa-plus absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>

                <div className="relative h-full min-w-48">
                  <select className="appearance-none border-1 border-gray-500  h-full text-2xl rounded-lg text-gray-500 w-full py-2 pl-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Actions</option>
                    <option>Action 1</option>
                    <option>Action 2</option>
                  </select>
                  <i className="text-2xl fas fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"></i>
                </div>
              </div>
              
              <div className='min-w-[94rem] w-full font-semibold h-fit grid grid-cols-7 justify-between'>
                {/* table headers */}
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Date</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2  cols-span-1'>
                  <span>User</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2  cols-span-1'>
                  <span>Time</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2  cols-span-1'>
                  <span>Tab</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2  cols-span-1'>
                  <span>Action</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2  cols-span-1'>
                  <span>Affected Resource</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2  cols-span-1'>
                  <span>Description</span>
                </div>
              </div>
              <div className='w-full min-w-[94rem] h-[55rem] overflow-y-scroll flec flex-col border-t-1 border-t-gray-400'>
                {/* table data */}
                {logs.map((log) => {
                  const { createdAt, action, model, details } = log;
                  const parsedDetails = details ? JSON.parse(details) : {};
                  const user = log.Credential || {}; 
                  const dateObj = new Date(createdAt);
                  
                  

                  const date = dateObj.toLocaleDateString();
                  const time = dateObj.toLocaleTimeString();

                  let affectedResource, tab;

                  switch (model) {
                    case 'Invitation':
                      affectedResource = parsedDetails.new?.email || 'N/A';
                      tab = 'User';
                      break;
                  
                    default:

                      break;
                  }

                  return (
                    <div key={log.id} className='min-w-[94rem] text-white text-xl h-fit font-semibold grid grid-cols-7 justify-between cursor-pointer hover:bg-gray-800'>
                      <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400'>{date}</div>

                      <div className='px-4 pt-1 pb-3 flex-col flex border-b-1 border-gray-400'>
                        <span>{user.first_name || "Unknown"} {user.last_name || ""}</span>
                        <span className='text-xs bg-[#6F3FFF] pb-1 rounded-md w-fit px-1'>{user.role || "User"}</span>
                      </div>

                      <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400'>{time}</div>

                      <div className='px-4 py-4 border-b-1 border-gray-400'>{tab}</div>

                      <div className='px-4 py-4 border-b-1 border-gray-400'>
                        <span className={` border-1 border-black rounded-md w-[10rem] items-center justify-center flex py-1 capitalize ${
                            action === 'soft_delete'
                              ? 'bg-[#FFD966] text-black' 
                              : action === 'create'
                              ? 'bg-[#66CC66] text-black' 
                              : action === 'update'
                              ? 'bg-[#66B2FF] text-white' 
                              : action === 'delete'
                              ? 'bg-[#FF6666] text-white' 
                              : 'bg-gray-500 text-white'  
                          }`} >
                          {action.replace('_', ' ')}
                        </span>
                      </div>

                      <div className='pl-4 pt-1 pb-3 border-b-1 border-gray-400'>
                        <span>{affectedResource || '-'}</span>
                      </div>

                      <div className='pl-4 pt-1 pb-3 border-b-1 border-gray-400'>
                      <span
    className="block w-full overflow-hidden text-ellipsis whitespace-nowrap"
    title={parsedDetails?.message || '-'}
  >
    {parsedDetails?.message || '-'}
  </span>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
            
          </div>

        </div>

      </div>
    </>
  )
}

export default Log
