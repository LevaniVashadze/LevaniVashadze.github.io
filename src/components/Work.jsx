import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "./Icons";

const projects = [
  {
    title: "Good Morning Tech",
    image: "/gmt.png",
    link: "https://goodmorningtech.news/",
    github: "https://github.com/goodmornintech/goodmorningtech",
    description: "project1Description",
    year: 2022,
    stack: "Flask · MongoDB",
  },
  /*
  {
    title: "Gamefolio",
    image: "/gamefolio.png",
    link: "https://gamefolio.me/",
    description: "project2Description",
    stack: "Next.js · Django · PostgreSQL",
  },
  */
  {
    title: "ViralBuilder",
    image: "/shopviral.png",
    link: "https://viralbuilder.io/",
    description: "project3Description",
    client: true,
    year: 2025,
    stack: "Next.js · FastAPI · Celery · Redis",
  },
  {
    title: "Pravus",
    image: "/pravus.png",
    example: "https://www.youtube.com/shorts/QklJzGrvsvU",
    description: "project4Description",
    client: true,
    year: 2023,
    stack: "Python · FFmpeg · ElevenLabs",
  },
  {
    title: "Chat Video Generator",
    image: "/chat.png",
    example: "https://www.youtube.com/shorts/_vRGCAJmMZw",
    description: "project5Description",
    client: true,
    year: 2023,
    stack: "Python · Pillow · FFmpeg · ElevenLabs",
  },
];

const Work = () => {
  const { t } = useTranslation();

  return (
    <Element name="Work">
      <section id="Work" className="section shell" tabIndex={-1}>
        <h2 className="section-label">{t("work")}</h2>
        <div className="section-body">
          <div className="project-list">
            {projects.map((project) => (
              <article className="project reveal" key={project.title}>
                <a
                  className="project-image glass"
                  href={project.link || project.example}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img src={project.image} alt="" loading="lazy" />
                </a>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{t(project.description)}</p>
                  <p className="project-stack">
                    {project.year} · {project.client && `${t("clientProject")} · `}
                    {project.stack}
                  </p>
                  <div className="project-links">
                    {project.link && (
                      <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                        {t("liveSite")} <ArrowUpRight />
                      </a>
                    )}
                    {project.github && (
                      <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                        GitHub <ArrowUpRight />
                      </a>
                    )}
                    {project.example && (
                      <a className="text-link" href={project.example} target="_blank" rel="noreferrer">
                        {t("watchExample")} <ArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Work;
