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
        email: "Please enter a valid email address. Example: hello@example.com",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (name === "phone" && !validatePhone(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number. Please enter a 10-digit number.",
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
      <h3 className="mt-10 font-semibold text-xl">Enter Personal Information</h3>
      <p className="mb-6 text-gray-600">
        Please fill out your email, name, and phone number in order to confirm your booking.
      </p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border focus:border-primary py-2 px-6 rounded mb-4 w-full"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`border focus:border-primary py-2 px-6 rounded w-full ${
          errors.email ? "border-red-500 mb-1" : "mb-4"
        }`}
      />
      {errors.email && (
        <p className="text-red-500 mb-4 text-sm">{errors.email}</p>
      )}
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className={`border focus:border-primary py-2 px-6 rounded w-full ${
          errors.email ? "border-red-500 mb-1" : "mb-4"
        }`}
      />
      {errors.phone && (
        <p className="text-red-500 mb-4 text-sm">{errors.phone}</p>
      )}
    </div>
  );
};

export default PersonalInfo;
