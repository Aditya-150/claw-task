import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../redux/actions/formSlice";

const ChoosePreference = () => {
  const dispatch = useDispatch();
  const step2Data = useSelector(
    (state) => state.form?.step2Data || { date: "", time: "", location: "" }
  );
  const [formData, setFormData] = useState(step2Data);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    dispatch(setStep2Data(formData));
    localStorage.setItem("step2Data", JSON.stringify(formData));
  }, [formData, dispatch]);

  return (
    <div>
      <h3>Step 2: Choose Preferences</h3>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="border p-2 mb-2 w-full"
      />
    </div>
  );
};

export default ChoosePreference;
