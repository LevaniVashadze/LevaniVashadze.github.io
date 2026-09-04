import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Experience = () => {
  const { t } = useTranslation();
  const responsibilities = t("experienceResponsibilities", {
    returnObjects: true,
  });

  return (
    <Element name="Experience">
      <section id="Experience" className="experience-section section-shell">
        <div className="experience-layout">
          <div className="experience-brand reveal">
            <div className="silk-mark">
              <img src="/silk-logo.svg" alt="Silk Bank" />
            </div>
            <div className="experience-status">
              <span className="pulse-dot" />
              {t("currentRole")}
            </div>
          </div>

          <div className="experience-copy reveal">
            <p className="eyebrow">SILK BANK · სილქ ბანკი</p>
            <h2>{t("experienceRole")}</h2>
            <p className="experience-lead">{t("experienceSummary")}</p>

            <ol className="responsibility-list">
              {Array.isArray(responsibilities) &&
                responsibilities.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
            </ol>

            <a
              href="https://www.linkedin.com/in/levanivashadze/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {t("viewLinkedIn")}
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
