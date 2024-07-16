import React from "react";

export default function Toast({ message }) {
  return (
    <div
      id="dismiss-toast"
      className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-1000 ease-in-out max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg z-50 fixed bottom-10 xl:right-5 max-xl:left-0 max-xl:right-0 max-xl:mx-auto"
      role="alert"
    >
      <div className="flex p-4">
        <p className="text-sm text-gray-700">{message}</p>

        <div className="ms-auto">
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
            data-hs-remove-element="#dismiss-toast"
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
