import { useTranslation } from "react-i18next";

const ArrowIcon = () => {
  return (
    <svg
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="ml-1 h-3 w-3 stroke-black"
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
          className="hs-dropdown-toggle inline-flex items-center gap-x-2 bg-white px-3 py-2 font-body text-xs uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-50"
        >
          {i18n.resolvedLanguage === "ka"
            ? "ქარ"
            : i18n.resolvedLanguage === "de"
              ? "DEU"
              : "ENG"}
          <ArrowIcon className="size-3 transition-transform hs-dropdown-open:rotate-180" />
        </button>

        <div
          className="hs-dropdown-menu duration mt-2 hidden min-w-[120px] border border-gray-200 bg-white opacity-0 transition-[opacity,margin] hs-dropdown-open:opacity-100"
          aria-labelledby="hs-dropdown-default"
        >
          <a
            className={`flex cursor-pointer items-center border-b border-gray-200 px-3 py-2 font-body text-xs uppercase tracking-wider transition-colors last:border-b-0 ${
              i18n.resolvedLanguage === "en"
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </a>
          <a
            className={`flex cursor-pointer items-center border-b border-gray-200 px-3 py-2 font-body text-xs uppercase tracking-wider transition-colors last:border-b-0 ${
              i18n.resolvedLanguage === "de"
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => i18n.changeLanguage("de")}
          >
            DE
          </a>
          <a
            className={`flex cursor-pointer items-center border-b border-gray-200 px-3 py-2 font-body text-xs uppercase tracking-wider transition-colors last:border-b-0 ${
              i18n.resolvedLanguage === "ka"
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => i18n.changeLanguage("ka")}
          >
            KA
          </a>
        </div>
      </div>
    </>
  );
};

export default LanguageDropdown;
