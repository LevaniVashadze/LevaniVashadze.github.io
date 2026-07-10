import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const skills = [
  ["Data", "Oracle PL/SQL", "SQL", "PostgreSQL", "MongoDB"],
  ["Backend", "Python", "Django", "Flask", "FastAPI"],
  ["Product", "React", "Next.js", "Tailwind CSS", "Docker"],
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Element name="About">
      <section id="About" className="about-section section-shell">
        <div className="section-rule reveal">
          <span>01</span>
          <span>{t("about")}</span>
        </div>

        <div className="about-layout">
          <div className="about-heading reveal">
            <h2>{t("aboutTitle")}</h2>
          </div>
          <div className="about-copy reveal">
            <p>{t("aboutText")}</p>
            <div className="language-line">
              <span>{t("languagesLabel")}</span>
              <strong>{t("languages")}</strong>
            </div>
          </div>
        </div>

        <div className="skills-grid reveal">
          {skills.map(([label, ...items], index) => (
            <div className="skill-column" key={label}>
              <div className="skill-heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{label}</h3>
              </div>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default About;
