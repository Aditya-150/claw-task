import { CalendarHeartIcon, MailCheckIcon, PawPrintIcon } from "lucide-react";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl pt-40 2xl:px-0 px-6" id="features">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
              Enjoy a Hassle-Free Horse Ride Experience
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-primary-light p-4 md:p-5 rounded-xl active"
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex">
                  <PawPrintIcon className="size-7 md:size-8 hs-tab-active:text-primary-dark text-gray-800" />
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-primary-dark text-gray-800">
                      Meet Your Match
                    </span>
                    <span className="block mt-1 text-gray-800">
                      Choose from our 4 amazing horses, each with their own
                      unique personality!
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-primary-light p-4 md:p-5 rounded-xl"
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex">
                  <CalendarHeartIcon className="size-7 md:size-8 hs-tab-active:text-primary-dark text-gray-800" />
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-primary-dark text-gray-800">
                      Flexible Booking
                    </span>
                    <span className="block mt-1 text-gray-800">
                      Schedule your ride on weekdays & Saturdays between 3 PM -
                      12 AM.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-primary-light p-4 md:p-5 rounded-xl"
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex">
                  <MailCheckIcon className="size-7 md:size-8 hs-tab-active:text-primary-dark text-gray-800" />
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-primary-dark text-gray-800">
                      Instant Confirmation
                    </span>
                    <span className="block mt-1 text-gray-800">
                      Get a confirmation notification with a calendar invite
                      upon booking!
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  className="group shadow-xl shadow-gray-200 rounded-xl overflow-hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <img
                    className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1667994530352-c6ffe62b1dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvcnNlJTIwbG92ZXxlbnwwfDF8MHx8fDI%3D"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden group shadow-xl shadow-gray-200 rounded-xl overflow-hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden group shadow-xl shadow-gray-200 rounded-xl overflow-hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1678227547309-f25998d4fc86?w=500&auto=format&fit=crop&q=60"
                    alt="Image Description"
                  />
                </div>
              </div>
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-primary-dark"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-secondary w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </section>
  );
}
