import { Link, scrollSpy } from "react-scroll";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown.jsx";

const Navbar = () => {
  const { t } = useTranslation();
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <header className="fixed z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        {/* Logo - Minimalistic */}
        <Link
          className="cursor-pointer font-display text-base font-medium tracking-tight text-black transition-colors hover:text-gray-600"
          to="Home"
          smooth={true}
          duration={500}
        >
          LV
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-black"
            className="cursor-pointer font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
            to="Home"
          >
            {t("home")}
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-black"
            className="cursor-pointer font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
            to="About"
          >
            {t("about")}
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-black"
            className="cursor-pointer font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
            to="Work"
          >
            {t("work")}
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-black"
            className="cursor-pointer font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
            to="Contact"
          >
            {t("contact")}
          </Link>
          <div className="h-4 w-px bg-gray-200"></div>
          <LanguageDropdown />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="hs-collapse-toggle inline-flex items-center justify-center p-2 text-gray-500 transition-colors hover:text-black"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              className="size-5 hs-collapse-open:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hidden size-5 hs-collapse-open:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse absolute left-0 top-full hidden w-full border-b border-gray-100 bg-white md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-black"
              className="cursor-pointer py-2 font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
              to="Home"
            >
              {t("home")}
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-black"
              className="cursor-pointer py-2 font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
              to="About"
            >
              {t("about")}
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-black"
              className="cursor-pointer py-2 font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
              to="Work"
            >
              {t("work")}
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-black"
              className="cursor-pointer py-2 font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
              to="Contact"
            >
              {t("contact")}
            </Link>
            <div className="mt-2 border-t border-gray-100 pt-2">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
