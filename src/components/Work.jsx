import { Element } from "react-scroll";
import { Trans } from "react-i18next";
import { useState } from "react";

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      image: "/gmt.png",
      alt: "Good Morning Tech",
      link: "https://goodmorningtech.news/",
      i18nKey: "project1Description",
      components: {
        1: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/goodmornintech/goodmorningtech"
            className="text-blue-600 underline"
          />
        ),
        2: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://goodmorningtech.news/"
            className="text-blue-600 underline"
          />
        ),
      },
      hoverRotate: "hover:-rotate-1",
    },
    {
      id: 2,
      image: "/gamefolio.png",
      alt: "Gamefolio",
      link: "https://gamefolio.me/",
      i18nKey: "project2Description",
      components: {
        1: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gamefolio.me/"
            className="text-blue-600 underline"
          />
        ),
      },
      hoverRotate: "hover:rotate-1",
    },
    {
      id: 3,
      image: "/shopviral.png",
      alt: "ShopViral",
      link: "https://creatorsyndicate.app/",
      i18nKey: "project3Description",
      components: {
        1: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://creatorsyndicate.app/"
            className="text-blue-600 underline"
          />
        ),
      },
      hoverRotate: "hover:-rotate-1",
    },

    {
      id: 4,
      image: "/pravus.png",
      alt: "Pravus",
      link: "",
      i18nKey: "project4Description",
      components: {
        1: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/shorts/QklJzGrvsvU"
            className="text-blue-600 underline"
          />
        ),
      },
      hoverRotate: "hover:-rotate-1",
    },
    {
      id: 5,
      image: "/chat.png",
      alt: "Chat",
      link: "",
      i18nKey: "project5Description",
      components: {
        1: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/shorts/_vRGCAJmMZw"
            className="text-blue-600 underline"
          />
        ),
      },
      hoverRotate: "hover:-rotate-1",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Element name={"Work"}>
      <section
        id="Work"
        className="flex min-h-screen items-center justify-center"
      >
        <div className="container mx-auto px-4 lg:w-2/3">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="grid grid-cols-2 gap-8">
                  {/* Image */}
                  <div>
                    {project.link ? (
                      <a target="_blank" rel="noreferrer" href={project.link}>
                        <img
                          src={project.image}
                          className={`w-full border border-black transition-all duration-200 ${project.hoverRotate} hover:opacity-90 hover:shadow-lg`}
                          alt={project.alt}
                        />
                      </a>
                    ) : (
                      <img
                        src={project.image}
                        className={`w-full border border-black transition-all duration-200 ${project.hoverRotate} hover:opacity-90 hover:shadow-lg`}
                        alt={project.alt}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <Trans
                      i18nKey={project.i18nKey}
                      components={project.components}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Custom Carousel */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-md">
              {/* Project Display */}
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentProject * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0 px-4">
                      <div className="flex flex-col space-y-4">
                        {project.link ? (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.link}
                          >
                            <img
                              src={project.image}
                              className={`w-full border border-black transition-all duration-200 ${project.hoverRotate} hover:opacity-90 hover:shadow-lg`}
                              alt={project.alt}
                            />
                          </a>
                        ) : (
                          <img
                            src={project.image}
                            className={`w-full border border-black transition-all duration-200 ${project.hoverRotate} hover:opacity-90 hover:shadow-lg`}
                            alt={project.alt}
                          />
                        )}
                        <div className="px-2">
                          <Trans
                            i18nKey={project.i18nKey}
                            components={project.components}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-gray-300 bg-white p-2 shadow-md transition-colors hover:bg-gray-50"
                aria-label="Previous project"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border border-gray-300 bg-white p-2 shadow-md transition-colors hover:bg-gray-50"
                aria-label="Next project"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="mt-6 flex justify-center space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      index === currentProject ? "bg-gray-800" : "bg-gray-300"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Work;
