import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Element name={"About"}>
      <section
        id="About"
        className="flex min-h-screen items-center justify-center bg-white py-20"
      >
        <div className="w-full max-w-4xl px-6">
          <div className="space-y-12">
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-gray-400">
                01
              </span>
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-gray-400">
                About
              </span>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-normal leading-relaxed text-black md:text-4xl">
                {t("aboutTitle")}
              </h2>
              <p className="max-w-2xl font-body text-sm leading-loose text-gray-600 md:text-base">
                {t("aboutText")}
              </p>
            </div>

            {/* Skills - minimal grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8 md:grid-cols-4">
              {[
                "Django",
                "Flask",
                "Next.js",
                "React",
                "TailwindCSS",
                "Docker",
                "MongoDB",
                "PostgreSQL",
              ].map((skill) => (
                <div key={skill} className="font-body text-xs text-gray-500">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
