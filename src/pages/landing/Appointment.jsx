
import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const Appointment = () => {
  return (
    <>
      <div className=' flex flex-col gap-y-4 min-h-fit h-auto w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav />
        </div>


        <div className='max-w-full h-auto bg-white py-6 font-medium font-[HinaMincho] shadow-lg px-20'>
          <span className='text-5xl'>Appointment Form</span>
        </div>

        <div className='flex-col w-[140rem] 3xl:w-[180rem] mx-auto h-[200rem] flex min-h-[89%] gap-y-10 mt-4'>

          <div className='flex w-fit gap-x-5'>
            <div className='flex mx-auto min-w-[30rem] flex-col font-[HindKochi] text-xl'>
              <div className='flex items-center gap-x-3'>
                <i className="text-3xl fa-solid fa-clock"></i>
                <span className='font-bold'>Museo Bulawan</span>
              </div>
              <span className='ml-11'>Open Daily 9:00am-5:00pm, Monday- Friday,</span>
            </div>
            <div className='flex mx-auto min-w-[30rem] flex-col font-[HindKochi] text-xl'>
              <div className='flex items-center gap-x-3'>
                <i class="text-3xl fa-solid fa-location-dot"></i>
                <span className='font-bold'>Museum Location</span>
              </div>
              <span className='ml-9'>Camarines Norte Provincial Capitol Grounds, Daet Philippines</span>
            </div>
          </div>

          <div className='w-fit mx-3 bg-[#EAEADA] h-fit p-10'>
            <form className='flex flex-col gap-8 text-lg md:text-xl'>

              {/* Name */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Name <span className='text-red-500'>*</span></label>
                <input type='text' placeholder='First Name' required className='px-6 py-3 rounded-full border col-span-1' />
                <input type='text' placeholder='Last Name' required className='px-6 py-3 rounded-full border col-span-2' />
              </div>

              {/* Email */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Email <span className='text-red-500'>*</span></label>
                <input type='email' placeholder='example@gmail.com' required className='col-span-3 px-6 py-3 rounded-full border' />
              </div>

              {/* Phone Number */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Phone Number</label>
                <input type='tel' placeholder='+6309123456789' className='col-span-3 px-6 py-3 rounded-full border' />
              </div>

              {/* Province and City */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Province <span className='text-red-500'>*</span></label>
                <input type='text' defaultValue='Camarines Norte' required className='px-6 py-3 rounded-full border' />

                <label className='font-bold md:text-right'>City <span className='text-red-500'>*</span></label>
                <input type='text' placeholder='City' required className='px-6 py-3 rounded-full border' />
              </div>

              {/* Barangay and Street */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Barangay <span className='text-red-500'>*</span></label>
                <input type='text' placeholder='Barangay' required className='px-6 py-3 rounded-full border' />

                <label className='font-bold md:text-right'>Street</label>
                <input type='text' placeholder='Street' className='px-6 py-3 rounded-full border' />
              </div>

              {/* Organization */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Organization</label>
                <input type='text' placeholder='School/Institution/etc' className='col-span-3 px-6 py-3 rounded-full border' />
              </div>

              {/* Purpose of Visit */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-start'>
                <label className='font-bold'>Purpose of Visit <span className='text-red-500'>*</span></label>
                <select required className='col-span-3 px-6 py-3 rounded-full border'>
                  <option value="">Choose Purpose</option>
                  <optgroup label="Educational Purposes">
                    <option>Research</option>
                    <option>Thesis or Dissertation Work</option>
                    <option>School Field Trip</option>
                    <option>Workshops or Classes</option>
                  </optgroup>
                  <optgroup label="Professional Engagements">
                    <option>Interviews</option>
                    <option>Collaboration Meetings</option>
                    <option>Photography or Media Projects</option>
                    <option>Conservation Consultation</option>
                    <option>Donations</option>
                    <option>Others</option>
                  </optgroup>
                </select>
              </div>

              {/* Population Count */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                <label className='font-bold'>Population Count <span className='text-red-500'>*</span></label>
                <input type='number' min='1' required className='col-span-3 px-6 py-3 rounded-full border' />
              </div>

              {/* Preferred Date */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-start'>
                <label className='font-bold'>Select your preferred Date <span className='text-red-500'>*</span></label>
                <input type='date' required className='col-span-3 px-6 py-3 rounded-full border' />
              </div>

              {/* Additional Notes */}
              <div className='flex flex-col gap-2'>
                <label className='font-bold'>Additional Notes</label>
                <textarea rows='6' placeholder='Additional Notes' className='px-6 py-4 rounded-2xl border resize-none' />
              </div>

              {/* Submit Button */}
              <div className='flex justify-end'>
                <button type='submit' className='bg-[#524433] text-white px-10 py-3 rounded-full hover:bg-[#3e3428] transition'>
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

      <div className='w-screen h-auto min-h-screen'>
        <div className='w-[140rem] max-w-[140rem] 3xl:max-[180rem] mx-auto h-[200rem] flex min-h-screen '>

        </div>

      </div>

    </>
  )
}

export default Appointment
