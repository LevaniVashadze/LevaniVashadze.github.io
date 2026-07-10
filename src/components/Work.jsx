import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Good Morning Tech",
    image: "/gmt.png",
    link: "https://goodmorningtech.news/",
    github: "https://github.com/goodmornintech/goodmorningtech",
    description: "project1Description",
    type: "AI NEWS PLATFORM",
    tags: ["Flask", "MongoDB", "Automation", "AI"],
  },
  {
    title: "Gamefolio",
    image: "/gamefolio.png",
    link: "https://gamefolio.me/",
    description: "project2Description",
    type: "GAMING PLATFORM",
    tags: ["Next.js", "Django", "PostgreSQL"],
  },
  {
    title: "ViralBuilder",
    image: "/shopviral.png",
    link: "https://viralbuilder.io/",
    description: "project3Description",
    type: "CREATOR SAAS",
    tags: ["Next.js", "FastAPI", "Celery", "Redis"],
  },
  {
    title: "Pravus",
    image: "/pravus.png",
    example: "https://www.youtube.com/shorts/QklJzGrvsvU",
    description: "project4Description",
    type: "VIDEO ENGINE",
    tags: ["FFmpeg", "Pillow", "ElevenLabs"],
  },
  {
    title: "Chat Video Generator",
    image: "/chat.png",
    example: "https://www.youtube.com/shorts/_vRGCAJmMZw",
    description: "project5Description",
    type: "MEDIA AUTOMATION",
    tags: ["FFmpeg", "Pillow", "AI Voice"],
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Work = () => {
  const { t } = useTranslation();

  return (
    <Element name="Work">
      <section id="Work" className="work-section section-shell">
        <div className="section-rule reveal">
          <span>03</span>
          <span>{t("freelance")}</span>
        </div>

        <div className="work-intro reveal">
          <h2>{t("workTitle")}</h2>
          <p>{t("workIntro")}</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project reveal" key={project.title}>
              <a
                className="project-image"
                href={project.link || project.example}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t("openProject")} ${project.title}`}
              >
                <img src={project.image} alt="" loading="lazy" />
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="image-action"><Arrow /></span>
              </a>

              <div className="project-details">
                <div className="project-meta">
                  <span>{project.type}</span>
                </div>
                <h3
                  className={
                    project.title === "ViralBuilder"
                      ? "project-title--long"
                      : undefined
                  }
                >
                  {project.title}
                </h3>
                <p>{t(project.description)}</p>
                <div className="project-tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {t("liveSite")} <Arrow />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub <Arrow />
                    </a>
                  )}
                  {project.example && (
                    <a href={project.example} target="_blank" rel="noreferrer">
                      {t("watchExample")} <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Work;
