import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  return (
    <label className="language-picker">
      <span className="sr-only">Language</span>
      <select
        value={(i18n.resolvedLanguage || "en").split("-")[0]}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        aria-label="Choose language"
      >
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="ka">KA</option>
      </select>
      <svg viewBox="0 0 12 8" aria-hidden="true">
        <path d="m1 1 5 5 5-5" />
      </svg>
    </label>
  );
};

export default LanguageDropdown;
