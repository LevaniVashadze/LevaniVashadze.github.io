import { Element, Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { focusSection, scrollProps } from "../motion";

const areas = ["web", "data", "automation"];

const Home = () => {
  const { t } = useTranslation();

  return (
    <Element name="Home">
      <section id="Home" className="hero shell">
        <div className="hero-intro">
          <h1>Levani Vashadze</h1>
          <p className="hero-role">{t("role")}</p>
          <div className="hero-actions">
            <Link
              to="Work"
              href="#Work"
              {...scrollProps}
              onClick={() => focusSection("Work")}
              className="button button--primary"
            >
              {t("viewProjects")}
            </Link>
            <Link
              to="Contact"
              href="#Contact"
              {...scrollProps}
              onClick={() => focusSection("Contact")}
              className="button button--secondary"
            >
              {t("getInTouch")}
            </Link>
          </div>
        </div>

        <aside className="hero-card glass" aria-labelledby="hero-card-title">
          <h2 id="hero-card-title">{t("workOn")}</h2>
          <ul className="hero-areas">
            {areas.map((area) => (
              <li key={area}>
                <strong>{t(`area.${area}.title`)}</strong>
                <span>{t(`area.${area}.text`)}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </Element>
  );
};

export default Home;
