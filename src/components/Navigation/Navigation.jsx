import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Text_Logo.svg";
import { ChevronRightIcon } from "lucide-react";
export default function Navigation() {
  return (
    <header className="flex flex-wrap top-0 fixed sm:justify-start sm:flex-nowrap z-40 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <NavLink className="w-36" to="/" aria-label="Brand">
            <img src={logo} alt="Logo" />
          </NavLink>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden size-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
            <NavLink
              className="py-3 ps-px sm:px-3 font-medium text-primary"
              to="/#"
              aria-current="home"
            >
              Home
            </NavLink>
            <NavLink
              className="py-3 ps-px sm:px-3 font-medium text-gray-500 hover:text-gray-400"
              to="/#features"
              aria-current="features"
            >
              Features
            </NavLink>
            <NavLink
              className="py-3 ps-px sm:px-3 font-medium text-gray-500 hover:text-gray-400"
              to="mailto:adityaprasadmohanty150@gmail.com"
              aria-current="contact"
            >
              Contact
            </NavLink>
            <NavLink
              className="py-3 ps-px sm:px-3 max-sm:mb-2 sm:mr-4 font-medium text-gray-500 hover:text-gray-400"
              to="/#blog"
            >
              Blog
            </NavLink>

            <Link
              class="py-3 sm:my-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
              to="/book"
            >
              Book Now
              <ChevronRightIcon class="size-4" color="white" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
