import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name={"About"}>
      <section id="About" className="flex h-screen items-center justify-center">
        <div className="mb-24 px-2 text-left lg:mb-0 lg:w-1/2 2xl:w-1/3">
          <h2 className="mb-1 text-4xl font-bold">
            My name is Levani and I am a software developer.
          </h2>
          <p className="font-raleway text-2xl">
            I am a Fullstack Developer, I have experience in the backend with
            Django and Flask. For the database I usually use PostgreSQL or
            MongoDB. For the frontend I have experience with Next.js and React
            and for styling my favorite is TailwindCSS. I also have experience
            with Docker and working with the cloud. I can fluently speak German,
            English and Georgian.
          </p>
        </div>
      </section>
    </Element>
  );
};

export default About;
