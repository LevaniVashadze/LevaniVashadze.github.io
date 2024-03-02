import { Element } from "react-scroll";
import { Trans } from "react-i18next";

const Work = () => {
  return (
    <Element name={"Work"}>
      <section id="Work" className="flex h-screen items-center justify-center">
        <div className="container mx-auto px-4 lg:w-2/3">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="">
              <a target="_blank" rel="noreferrer" href="https://gamefolio.me/">
                <img
                  src="/gamefolio.png"
                  className="w-full border border-black transition-all duration-200 hover:rotate-1 hover:opacity-90 hover:shadow-lg"
                  alt={"Gamefolio"}
                />
              </a>
              <br />
              <Trans
                i18nKey="project1Description"
                components={{
                  1: (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://gamefolio.me/"
                      className="text-blue-600 underline"
                    />
                  ),
                }}
              />
            </div>

            <div className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goodmorningtech.news/"
              >
                <img
                  src="/gmt.png"
                  className="w-full border border-black transition-all duration-200 hover:-rotate-1 hover:opacity-90 hover:shadow-lg"
                  alt={"Good Morning Tech"}
                />
              </a>
              <br />
              <Trans
                i18nKey="project2Description"
                components={{
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
                }}
              />
            </div>

            <div className="">
              <img
                src="/uDesign.png"
                className="w-full border border-black transition-all duration-200 hover:rotate-1 hover:opacity-90 hover:shadow-lg"
                alt={"uDesign"}
              />
              <br />

              <Trans
                i18nKey="project3Description"
                components={{
                  1: (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/LevaniVashadze/uDesign"
                      className="text-blue-600 underline"
                    />
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Work;
