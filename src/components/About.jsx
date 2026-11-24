import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const skillGroups = [
  { label: "skillBackend", items: "Python, FastAPI, Django, Flask" },
  { label: "skillFrontend", items: "React, Next.js, Tailwind CSS" },
  { label: "skillData", items: "PostgreSQL, MongoDB, Oracle PL/SQL" },
  { label: "skillInfra", items: "Docker, AWS, CI/CD" },
  { label: "skillAi", items: "skillAiItems", translate: true },
  { label: "skillLanguages", items: "skillLanguagesItems", translate: true },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Element name="About">
      <section id="About" className="section shell" tabIndex={-1}>
        <h2 className="section-label">{t("about")}</h2>
        <div className="section-body reveal">
          <p className="lead">{t("aboutText")}</p>
          <dl className="skills">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt>{t(group.label)}</dt>
                <dd>{group.translate ? t(group.items) : group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Element>
  );
};

export default About;
