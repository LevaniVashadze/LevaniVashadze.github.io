import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Work = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Good Morning Tech",
      image: "/gmt.png",
      alt: "Good Morning Tech",
      link: "https://goodmorningtech.news/",
      githubLink: "https://github.com/goodmornintech/goodmorningtech",
      i18nKey: "project1Description",
      tags: ["Flask", "MongoDB", "Email Automation", "AI"],
    },
    {
      id: 2,
      title: "Gamefolio",
      image: "/gamefolio.png",
      alt: "Gamefolio",
      link: "https://gamefolio.me/",
      i18nKey: "project2Description",
      tags: ["Next.js", "Django", "PostgreSQL", "TailwindCSS"],
    },
    {
      id: 3,
      title: "ViralBuilder Platform",
      image: "/shopviral.png",
      alt: "ViralBuilder",
      link: "https://viralbuilder.io/",
      i18nKey: "project3Description",
      tags: [
        "Next.js",
        "PostgreSQL",
        "FastAPI",
        "Playwright",
        "Redis",
        "Docker",
        "OAuth",
        "Celery",
      ],
    },
    {
      id: 4,
      title: "Pravus Video Tool",
      image: "/pravus.png",
      alt: "Pravus",
      link: "",
      exampleLink: "https://www.youtube.com/shorts/QklJzGrvsvU",
      i18nKey: "project4Description",
      tags: ["FFmpeg", "Pillow", "ElevenLabs", "Automation"],
    },
    {
      id: 5,
      title: "Chat Video Generator",
      image: "/chat.png",
      alt: "Chat",
      link: "",
      exampleLink: "https://www.youtube.com/shorts/_vRGCAJmMZw",
      i18nKey: "project5Description",
      tags: ["FFmpeg", "Pillow", "AI Voice", "Video Editing"],
    },
  ];

  return (
    <Element name={"Work"}>
      <section
        ref={sectionRef}
        id="Work"
        className="min-h-screen bg-white px-6 py-20"
      >
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gray-400">
              02
            </span>
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gray-400">
              {t("work")}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-32">
          {/* Desktop & Mobile - Alternating Layout */}
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="grid items-start gap-12 md:grid-cols-2">
                {/* Image */}
                <div
                  className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="space-y-3">
                    <span className="font-body text-xs text-gray-400">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <div className="overflow-hidden border border-gray-200">
                      {project.link ? (
                        <a target="_blank" rel="noreferrer" href={project.link}>
                          <img
                            src={project.image}
                            className="w-full transition-opacity duration-300 hover:opacity-80"
                            alt={project.alt}
                          />
                        </a>
                      ) : (
                        <img
                          src={project.image}
                          className="w-full"
                          alt={project.alt}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <h3 className="font-display text-2xl font-normal text-black md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-gray-600">
                    {t(project.i18nKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-200 px-2 py-1 font-body text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-xs uppercase tracking-wider text-black transition-colors hover:text-gray-600"
                      >
                        View →
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
                      >
                        GitHub
                      </a>
                    )}
                    {project.exampleLink && (
                      <a
                        href={project.exampleLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
                      >
                        Example
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Work;
