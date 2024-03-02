import { useTranslation } from "react-i18next";

const ArrowIcon = () => {
  return (
    <svg
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="ml-1 h-4 w-4 stroke-gray-700 dark:stroke-gray-300"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <div className="hs-dropdown relative inline-flex">
        <button
          id="hs-dropdown-default"
          type="button"
          className="hs-dropdown-toggle inline-flex items-center gap-x-2 bg-white px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          {i18n.resolvedLanguage === "ka"
            ? "ქარ"
            : i18n.resolvedLanguage === "de"
              ? "DEU"
              : "ENG"}
          <ArrowIcon className="size-4 hs-dropdown-open:rotate-180" />
        </button>

        <div
          className="hs-dropdown-menu duration mt-2 hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
          aria-labelledby="hs-dropdown-default"
        >
          <a
            className={`flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm ${
              i18n.resolvedLanguage === "en" ? "bg-gray-300" : ""
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </a>
          <a
            className={`flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm ${
              i18n.resolvedLanguage === "de" ? "bg-gray-300" : ""
            }`}
            onClick={() => i18n.changeLanguage("de")}
          >
            Deutsch
          </a>
          <a
            className={`flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm ${
              i18n.resolvedLanguage === "ka" ? "bg-gray-300" : ""
            }`}
            onClick={() => i18n.changeLanguage("ka")}
          >
            ქართული
          </a>
        </div>
      </div>
    </>
  );
};

export default LanguageDropdown;
