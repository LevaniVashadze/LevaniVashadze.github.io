import { FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="border-t border-gray-200 bg-white px-6 py-12"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="order-2 font-body text-xs tracking-wide text-gray-400 md:order-1">
            © {currentYear} Levani Vashadze
          </p>

          {/* Social Links */}
          <div className="order-1 flex items-center gap-6 md:order-2">
            <a
              href="https://github.com/LevaniVashadze"
              className="font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="mailto:vashadzelevani11@gmail.com"
              className="font-body text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
