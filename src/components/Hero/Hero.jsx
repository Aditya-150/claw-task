import { ChevronRightIcon, PhoneCallIcon } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.webp";
import CardStack from "../CardStack/CardStack";
import image1 from "../../assets/images/manipuri.jpg";
import image2 from "../../assets/images/kathiawari.jpg";
import image3 from "../../assets/images/marwari.jpg";
import image4 from "../../assets/images/zanskari.jpg";

const items = [
  {
    image: image1,
    name: "Manipuri Horse",
    price: "500",
  },
  {
    image: image2,
    name: "Kathiawari Horse",
    price: "600",
  },
  {
    image: image3,
    name: "Marwari Horse",
    price: "550",
  },
  {
    image: image4,
    name: "Zanskari Horse",
    price: "700",
  },
]

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl pt-40 2xl:px-0 px-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col xl:items-start sm:max-xl:items-center max-xl:text-center xl:basis-10/12">
          <h1 className="font-bold text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-black">
            Saddle Up for an{" "}
            <span className="text-primary inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Unforgettable</li>
                <li>Mind Blowing</li>
                <li aria-hidden="true">Unforgettable</li>
              </ul>
            </span>
            <br />
            Horse Ride Adventure!
          </h1>
          <p className="text-base text-gray-500 font-normal mt-4">
            Experience the thrill and serenity of horseback riding with our
            friendly horses. Book your ride today and create lasting memories!
          </p>
          <div>
            <div className="mt-8 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-3 select-none px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                to="/book"
              >
                Book Now
                <ChevronRightIcon className="size-4" color="white" />
              </Link>
              <Link
                className="py-3 select-none px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                to="/"
              >
                <PhoneCallIcon className="size-4" />
                Schedule a call
              </Link>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row gap-2 items-center xl:justify-start justify-center">
              <div className="flex -space-x-2">
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.pexels.com/photos/14610787/pexels-photo-14610787.jpeg"
                  alt="Image Description"
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <button
                  id="hs-avatar-group-dropdown"
                  className="hs-dropdown-toggle inline-flex items-center justify-center size-10 rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-gray-200 focus:text-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-dark transition-all text-xs"
                >
                  <span className="font-medium leading-none">100+</span>
                </button>
              </div>
              <p className="text-sm text-black font-medium">
                Successful Bookings
              </p>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex relative xl:basis-full xl:justify-center xl:items-center">
          <img
            className="inline-block size-12 rounded-full absolute -top-8 left-[440px] z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://img.freepik.com/free-photo/girl-rides-horse_1321-1268.jpg"
            alt="Image Description"
          />
          <img
            className="inline-block size-14 rounded-full absolute -top-9 left-56 z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://images.pexels.com/photos/10517036/pexels-photo-10517036.jpeg"
            alt="Image Description"
          />
          <img
            className="inline-block size-12 rounded-full absolute top-12 left-24 z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://images.pexels.com/photos/13869710/pexels-photo-13869710.jpeg"
            alt="Image Description"
          />
          <img
            className="inline-block size-10 rounded-full absolute top-40 left-8 z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://images.pexels.com/photos/13142814/pexels-photo-13142814.jpeg"
            alt="Image Description"
          />
          <img
            className="inline-block size-8 rounded-full absolute top-64 left-4 z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://img.freepik.com/free-photo/girl-rides-horse_1321-1241.jpg"
            alt="Image Description"
          />
          <img
            className="inline-block size-12 rounded-full absolute top-2 left-[21rem] z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://img.freepik.com/free-photo/woman-walking-with-horse-countryside_23-2148200913.jpg"
            alt="Image Description"
          />
          <img
            className="inline-block size-10 rounded-full absolute top-14 left-48 z-10 hover:scale-90 hover:ring-4 hover:ring-primary-light transition-all"
            src="https://images.pexels.com/photos/13514042/pexels-photo-13514042.jpeg"
            alt="Image Description"
          />

          <img src={heroImage} alt="Hero Image" className="absolute z-0" />
          <CardStack items={items} className="absolute z-10" />
        </div>
      </div>
    </section>
  );
}
