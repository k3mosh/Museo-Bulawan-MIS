import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNav from '../../components/navbar/AdminNav'
import CustomDatePicker from '../../components/function/CustomDatePicker'
import { connectWebSocket, closeWebSocket } from '../../utils/websocket'
import AppointmentModal from '../../components/modals/AppointmentModal'

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointments, setAppointments] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [approveVisit, setApproveVisit] = useState('yes')

  const token = localStorage.getItem('token')

  /** 
   * Fetch all appointments from the backend 
   */
  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/auth/appointment',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setAppointments(response.data)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }

  /**
   * Update the appointment status in your new appointment_status table.
   * Adjust the endpoint/method to match your backend route.
   */
  const updateAppointmentStatus = async (appointmentId, newStatus) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/auth/appointment/${appointmentId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(`Appointment ${appointmentId} status updated to: ${newStatus}`)
      // Refresh appointments to reflect changes
      fetchAppointments()
    } catch (error) {
      console.error('Error updating appointment status:', error)
    }
  }

  useEffect(() => {
    fetchAppointments()

    const handleDataChange = () => {
      console.log('WebSocket: Data changed, refreshing appointments...')
      fetchAppointments()
    }

    const handleRefresh = () => {
      console.log('WebSocket: Refresh command received, refreshing appointments...')
      fetchAppointments()
    }

    connectWebSocket(handleDataChange, handleRefresh)

    return () => {
      closeWebSocket()
    }
  }, [])

  /**
   * When a row in the table is clicked, open the modal 
   * and pass the data (including appointmentId for status updates).
   */
  const handleRowClick = (appt) => {
    if (!appt || !appt.Visitor) return
    setModalData({
      appointmentId: appt.appointment_id,
      dateSent: appt.creation_date || 'N/A',
      fromFirstName: appt.Visitor.first_name || 'N/A',
      fromLastName: appt.Visitor.last_name || 'N/A',
      email: appt.Visitor.email || 'N/A',
      phone: appt.Visitor.phone || 'N/A',
      purpose: appt.purpose_of_visit || 'N/A',
      populationCount: appt.population_count || 0,
      preferredDate: appt.preferred_date || 'N/A',
      preferredTime: appt.preferred_time || 'N/A',
      notes: appt.additional_notes || 'N/A',
      organization: appt.Visitor.organization || 'N/A',
      street: appt.Visitor.street || '',
      barangay: appt.Visitor.barangay || '',
      city_municipality: appt.Visitor.city_municipality || '',
      province: appt.Visitor.province || ''
    })
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setModalData(null)
  }

  /**
   * Example: Just a simple alert for now whenever user clicks "Send" in the modal.
   * We’ll update the status in the modal’s handleSend or pass a callback here.
   */
  const handleSend = () => {
    alert('Message sent to ' + (modalData?.email || 'visitor'))
    setShowModal(false)
  }

  // console.log(appointments);

  return (
    <>
      <div className="w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]">
        {/* Left Nav */}
        <div className="bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto">
          <AdminNav />
        </div>

        {/* Main Content */}
        <div className="w-full h-full flex flex-col gap-y-10 px-7 pb-7 pt-[4rem] overflow-scroll">
          <span className="text-5xl font-semibold">Appointments</span>
          <div className="w-full h-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 xl:gap-x-5">

            {/* Left panel (stats, info, etc.) */}
            <div className="min-w-[34rem] h-full flex flex-col gap-y-7">
              {/* Info bar */}
              <div className="w-full max-w-[35rem] text-gray-500 min-h-[5rem] flex py-2 gap-x-2">
                <button className="px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer">
                  <span className="text-2xl font-semibold">Forms</span>
                </button>
                <button className="px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer">
                  <span className="text-2xl font-semibold">Attendance</span>
                </button>
                <button className="px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer">
                  <span className="text-2xl font-semibold">Visitor Records</span>
                </button>
              </div>

              <div className="w-full h-full flex flex-col gap-y-[5rem]">
                <div className="bg-[#161616] px-4 h-[5rem] flex justify-between items-center rounded-sm">
                  <span className="text-2xl text-white font-semibold">Total Appointments</span>
                  <div className="w-[6rem] h-[3rem] bg-[#D4DBFF] flex items-center justify-center rounded-md">
                    <span className="text-2xl text-black font-semibold">
                      {appointments.length}
                    </span>
                  </div>
                </div>

                {/* Example placeholder stats */}
                <div className="w-full h-auto flex flex-col gap-y-7">
                  <span className="text-2xl font-semibold text-[#727272]">January 8, 2025</span>
                  <div className="w-full h-fit flex justify-between items-center">
                    <span className="text-2xl font-semibold ">Approved</span>
                    <div className="w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center">
                      <span className="text-2xl font-semibold">580</span>
                    </div>
                  </div>
                  <div className="w-full h-fit flex justify-between items-center">
                    <span className="text-2xl font-semibold ">Reflected</span>
                    <div className="w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center">
                      <span className="text-2xl font-semibold">13</span>
                    </div>
                  </div>
                  <div className="w-full h-fit flex justify-between items-center">
                    <span className="text-2xl font-semibold ">Expected Visitors</span>
                    <div className="w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center">
                      <span className="text-2xl font-semibold">1603</span>
                    </div>
                  </div>
                  <div className="w-full h-fit flex justify-between items-center">
                    <span className="text-2xl font-semibold ">Present</span>
                    <div className="w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center">
                      <span className="text-2xl font-semibold">1523</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section with table */}
            <div className="w-full h-full flex flex-col gap-y-7 overflow-x-scroll overflow-y-scroll">
              {/* Controls above table */}
              <div className="min-w-[94rem] min-h-[5rem] py-2 flex items-center gap-x-2">
                <div className="flex-shrink-0">
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    popperPlacement="bottom-start"
                    popperClassName="z-50"
                    customInput={
                      <button className="px-3 h-16 rounded-lg border-1 border-gray-500 cursor-pointer">
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

              {/* Table Header */}
              <div className="min-w-[94rem] w-full font-semibold h-fit grid grid-cols-6 justify-between">
                <div className="text-[#727272] text-2xl border-l-1 px-3 py-2">
                  Creation Date
                </div>
                <div className="text-[#727272] text-2xl border-l-1 px-3 py-2">
                  Visitor Name
                </div>
                <div className="text-[#727272] text-2xl border-l-1 px-3 py-2">
                  Preferred Time
                </div>
                <div className="text-[#727272] text-2xl border-l-1 px-3 py-2">
                  Status
                </div>
                <div className="text-[#727272] text-2xl border-l-1 px-3 py-2">
                  Visitor Count
                </div>
                <div className="text-[#727272] flex items-center text-2xl border-l-1 pl-3">
                  Updated
                </div>
              </div>

              {/* Table Data */}
              <div className="w-full min-w-[94rem] h-auto flex flex-col border-t-1 border-t-gray-400">
                {appointments.map((appt) => (
                  <div
                    key={appt.appointment_id}
                    className="min-w-[94rem] text-xl h-fit font-semibold grid grid-cols-6 cursor-pointer hover:bg-gray-300"
                    onClick={() => handleRowClick(appt)}
                  >
                    <div className="px-4 pt-1 pb-3 border-b-1 border-gray-400">
                      {appt.preferred_date}
                    </div>
                    <div className="px-4 pt-1 pb-3 border-b-1 border-gray-400">
                      {appt.Visitor?.first_name} {appt.Visitor?.last_name}
                    </div>
                    <div className="px-4 pt-1 pb-3 border-b-1 border-gray-400">
                      {appt.preferred_time}
                    </div>
                    <div className="px-4 py-4 border-b-1 border-gray-400">
                      {/* This is just a visual placeholder. You can render the actual status from your DB if needed. */}
                      <span className="text-white bg-[#4CAF50] rounded-md px-4 py-1">
                        Confirmed
                      </span>
                    </div>
                    <div className="px-4 py-4 border-b-1 border-gray-400">
                      {appt.population_count}
                    </div>
                    <div className="px-4 pt-1 pb-3 border-b-1 border-gray-400 flex items-center">
                      {appt.creation_date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AppointmentModal
        showModal={showModal}
        modalData={modalData}
        onClose={handleCloseModal}
        onSend={handleSend}
        approveVisit={approveVisit}
        setApproveVisit={setApproveVisit}
        updateAppointmentStatus={updateAppointmentStatus} // pass function to modal
      />
    </>
  )
}

export default Appointment
