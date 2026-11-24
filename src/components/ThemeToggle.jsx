import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const getInitialTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const ThemeToggle = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#1c1c1f" : "#ffffff");
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable; the choice just won't persist.
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggle}
      aria-label={isDark ? t("a11y.lightMode") : t("a11y.darkMode")}
    >
      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
