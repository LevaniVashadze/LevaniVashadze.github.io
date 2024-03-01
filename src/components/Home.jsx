import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name={"Home"}>
      <section id="Home" className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-sparta text-6xl font-bold">Hello,</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3 className="text-3xl">Welcome to Levani's Website</h3>
        </div>

        {/*  reminder to scroll down  */}
        <div className="absolute bottom-0 left-1/2 mb-10 -translate-x-1/2 transform">
          <p className="text-center">Scroll down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </Element>
  );
};

export default Home;
