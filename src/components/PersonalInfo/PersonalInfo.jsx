import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep3Data } from "../../redux/actions/formSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const step3Data = useSelector(
    (state) => state.form?.step3Data || { name: "", email: "", phone: "" }
  );
  const [formData, setFormData] = useState(step3Data);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("step3Data");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (formData !== step3Data) {
      setFormData(step3Data);
    }
  }, [step3Data]);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (name === "phone" && !validatePhone(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  useEffect(() => {
    dispatch(setStep3Data(formData));
    localStorage.setItem("step3Data", JSON.stringify(formData));
  }, [formData, dispatch]);

  return (
    <div>
      <h3>Step 3: Personal Information</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 mb-2 w-full"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="border p-2 mb-2 w-full"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}
    </div>
  );
};

export default PersonalInfo;
