import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "../../redux/actions/formSlice";
import HorseRadioInput from "./HorseRadioInput";
import { horseData as horses } from "../Form/horseData";

const ChooseHorse = () => {
  const dispatch = useDispatch();
  const step1Data = useSelector(
    (state) => state.form?.step1Data || { horse: "" }
  );
  const [formData, setFormData] = useState(step1Data);

  useEffect(() => {
    const storedData = localStorage.getItem("step1Data");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (formData !== step1Data) {
      setFormData(step1Data);
    }
  }, [step1Data]);

  const handleSelectHorse = (horseName) => {
    setFormData({ horse: horseName });
  };

  useEffect(() => {
    dispatch(setStep1Data(formData));
    localStorage.setItem("step1Data", JSON.stringify(formData));
  }, [formData, dispatch]);

  return (
    <div>
      <h3 className="mt-10 font-semibold text-xl">Choose Your Horse</h3>
      <p className="mb-6 text-gray-600">Below are 4 types of horses available. Please select one based on your requirements.</p>
      {horses.map((horse) => (
        <HorseRadioInput
          key={horse.id}
          horse={horse}
          selectedHorse={formData.horse}
          onSelect={handleSelectHorse}
        />
      ))}
    </div>
  );
};

export default ChooseHorse;
