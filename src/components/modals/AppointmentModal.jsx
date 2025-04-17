import React from 'react'

const AppointmentModal = ({
  showModal,
  modalData,
  onClose,
  onSend,
  approveVisit,
  setApproveVisit,
  updateAppointmentStatus
}) => {
  if (!showModal || !modalData) return null

  /**
   * Example: We decide the status based on the radio selection:
   *  - yes => 'CONFIRMED'
   *  - no => 'REJECTED'
   *  - fail => 'FAILED'
   *  - otherwise => 'TO_REVIEW'
   */
  const handleSend = async () => {
    // If you need more conditions, adjust accordingly
    let newStatus = 'TO_REVIEW'
    if (approveVisit === 'yes') {
      newStatus = 'CONFIRMED'
    } else if (approveVisit === 'no') {
      newStatus = 'REJECTED'
    } else if (approveVisit === 'fail') {
      newStatus = 'FAILED'
    }

    // Call the parent method to update status in the DB
    try {
      await updateAppointmentStatus(modalData.appointmentId, newStatus)
      // Optionally call onSend for any other logic (like sending an email)
      onSend()
    } catch (err) {
      console.error('Error while updating status:', err)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-100 rounded-md shadow-lg pt-15 p-6 w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 text-lg font-bold cursor-pointer"
          onClick={onClose}
        >
          X
        </button>

        {/* Date Sent */}
        <div className="text-right text-sm text-blue-500 mb-4">
          {modalData.dateSent}
        </div>

        {/* Information Section */}
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <div className="flex mb-4">
            <div className="font-bold w-[50px] text-gray-700">From:</div>
            <div className="flex flex-1 flex-wrap justify-start gap-x-5">
              <div className="text-center">
                <span className="text-blue-500">
                  {modalData.fromFirstName}
                </span>
                <div className="text-xs text-gray-500">First Name</div>
              </div>
              <div className="text-center">
                <span className="text-blue-500">
                  {modalData.fromLastName}
                </span>
                <div className="text-xs text-gray-500">Last Name</div>
              </div>
            </div>
          </div>

          <p className="mb-2">
            <span className="font-semibold">Email:</span>{' '}
            <span className="text-blue-500">{modalData.email}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone Number:</span>{' '}
            <span className="text-blue-500">{modalData.phone}</span>
          </p>

          <div className="flex mb-4">
            <div className="font-bold w-[50px] text-gray-700">Address:</div>
            <div className="flex flex-1 flex-wrap justify-start gap-x-5">
              <div className="text-center">
                <span className="text-blue-500">{modalData.street}</span>
                <div className="text-xs text-gray-500">Street</div>
              </div>
              <div className="text-center">
                <span className="text-blue-500">{modalData.barangay}</span>
                <div className="text-xs text-gray-500">Barangay</div>
              </div>
              <div className="text-center">
                <span className="text-blue-500">{modalData.city_municipality}</span>
                <div className="text-xs text-gray-500">City/Municipality</div>
              </div>
              <div className="text-center">
                <span className="text-blue-500">{modalData.province}</span>
                <div className="text-xs text-gray-500">Province</div>
              </div>
            </div>
          </div>

          <p className="mb-2">
            <span className="font-semibold">Purpose of Visit:</span>{' '}
            <span className="text-blue-500">{modalData.purpose}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Organization:</span>{' '}
            <span className="text-blue-500">{modalData.organization}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Population Count:</span>{' '}
            <span className="text-blue-500">{modalData.populationCount}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Preferred Date:</span>{' '}
            <span className="text-blue-500">{modalData.preferredDate}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Preferred Time:</span>{' '}
            <span className="text-blue-500">{modalData.preferredTime}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Notes:</span>{' '}
            <span className="text-blue-500">{modalData.notes}</span>
          </p>
        </div>

        <hr className="my-4" />

        {/* Approve/Respond Section */}
        <h3 className="text-lg font-bold mb-2">Respond</h3>
        <div className="mb-4">
          <span className="font-semibold mr-2">Approve Visit?</span>
          <label
            className={`border px-4 py-1 mr-2 rounded inline-flex items-center cursor-pointer ${approveVisit === 'yes' ? 'bg-green-100 border-green-400' : 'hover:bg-gray-200'
              }`}
          >
            <input
              type="radio"
              name="approveVisit"
              value="yes"
              className="hidden"
              checked={approveVisit === 'yes'}
              onChange={() => setApproveVisit('yes')}
            />
            <span>Yes</span>
          </label>
          <label
            className={`border px-4 py-1 rounded inline-flex items-center cursor-pointer ${approveVisit === 'no' ? 'bg-red-100 border-red-400' : 'hover:bg-gray-200'
              }`}
          >
            <input
              type="radio"
              name="approveVisit"
              value="no"
              className="hidden"
              checked={approveVisit === 'no'}
              onChange={() => setApproveVisit('no')}
            />
            <span>No</span>
          </label>

          {/* Optional radio for "visitor did not come" => 'FAILED' */}
          <label
            className={`border px-4 py-1 ml-2 rounded inline-flex items-center cursor-pointer ${approveVisit === 'fail' ? 'bg-yellow-100 border-yellow-400' : 'hover:bg-gray-200'
              }`}
          >
            <input
              type="radio"
              name="approveVisit"
              value="fail"
              className="hidden"
              checked={approveVisit === 'fail'}
              onChange={() => setApproveVisit('fail')}
            />
            <span>Visitor Did Not Come</span>
          </label>
        </div>

        <label className="block mb-2 font-semibold">Leave a message</label>
        <textarea
          className="w-full h-24 p-2 border border-gray-400 rounded"
          defaultValue="The only available date is December 12, 2024"
        />
        <p className="text-sm text-gray-500 mt-1">
          This will automatically send to {modalData.email}
        </p>

        <div className="text-right mt-4">
          <button
            className="bg-[#9C7744] text-white px-5 py-2 rounded hover:opacity-90"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal
