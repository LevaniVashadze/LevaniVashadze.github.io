import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { CodeBrackets } from "./Icons";

const Experience = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      key: "bank",
      logo: <img src="/silk-logo.svg" alt="" />,
      role: t("experienceRole"),
      meta: `Silk Bank · ${t("currentRole")}`,
      summary: t("experienceSummary"),
      items: t("experienceResponsibilities", { returnObjects: true }),
    },
    {
      key: "freelance",
      logo: <CodeBrackets />,
      role: t("freelanceRole"),
      meta: t("freelanceMeta"),
      summary: t("freelanceSummary"),
      items: t("freelanceResponsibilities", { returnObjects: true }),
    },
  ];

  return (
    <Element name="Experience">
      <section id="Experience" className="section shell" tabIndex={-1}>
        <h2 className="section-label">{t("experience")}</h2>
        <div className="section-body">
          {jobs.map((job) => (
            <div className="experience-item reveal" key={job.key}>
              <div className="experience-header">
                <div className="company-logo glass">{job.logo}</div>
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.meta}</p>
                </div>
              </div>

              <p className="experience-summary">{job.summary}</p>

              {Array.isArray(job.items) && (
                <ul className="experience-list">
                  {job.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Experience;
