import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const skills = [
  "Oracle PL/SQL",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "CI/CD",
  "Automated testing",
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Element name="About">
      <section id="About" className="about-section section-shell">
        <div className="about-layout">
          <div className="about-copy reveal">
            <p>{t("aboutText")}</p>
          </div>
        </div>

        <ul className="skills-list reveal" aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </Element>
  );
};

export default About;
