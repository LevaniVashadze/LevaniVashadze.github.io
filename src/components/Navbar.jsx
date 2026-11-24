import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";
import ThemeToggle from "./ThemeToggle";
import { focusSection, scrollProps } from "../motion";

const navItems = [
  { to: "About", label: "about" },
  { to: "Experience", label: "experience" },
  { to: "Work", label: "work" },
  { to: "Contact", label: "contact" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const navRef = useRef(null);
  const linksRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    linksRef.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const handleWordmarkClick = () => {
    closeMenu();
    setLogoClicks((clicks) => Math.min(clicks + 1, 7));
  };
  const showEasterEgg = logoClicks >= 6;
  const completeEasterEgg = logoClicks >= 7;

  return (
    <header className="site-header">
      <nav ref={navRef} className="nav glass" aria-label={t("a11y.nav")}>
        <Link
          to="Home"
          href="#Home"
          {...scrollProps}
          offset={0}
          className={`wordmark${showEasterEgg ? " wordmark--easter-egg" : ""}`}
          onClick={handleWordmarkClick}
          aria-label="Levani Vashadze"
        >
          {showEasterEgg ? (completeEasterEgg ? "67" : "6") : "Levani Vashadze"}
        </Link>

        <div ref={linksRef} id="nav-links" className={`nav-links${open ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              href={`#${item.to}`}
              spy
              {...scrollProps}
              activeClass="is-active"
              onClick={() => {
                closeMenu();
                focusSection(item.to);
              }}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        <div className="nav-controls">
          <LanguageDropdown />
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? t("a11y.closeMenu") : t("a11y.openMenu")}
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
