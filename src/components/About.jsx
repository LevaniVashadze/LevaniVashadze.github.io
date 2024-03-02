import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Element name={"About"}>
      <section id="About" className="flex h-screen items-center justify-center">
        <div className="mb-24 px-2 text-left lg:mb-0 lg:w-1/2 2xl:w-1/3">
          <h2 className="mb-1 text-4xl font-bold">{t("aboutTitle")}</h2>
          <p className="font-raleway text-2xl">{t("aboutText")}</p>
        </div>
      </section>
    </Element>
  );
};

export default About;
