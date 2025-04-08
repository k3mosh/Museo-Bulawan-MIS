import React, { useState, useEffect, useRef } from 'react';
import LandingNav from '../../components/navbar/LandingNav';
import CustomDatePicker from '../../components/function/CustomDatePicker';
import useAddressLogic from '../../components/function/AddressHook';
import { ScrollRestoration } from 'react-router-dom';

/**
 * Inline typed dropdown subcomponent with a black "✖".
 * This handles:
 *  - Searching/filtering by typed input
 *  - Clicking an option to select
 *  - Clearing the selection with a black "✖"
 *  - Disabling if desired
 */
function TypedDropdown({
  placeholder,
  options,
  selectedItem,
  onChange,
  disabled = false
}) {
  const [inputText, setInputText] = useState(selectedItem?.name || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Update inputText if selectedItem changes from outside
  useEffect(() => {
    setInputText(selectedItem?.name || '');
  }, [selectedItem]);

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    onChange(item);
    setShowDropdown(false);
  };

  const handleClear = () => {
    onChange(null);
    setInputText('');
    setShowDropdown(false);
  };

  // Filter options based on typed input
  const filteredOptions = options.filter((o) =>
    o.name.toLowerCase().includes(inputText.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={`flex border-2 border-black rounded-2xl px-4 py-3 
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      >
        <input
          className="outline-none flex-grow placeholder-gray-500 text-base md:text-lg disabled:cursor-not-allowed"
          placeholder={placeholder}
          value={inputText}
          disabled={disabled}
          onChange={(e) => {
            setInputText(e.target.value);
            if (!disabled) {
              setShowDropdown(true);
            }
          }}
          onFocus={() => !disabled && setShowDropdown(true)}
        />
        {selectedItem && !disabled && (
          <button
            type="button"
            className="ml-2 text-black font-bold"
            onClick={handleClear}
          >
            X
          </button>
        )}
      </div>

      {showDropdown && !disabled && (
        <ul className="absolute z-10 mt-1 w-full max-h-48 overflow-auto bg-white border border-gray-400 shadow-md rounded-md">
          {filteredOptions.length ? (
            filteredOptions.map((o) => (
              <li
                key={o.code}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(o)}
              >
                {o.name}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}

const Appointment = () => {
  // States for your form
  const [selectedDate, setSelectedDate] = useState(null);
  const [purpose, setPurpose] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showPurposeInfo, setShowPurposeInfo] = useState(false);

  // Using the custom hook for addresses
  const {
    provinces,
    cities,
    barangays,
    selectedProvince,
    setSelectedProvince,
    selectedCity,
    setSelectedCity,
    selectedBarangay,
    setSelectedBarangay
  } = useAddressLogic();

  const togglePurposeInfo = () => setShowPurposeInfo(!showPurposeInfo);

  const isTimeRequired = (purp) =>
    purp === 'School Field Trip' || purp === 'Workshops or Classes';

  const shouldShowTimeOptions = (purp) =>
    purp === 'School Field Trip' || purp === 'Workshops or Classes' || purp === 'Others';

  return (
    <>
      <ScrollRestoration />

      <div className="w-screen h-full pt-7">
        <LandingNav />

        {/* Header */}
        <div className="w-full h-auto bg-white py-6 font-medium font-[HinaMincho] shadow-lg my-5 px-4 md:px-20">
          <span className="text-3xl md:text-5xl">Appointment Form</span>
        </div>

        {/* Main Content */}
        <div className="w-auto h-auto mx-4 md:mx-20 py-4 px-2 md:px-12">
          {/* Info Section */}
          <div className="flex flex-col md:flex-row w-full gap-x-10 gap-y-6 mb-10">
            <div className="flex flex-col font-[HindKochi] text-2xl md:text-3xl">
              <div className="flex items-center gap-x-3">
                <i className="text-4xl md:text-5xl fa-solid fa-clock"></i>
                <span className="font-bold">Museo Bulawan</span>
              </div>
              <span className="ml-9">Open Daily 9:00am-5:00pm, Monday-Friday</span>
            </div>
            <div className="flex flex-col font-[HindKochi] text-2xl md:text-3xl">
              <div className="flex items-center gap-x-3">
                <i className="text-4xl md:text-5xl fa-solid fa-location-dot"></i>
                <span className="font-bold">Museum Location</span>
              </div>
              <span className="ml-9">
                Camarines Norte Provincial Capitol Grounds, Daet Philippines
              </span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-md shadow-lg p-6 md:p-8 mb-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl md:text-4xl font-bold">Tell Us About Yourself</span>
            </div>

            <form className="mt-6 space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="md:col-span-4 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="md:col-span-4 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  className="md:col-span-4 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
                <label className="md:col-span-2 text-lg md:text-xl font-bold">Phone</label>
                <input
                  type="tel"
                  placeholder="+6309123456789"
                  className="md:col-span-3 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
              </div>

              {/* Organization */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">Organization</label>
                <input
                  type="text"
                  placeholder="School/Institution/etc"
                  className="md:col-span-9 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
              </div>

              {/* Province, City, Barangay - typed search */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                {/* Province */}
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Province <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-4">
                  <TypedDropdown
                    placeholder="Type or choose Province"
                    options={provinces}
                    selectedItem={selectedProvince}
                    onChange={setSelectedProvince}
                  />
                </div>

                {/* City */}
                <label className="md:col-span-2 text-lg md:text-xl font-bold">
                  City/Municipality <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <TypedDropdown
                    placeholder="Type or choose City"
                    options={cities}
                    selectedItem={selectedCity}
                    onChange={setSelectedCity}
                    disabled={!selectedProvince}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                {/* Barangay */}
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Barangay <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-4">
                  <TypedDropdown
                    placeholder="Type or choose Barangay"
                    options={barangays}
                    selectedItem={selectedBarangay}
                    onChange={setSelectedBarangay}
                    disabled={!selectedCity}
                  />
                </div>

                {/* Street */}
                <label className="md:col-span-2 text-lg md:text-xl font-bold">Street</label>
                <input
                  type="text"
                  placeholder="Street"
                  className="md:col-span-3 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
              </div>

              {/* Purpose of Visit */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 relative">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Purpose of Visit <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-9 gap-x-3 flex items-center">
                  <select
                    required
                    className="px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg w-full"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
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

                  <button
                    onClick={togglePurposeInfo}
                    type="button"
                    className=" w-10 h-10 flex items-center justify-center border border-black rounded-full text-2xl font-bold hover:bg-gray-200"
                    title="View purpose details"
                  >
                    ?
                  </button>

                  {showPurposeInfo && (
                    <div className="absolute z-50 w-[300px] md:w-[400px] top-full right-0 mt-2 bg-white shadow-md border border-gray-400 p-4 md:p-8 rounded-md">
                      <div className="mb-5 flex items-center">
                        <div className="rounded-full border border-black w-8 h-8 flex items-center justify-center mr-3 font-bold text-base">
                          ?
                        </div>
                        <span className="font-semibold text-xl md:text-2xl">
                          Educational Purposes
                        </span>
                      </div>
                      <ol className="list-decimal ml-8 mb-6 text-base md:text-lg">
                        <li>
                          <strong>Research:</strong> Accessing archives or materials.
                        </li>
                        <li>
                          <strong>Thesis / Dissertation:</strong> Consulting artifacts.
                        </li>
                        <li>
                          <strong>School Field Trips:</strong> Coordinating visits for classes.
                        </li>
                        <li>
                          <strong>Workshops or Classes:</strong> Organizing classes or art/history workshops.
                        </li>
                      </ol>

                      <div className="mb-5 flex items-center">
                        <div className="rounded-full border border-black w-8 h-8 flex items-center justify-center mr-3 font-bold text-base">
                          ?
                        </div>
                        <span className="font-semibold text-xl md:text-2xl">
                          Professional Engagements
                        </span>
                      </div>
                      <ol className="list-decimal ml-8 text-base md:text-lg">
                        <li>
                          <strong>Interviews:</strong> Meeting museum staff or curators.
                        </li>
                        <li>
                          <strong>Collaboration Meetings:</strong> Joint projects or exhibits.
                        </li>
                        <li>
                          <strong>Photography / Media Projects:</strong> Photo shoots or filming.
                        </li>
                        <li>
                          <strong>Conservation Consultation:</strong> Seeking advice/services.
                        </li>
                        <li>
                          <strong>Donations:</strong> Offering items or funds to the museum.
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>

              {/* Population Count */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Population Count <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  className="md:col-span-9 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-4">
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="Select your preferred date"
                    dateFormat="MMMM d, yyyy"
                    className="px-4 py-3 w-full border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg"
                  />
                </div>

                {shouldShowTimeOptions(purpose) ? (
                  <>
                    <label className="md:col-span-2 text-lg md:text-xl font-bold">
                      Select your preferred Time
                      {isTimeRequired(purpose) && <span className="text-red-500"> *</span>}
                    </label>
                    <div className="md:col-span-3 flex flex-wrap gap-2 md:gap-3">
                      {['09:00-10:29', '10:30-11:59', '01:00-02:29', '02:30-04:00'].map((time) => (
                        <label
                          key={time}
                          className={`cursor-pointer border-2 border-black px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 
                            ${selectedTime === time ? 'bg-[#cfdac8]' : ''}`}
                        >
                          <input
                            type="radio"
                            name="preferredTime"
                            value={time}
                            required={isTimeRequired(purpose)}
                            className="hidden"
                            onChange={() => setSelectedTime(time)}
                          />
                          <span className="text-sm md:text-lg font-medium">{time}</span>
                        </label>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-2"></div>
                    <div className="md:col-span-3"></div>
                  </>
                )}
              </div>

              {/* Additional Notes */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4">
                <label className="md:col-span-3 text-lg md:text-xl font-bold">
                  Additional Notes
                </label>
                <textarea
                  rows="4"
                  placeholder="Additional Notes"
                  className="md:col-span-9 px-4 py-3 border-2 border-black rounded-2xl placeholder-gray-500 text-base md:text-lg resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#524433] text-white px-6 md:px-10 py-3 rounded-full hover:bg-[#3e3428] transition text-base md:text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
