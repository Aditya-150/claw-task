import React from "react";

export default function Reviews() {
  return (
    <div className="text-gray-800 pt-40" id="reviews">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
            What Our Riders Say
          </h2>
        </div>

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/20">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  Omsai Mehta
                </h6>
                <p className="text-sm text-gray-500">@osm_</p>
              </div>
            </div>
            <p className="mt-8">
              Star&apos;s trail ride was incredible! Breathtaking scenery and
              the staff were so friendly. It was the perfect introduction to
              horseback riding for someone new like me.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/20">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  Jane Frost
                </h6>
                <p className="text-sm text-gray-500">@mrs_frosty</p>
              </div>
            </div>
            <p className="mt-8">
              My kids had an amazing time! The instructors were incredibly
              patient and made their very first horse ride an unforgettable
              experience. Thank you!
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/20">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/77.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  Elizabeth Hamilton
                </h6>
                <p className="text-sm text-gray-500">@elizh_</p>
              </div>
            </div>
            <p className="mt-8">
              Booking online was a breeze! Scout, the gentle giant, was a joy to
              ride. We had such a great time, I&apos;ll definitely be back for
              lessons soon!
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/20">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/99.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  Jorge Snow
                </h6>
                <p className="text-sm text-gray-500">@snow_man</p>
              </div>
            </div>
            <p className="mt-8">
              This place gets a five-star recommendation from me! The horses are
              clearly well-cared for, and the rides are wonderfully relaxing.
              It&apos;s the perfect escape from the hustle and bustle of the
              city!
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/20">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/62.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  Andrew Kay
                </h6>
                <p className="text-sm text-gray-500">@akay</p>
              </div>
            </div>
            <p className="mt-8">
              Galloping through the fields with Midnight was an exhilarating
              experience! I felt the wind in my hair and the power beneath me.
              This is a must-do for any horse lover!
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/20">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/87.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  Arianna Harrison
                </h6>
                <p className="text-sm text-gray-500">@harianna</p>
              </div>
            </div>
            <p className="mt-8">
              From the easy online booking to the actual ride itself, everything
              was absolutely perfect! Thank you for such a wonderful afternoon.
              I can&apos;t wait to come back!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
