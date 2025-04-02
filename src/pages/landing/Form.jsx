
import { ScrollRestoration } from 'react-router-dom';
import LandingNav from '../../components/navbar/LandingNav'
import React, { useState } from 'react';
const Form = () => {
  const [formType, setFormType] = useState("donation"); // Default to Donation Form
  return (
    <>
      <ScrollRestoration />

      <div className=' flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav/>
        </div>

        <div className='h-auto min-h-[79rem] w-screen'>
       

        {/* Header */}
        <div className='w-full bg-white py-6 font-medium font-[HinaMincho] shadow-lg my-2 px-20'>
          <span className='text-5xl'>Contribution Form</span>
        </div>

        {/* Info Section */}
        <div className='w-auto h-auto mx-20 py-4 px-12'>
          <span className='text-xl font-[HinaMincho]'>
            In addition to preserving your historic objects, it is important to remember to preserve the history or story
            that goes with them. For example, the uniform worn by your great-grandfather is just a uniform if the story 
            is lost. Take the time to write down the story that goes with your objects; include any background details 
            that would help our team understand the significance of the item.
          </span>

          {/* Dropdown Selection */}
          <div className='mt-8'>
            <span className='text-2xl font-semibold mr-7'>What Type of Form?</span>
            <select
              className='ml-3 p-2 border rounded-md cursor-pointer'
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
            >
              <option value="donation">Donation Form</option>
              <option value="lending">Lending Form</option>
            </select>
          </div>

          {/* Form Sections */}
          <div>
            <div className="px-6 p-3 bg-white rounded-md shadow-lg mt-3 mb-5 " >
                <span className='text-4xl'>Tell Us About Yourself.</span>
                <div className="grid grid-cols-12 items-center gap-4 mt-6">
                    <label htmlFor="firstName" className="col-span-3 text-xl font-bold">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="First Name" 
                        required
                        className="col-span-4 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Last Name" 
                        required
                        className="col-span-4 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />
                </div>
                {/* Age and Gender Section */}
                <div className="grid grid-cols-12 items-center gap-4 mt-6 ">
                    {/* Age Input */}
                    <label htmlFor="age" className="col-span-3 text-xl font-bold">
                        Age <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="age" 
                        name="age" 
                        placeholder="Age" 
                        pattern="\d*" 
                        inputmode="numeric"
                        required
                        className="col-span-2 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />


                    {/* Gender Selection */}
                    <label className="col-span-2 text-xl font-bold pl-12">Sex</label>
                    <div className="col-span-5 flex gap-6">
                        <label className="inline-flex items-center">
                            <input type="radio" name="sex" id="male" value="male" className="form-radio" />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="sex" id="female" value="female" className="form-radio" />
                            <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="sex" id="others" value="others" className="form-radio" />
                            <span className="ml-2">Others</span>
                        </label>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="grid grid-cols-12 items-center gap-4 mt-6">
                    <label htmlFor="email" className="col-span-3 text-xl font-bold">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@gmail.com" 
                        required
                        className="col-span-4 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />

                    <label htmlFor="phone" className="col-span-2 text-xl font-bold">
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="+6309123456789" 
                        required
                        className="col-span-3 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />
                </div>

                {/* Organization Section */}
                <div className="grid grid-cols-12 items-center gap-4 mt-6">
                    <label htmlFor="organization" className="col-span-3 text-xl font-bold">Organization</label>
                    <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        placeholder="School/Institution/etc"
                        className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />
                </div>

                {/* Address Section */}
                <h3 className="text-3xl font-semibold mt-6">Where do you live</h3>

                <div className="grid grid-cols-12 items-center gap-4 mt-6">
                    <label htmlFor="province" className="col-span-3 text-xl font-bold">
                        Province <span className="text-red-500">*</span>
                    </label>
                    <select 
                        id="province" 
                        name="province" 
                        required
                        className="col-span-4 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    >
                        <option value="" disabled selected>Select Province</option>
                        <option value="camarines-norte">Camarines Norte</option>
                        <option value="province-1">Province 1</option>
                        <option value="province-2">Province 2</option>
                        <option value="province-3">Province 3</option>
                    </select>

                    <label htmlFor="city" className="col-span-2 text-xl font-bold">
                        City <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        placeholder="City" 
                        required
                        className="col-span-3 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                    />
                </div>

            <div className="grid grid-cols-12 items-center gap-4 mt-6">
                <label htmlFor="barangay" className="col-span-3 text-xl font-bold">
                    Barangay <span className="text-red-500">*</span>
                </label>
                <input 
                    type="text" 
                    id="barangay" 
                    name="barangay" 
                    placeholder="Barangay" 
                    required
                    className="col-span-4 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                />

                <label htmlFor="street" className="col-span-2 text-xl font-bold">Street</label>
                <input 
                    type="text" 
                    id="street" 
                    name="street" 
                    placeholder="Street"
                    className="col-span-3 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                />
            </div>

                
            </div>

            {/* Extra div for Lending Form */}
                {formType === "lending" && (
                    <div className="p-3 bg-white rounded-md shadow-lg">
                        <span className="text-3xl font-semibold mb-8">Lending Details</span>
                        <div>
                            <div className="grid grid-cols-12 items-center gap-4 mt-6">
                                <label htmlFor="loanDuration" className="col-span-3 text-xl font-bold">
                                    Proposed duration of the loan? <span className="text-red-500">*</span>
                                </label>
                                <div className="col-span-9">
                                    <input 
                                        type="text" 
                                        id="loanDuration" 
                                        name="loanDuration" 
                                        placeholder="Enter duration" 
                                        required
                                        className="w-full px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                                    />
                                    <p className="text-gray-500 text-sm mt-2">
                                        Specific duration (e.g., 5 years), Month yyyy - Month dd, yyyy
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 items-center gap-4 mt-6">
                                <label htmlFor="loanDuration" className="col-span-3 text-xl font-bold">
                                Specific conditions or requirements for the display or handling of the artifact? <span className="text-red-500">*</span>
                                </label>
                                <div className="col-span-9">
                                    <input 
                                        type="text" 
                                        id="loanDuration" 
                                        name="loanDuration" 
                                        placeholder="Enter Specific Conditions" 
                                        required
                                        className="w-full px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                                    />
                                
                                </div>
                            </div>

                            <div className="grid grid-cols-12 items-center gap-4 mt-6">
                                <label htmlFor="loanDuration" className="col-span-3 text-xl font-bold">
                                Specific liability concerns or requirements you have regarding the artifact? <span className="text-red-500">*</span>
                                </label>
                                <div className="col-span-9">
                                    <input 
                                        type="text" 
                                        id="loanDuration" 
                                        name="loanDuration" 
                                        placeholder="Enter Liability Concerns" 
                                        required
                                        className="w-full px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                                    />
                                
                                </div>
                            </div>

                            <div className="grid grid-cols-12 items-center gap-4 mt-6">
                                <label htmlFor="loanDuration" className="col-span-3 text-xl font-bold">
                                Reason for lending. <span className="text-red-500">*</span>
                                </label>
                                <div className="col-span-9">
                                    <input 
                                        type="text" 
                                        id="loanDuration" 
                                        name="loanDuration" 
                                        placeholder="Reason" 
                                        required
                                        className="w-full px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
                                    />
                                
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            <div className="p-3 bg-white rounded-md shadow-lg mt-3">
                
        {/* Section Title */}
        <h3 className="text-3xl font-semibold mb-8">About the Artifact</h3>

        {/* Title/Name Section */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="artifactTitle" className="col-span-3 text-xl font-bold">
                Title/Name of the Artifact <span className="text-red-500">*</span>
            </label>
            <input 
                type="text" 
                id="artifactTitle" 
                name="artifactTitle" 
                placeholder="Title/Name of the Artifact" 
                required
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
            />
        </div>

        {/* Artifact Description */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="artifactDescription" className="col-span-3 text-xl font-bold">
                Artifact Description <span className="text-red-500">*</span>
            </label>
            <textarea 
                id="artifactDescription" 
                name="artifactDescription" 
                placeholder="Artifact Description" 
                required
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm h-32 resize-none"
            />
        </div>

        {/* Acquisition Details */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="acquisition" className="col-span-3 text-xl font-bold">
                How and where did you acquire the artifact? <span className="text-red-500">*</span>
            </label>
            <input 
                type="text" 
                id="acquisition" 
                name="acquisition" 
                placeholder="Acquisition Details" 
                required
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
            />
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="additionalInfo" className="col-span-3 text-xl font-bold">
                Additional Information
            </label>
            <textarea 
                id="additionalInfo" 
                name="additionalInfo" 
                placeholder="Is there any other information about the artifact that the museum should know?"
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm h-32 resize-none"
            />
        </div>

        {/* Narrative or Story */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="narrative" className="col-span-3 text-xl font-bold">
                Brief Narrative or Story
            </label>
            <textarea 
                id="narrative" 
                name="narrative" 
                placeholder="Would you like to provide a brief narrative or story related to the artifact?"
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm h-32 resize-none"
            />
        </div>

        {/* Images of the Artifact */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="artifact_img" className="col-span-3 text-xl font-bold">
                Images of the Artifact <span className="text-red-500">*</span>
            </label>
            <input 
                type="file" 
                id="artifact_img" 
                name="artifact_img" 
                multiple
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
            />
        </div>

        {/* Relevant Documentation */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="documentation" className="col-span-3 text-xl font-bold">
                Relevant Documentation
            </label>
            <input 
                type="file" 
                id="documentation" 
                name="documentation" 
                multiple
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
            />
        </div>

        {/* Related Images */}
        <div className="grid grid-cols-12 items-center gap-4 mb-6">
            <label htmlFor="related_img" className="col-span-3 text-xl font-bold">
                Any Related Images
            </label>
            <input 
                type="file" 
                id="related_img" 
                name="related_img" 
                multiple
                className="col-span-9 px-4 py-2 border-2 border-black rounded-2xl placeholder-gray-500 text-sm"
            />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
            <button 
                type="submit" 
                className="bg-[#E8D2B7] text-white px-10 py-2 rounded-lg hover:bg-[#524433] transition"
            >
                Submit
            </button>
        </div>
                
            </div>

           
          </div>
        </div>
      
        </div>

        </div>
     
    </>
  )
}

export default Form
