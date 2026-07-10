import { Element, Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Element name="Home">
      <section id="Home" className="hero">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-title">
          <p className="hero-kicker hero-reveal hero-delay-1">
            {t("heroKicker")}
          </p>
          <h1 aria-label="Levani Vashadze">
            <span className="hero-reveal hero-delay-2">LEVANI</span>
            <span className="outline-text hero-reveal hero-delay-3">VASHADZE</span>
          </h1>
        </div>

        <div className="hero-bottom hero-reveal hero-delay-4">
          <p>{t("heroStatement")}</p>
          <Link to="Work" smooth duration={650} className="round-link">
            <span>{t("exploreWork")}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4v16m0 0 6-6m-6 6-6-6" />
            </svg>
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default Home;
