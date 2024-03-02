import { FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="mb-12 flex flex-col items-center justify-center space-x-4 text-gray-400"
    >
      <div className="text-center">
        <a
          href="https://github.com/LevaniVashadze"
          className="mx-1 inline-block hover:text-black"
        >
          <FaGithub className="size-5" />
        </a>
        <a
          href="mailto:vashadzelevani11@gmail.com"
          className="mx-1 inline-block hover:text-black"
        >
          <FaEnvelope className="size-5" />
        </a>
      </div>
      <p>{"© Levani Vashadze" + " " + currentYear}</p>
    </section>
  );
}

export default Footer;
