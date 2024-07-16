import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChooseHorse from "../ChooseHorse/ChooseHorse";
import ChoosePreference from "../ChoosePreference/ChoosePreference";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import {
  setStep1Data,
  setStep2Data,
  setStep3Data,
} from "../../redux/actions/formSlice";
import { gapi } from "gapi-script";
import { loadClient } from "../../api/googleApi"; // Adjust the path as needed
import Toast from "../Toast/Toast";
import sendEmail from "../../utils/sendEmail";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const step1Data = useSelector((state) => state.form?.step1Data || {});
  const step2Data = useSelector((state) => state.form?.step2Data || {});
  const step3Data = useSelector((state) => state.form?.step3Data || {});

  useEffect(() => {
    console.log("Loading GAPI client...");
    loadClient();
  }, []);

  useEffect(() => {
    const storedStep = localStorage.getItem("currentStep");
    if (storedStep) {
      setCurrentStep(Number(storedStep));
    }

    const storedStep1Data = localStorage.getItem("step1Data");
    if (storedStep1Data) {
      dispatch(setStep1Data(JSON.parse(storedStep1Data)));
    }

    const storedStep2Data = localStorage.getItem("step2Data");
    if (storedStep2Data) {
      dispatch(setStep2Data(JSON.parse(storedStep2Data)));
    }

    const storedStep3Data = localStorage.getItem("step3Data");
    if (storedStep3Data) {
      dispatch(setStep3Data(JSON.parse(storedStep3Data)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep === 1) {
      localStorage.setItem("step1Data", JSON.stringify(step1Data));
    } else if (currentStep === 2) {
      localStorage.setItem("step2Data", JSON.stringify(step2Data));
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handleBack = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleReset = () => {
    dispatch(setStep1Data({ horse: "" }));
    dispatch(setStep2Data({ date: "", time: "", location: "" }));
    dispatch(setStep3Data({ name: "", email: "", phone: "" }));
    localStorage.removeItem("step1Data");
    localStorage.removeItem("step2Data");
    localStorage.removeItem("step3Data");
    localStorage.setItem("currentStep", 1);
    setCurrentStep(1);
  };

  const handleFinish = async () => {
    localStorage.setItem("step3Data", JSON.stringify(step3Data));

    console.log("Step 2 Data:", step2Data);

    if (!step2Data?.date || !step2Data?.time) {
      console.error("Invalid date or time value: date or time is missing");
      return;
    }

    const startDateTime = new Date(`${step2Data?.date}T${step2Data?.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60000);

    console.log("Start DateTime:", startDateTime);
    console.log("End DateTime:", endDateTime);

    if (isNaN(startDateTime) || isNaN(endDateTime)) {
      console.error("Invalid date or time value: unable to parse date or time");
      return;
    }

    const event = {
      summary: "Horse Ride Booking",
      description: `Your ${step1Data?.horse} horse ride booking details`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "America/Los_Angeles",
      },
      attendees: [{ email: step3Data?.email }],
    };

    try {
      await gapi.client.load("calendar", "v3");
      const authInstance = gapi.auth2.getAuthInstance();
      if (!authInstance.isSignedIn.get()) {
        await authInstance.signIn();
      }

      const response = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      if (response.status === 200) {
        console.log("Event created: ", response.result);
        const formattedDateTime = `${step2Data?.time}, ${new Date(
          step2Data?.date
        ).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}`;
        setToastMessage(
          `Your ${step1Data?.horse} ride has been booked for ${formattedDateTime}!`
        );
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
         await sendEmail({
           horse: step1Data?.horse,
           date: new Date(step2Data?.date).toLocaleDateString("en-US", {
             day: "2-digit",
             month: "short",
             year: "numeric",
           }),
           time: step2Data?.time,
           location: step2Data?.location,
           eventLink: eventLink,
           name: step3Data?.name,
           to: step3Data?.email,
         });
        handleReset();
      } else {
        console.error("Error creating event: ", response.result);
      }
    } catch (error) {
      console.error("Error creating event: ", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div>
        <ul className="relative flex flex-row gap-x-2">
          {[1, 2, 3].map((step) => (
            <li
              key={step}
              className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
                currentStep >= step ? "hs-stepper-success" : ""
              }`}
            >
              <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                <span
                  className={`size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full ${
                    currentStep === step ? "bg-primary text-white" : ""
                  }`}
                >
                  {step}
                </span>
                <span className="ms-2 text-sm font-medium text-gray-800">
                  Step {step}
                </span>
              </span>
              {step < 3 && (
                <div
                  className={`w-full h-px flex-1 bg-gray-200 group-last:hidden ${
                    currentStep - 1 >= step ? "bg-primary" : ""
                  }`}
                ></div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-5 sm:mt-8">
          <div style={{ display: currentStep === 1 ? "block" : "none" }}>
            <ChooseHorse />
          </div>

          <div style={{ display: currentStep === 2 ? "block" : "none" }}>
            <ChoosePreference />
          </div>

          <div style={{ display: currentStep === 3 ? "block" : "none" }}>
            <PersonalInfo />
          </div>

          <div className="mt-5 flex justify-between items-center gap-x-2">
            {currentStep < 3 && (
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary-dark disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleNext}
              >
                Next
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            )}
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Back
            </button>

            {currentStep === 3 && (
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary-dark disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleFinish}
              >
                Finish
              </button>
            )}

            {currentStep === 3 && (
              <button
                type="reset"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary-dark disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleReset}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {showToast && <Toast message={toastMessage} />}
    </div>
  );
};

export default Form;
