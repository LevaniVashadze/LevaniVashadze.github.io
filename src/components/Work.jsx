import { Element } from "react-scroll";

const Work = () => {
  return (
    <Element name={"Work"}>
      <section id="Work" className="flex h-screen items-center justify-center">
        <div className="container mx-auto px-4 lg:w-2/3">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="project">
              <img
                src="/project_1.png"
                className="project-img w-full"
                alt="image of project(this website)"
              />
              <br />
              <a
                href="https://github.com/LevaniVashadze/Personal_Website"
                className="description mt-4 block"
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Well, I don't have many Projects but this website you are
                viewing is one. If you click me you can view the source code.
              </a>
            </div>

            <div className="project">
              <img
                src="/gmt.png"
                className="project-img w-full"
                alt="Good Morning Tech"
              />
              <br />
              <a
                href="https://github.com/goodmornintech/goodmorningtech"
                className="description mt-4 block"
              >
                Together with a few co-developers I am working on a service
                called Good Morning Tech. Click me to view the GitHub page of
                the project. Built using Flask. Check out the new WIP website at
                https://goodmorningtech.news.
              </a>
            </div>

            <div className="project">
              <img
                src="/ecom.png"
                className="project-img w-full"
                alt="Ecom Website"
              />
              <br />
              <a
                href="https://github.com/LevaniVashadze/EcommerceWebsite"
                className="description mt-4 block"
              >
                I am building an Ecommerce Website using Django and React. Click
                me to view the GitHub page of the project. Currently, the navbar
                and part of the landing page is finished, together with a dark
                theme and localisation. It is still in development.
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Work;
