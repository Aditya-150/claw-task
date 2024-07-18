import React from 'react';
import { Link } from 'react-router-dom';
export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl pt-40 2xl:px-0 px-6" id="blog">
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <h2 className="text-left text-2xl font-bold text-gray-800 md:text-3xl">
          Some Latest Updates
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Link className="group sm:flex rounded-xl" to="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1620652151853-29b1cd304981?q=80"
              alt="Image Description"
            />
          </div>

          <div className="grow">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="mb-3">
                <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                  Business
                </p>
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-primary">
                Streamline Your Horseback Riding Business
              </h3>
              <p className="mt-2 text-gray-600">
                Boost bookings & manage rides with our software.
              </p>

              <div className="mt-5 sm:mt-auto">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-[46px] rounded-full"
                      src="https://randomuser.me/api/portraits/men/37.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-semibold text-gray-800">
                      Arun Agastya
                    </h4>
                    <p className="text-xs text-gray-500">Jul 9, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link className="group sm:flex rounded-xl" to="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1601537154601-67d78b349a3a?q=80"
              alt="Image Description"
            />
          </div>
          <div className="grow">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="mb-3">
                <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                  Announcements
                </p>
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-primary">
                New Horseback Riding Booking System Launched!
              </h3>
              <p className="mt-2 text-gray-600">
                Book rides online & manage your stable easier.
              </p>

              <div className="mt-5 sm:mt-auto">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-[46px] rounded-full"
                      src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-semibold text-gray-800">Hanna Wolfe</h4>
                    <p className="text-xs text-gray-500">Jun 4, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
