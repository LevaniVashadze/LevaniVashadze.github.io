import { Link, scrollSpy } from "react-scroll";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <header className="fixed z-50 flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap sm:justify-start dark:bg-gray-800">
      <nav
        className="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none cursor-pointer font-sans text-4xl font-bold uppercase sm:text-7xl dark:text-white"
            to="Home"
          >
            L
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 p-2 text-gray-800 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="size-4 flex-shrink-0 hs-collapse-open:hidden"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hidden size-4 flex-shrink-0 hs-collapse-open:block"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5 ">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-gray-500 dark:text-white"
              className="cursor-pointer font-oswald text-lg font-medium hover:text-gray-400 sm:text-2xl 2xl:text-3xl dark:text-gray-400 dark:hover:text-gray-500"
              to="Home"
            >
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-gray-500 dark:text-white"
              className="cursor-pointer font-oswald text-lg font-medium hover:text-gray-400 sm:text-2xl 2xl:text-3xl dark:text-gray-400 dark:hover:text-gray-500"
              to="About"
            >
              About
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-gray-500 dark:text-white"
              className="cursor-pointer font-oswald text-lg font-medium hover:text-gray-400 sm:text-2xl 2xl:text-3xl dark:text-gray-400 dark:hover:text-gray-500"
              to="Work"
            >
              Work
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-gray-500 dark:text-white"
              className="cursor-pointer font-oswald text-lg font-medium hover:text-gray-400 sm:text-2xl 2xl:text-3xl dark:text-gray-400 dark:hover:text-gray-500"
              to="Contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
