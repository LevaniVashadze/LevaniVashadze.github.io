import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Element name={"Home"}>
      <section
        id="Home"
        className="flex min-h-screen items-center justify-center bg-white"
      >
        <div className="max-w-4xl px-6">
          <div className="space-y-8">
            {/* Minimalistic greeting */}
            <div className="border-l-2 border-black pl-6">
              <h1 className="font-display text-5xl font-light tracking-tight text-black md:text-7xl">
                {t("hello")}
              </h1>
            </div>

            {/* Name/Title */}
            <div className="pl-8">
              <h2 className="font-body text-xl font-normal tracking-wide text-gray-700 md:text-2xl">
                {t("welcome")}
              </h2>
            </div>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs uppercase tracking-widest text-gray-400">
              {t("scroll")}
            </span>
            <div className="h-8 w-px bg-gray-300 motion-safe:animate-pulse"></div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Home;
