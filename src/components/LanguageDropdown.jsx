import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();

  return (
    <label className="language-picker">
      <span className="sr-only">{t("a11y.language")}</span>
      <select
        value={(i18n.resolvedLanguage || "en").split("-")[0]}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
      >
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="ka">KA</option>
      </select>
      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m7 10 5 5 5-5" />
      </svg>
    </label>
  );
};

export default LanguageDropdown;
