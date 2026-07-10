import { Link } from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

const navItems = ["About", "Experience", "Work", "Contact"];

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link
          to="Home"
          smooth
          duration={650}
          className="wordmark"
          onClick={closeMenu}
        >
          <span>LEVANI</span>
          <span>VASHADZE</span>
        </Link>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item}
              spy
              smooth
              duration={650}
              offset={-70}
              activeClass="is-active"
              onClick={closeMenu}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {t(item.toLowerCase())}
            </Link>
          ))}
          <LanguageDropdown />
        </div>

        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
