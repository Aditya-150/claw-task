import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../redux/actions/formSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "lucide-react";

const ChoosePreference = () => {
  const dispatch = useDispatch();
  const step2Data = useSelector(
    (state) => state.form?.step2Data || { date: "", time: "", location: "" }
  );
  const [formData, setFormData] = useState(step2Data);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("step2Data");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (formData !== step2Data) {
      setFormData(step2Data);
    }
  }, [step2Data]);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    dispatch(setStep2Data(formData));
    localStorage.setItem("step2Data", JSON.stringify(formData));
  }, [formData, dispatch]);

  const isSunday = (date) => {
    const day = date.getDay();
    return day === 0; // 0 represents Sunday
  };

  const generateTimeSlots = (date) => {
    const slots = [];
    const day = new Date(date).getDay();
    if (day === 6) {
      // 6 represents Saturday
      for (let i = 15; i <= 23; i++) {
        slots.push(`${i.toString().padStart(2, "0")}:00`);
      }
    } else {
      for (let i = 0; i <= 23; i++) {
        slots.push(`${i.toString().padStart(2, "0")}:00`);
      }
    }
    return slots;
  };

  const timeSlots = formData.date ? generateTimeSlots(formData.date) : [];

  return (
    <div>
      <h3 className="mt-10 font-semibold text-xl">Choose Your Preferences</h3>
      <p className="mb-6 text-gray-600">
        Please enter your preferable date, time, and location. Just a quick
        note, our services are active 24*7 on weekdays, 3PM to 12AM on
        Saturdays, and we are off on Sundays.
      </p>
      <div className="relative mb-4 w-full flex">
        <DatePicker
          showIcon
          icon={
            <CalendarDaysIcon className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 cursor-pointer" />
          }
          todayButton
          selected={formData.date ? new Date(formData.date) : null}
          onChange={(date) => {
            handleChange("date", date.toISOString().split("T")[0]);
            setShowMessage(false);
          }}
          toggleCalendarOnIconClick
          filterDate={(date) => !isSunday(date)}
          minDate={new Date("2023-01-01")}
          maxDate={new Date("2030-01-01")}
          placeholderText="Select Date"
          dateFormat="yyyy-MM-dd"
          className="border p-2 w-full rounded"
          wrapperClassName="w-full"
          popperClassName="w-full"
        />
      </div>
      <div className={`relative w-full ${showMessage ? "mb-2" : "mb-4"}`}>
        <div
          className={`appearance-none border py-2 px-6 rounded  w-full bg-white cursor-pointer flex justify-between items-center ${
            !formData.date ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (formData.date) {
              setIsDropdownOpen(!isDropdownOpen);
            } else {
              setShowMessage(true);
            }
          }}
        >
          <span className={`${formData.time ? "text-black" : "text-gray-500"}`}>
            {formData.time || "Choose a time slot"}
          </span>
          <svg
            className={`w-4 h-4 text-gray-500 transform transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {isDropdownOpen && formData.date && (
          <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 h-96 overflow-y-scroll overflow-x-hidden">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                onClick={() => {
                  handleChange("time", slot);
                  setIsDropdownOpen(false);
                }}
                className="cursor-pointer select-none relative py-2 px-4 text-black hover:bg-primary hover:text-white"
              >
                {slot}
              </div>
            ))}
          </div>
        )}
      </div>
      {showMessage && (
        <p className="text-red-500 mb-4 text-sm">
          Please select a date before choosing a time slot.
        </p>
      )}
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        placeholder="Location"
        className="border py-2 px-6 rounded w-full placeholder:text-gray-400"
      />
    </div>
  );
};

export default ChoosePreference;
