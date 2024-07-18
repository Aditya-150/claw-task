import { BadgeCheckIcon } from "lucide-react";
import React, { useState } from "react";

export default function Toast({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      id="dismiss-toast"
      className={`hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 ease-in-out max-sm:px-6 max-w-sm bg-white border border-gray-200 rounded-lg z-50 fixed bottom-1/2 left-0 right-0 mx-auto ${
        isVisible ? "" : "hidden"
      }`}
      role="alert"
    >
      <div className="flex p-4 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="size-10 flex items-center justify-center rounded-xl mb-2 bg-primary">
            <BadgeCheckIcon className="size-5 text-white" />
          </div>
          <h5 className="font-semibold text-base text-gray-800 mb-1">
            Successfully Booked!
          </h5>
          <p className="text-sm text-gray-700 text-left">
           {message}
          </p>
        </div>

        <div className="ms-auto">
          <button
            type="button"
            className="inline-flex absolute right-2 top-2 flex-shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-fit w-fit"
            data-hs-remove-element="#dismiss-toast"
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
