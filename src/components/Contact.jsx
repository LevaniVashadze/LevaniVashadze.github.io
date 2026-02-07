import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Element name={"Contact"}>
      <section id="Contact" className="min-h-screen bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-20 flex items-center gap-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gray-400">
              03
            </span>
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gray-400">
              {t("contact")}
            </span>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <p className="mb-12 font-body text-sm leading-relaxed text-gray-600">
              {t("ContactText")}
            </p>

            {/* Form */}
            <form
              method="post"
              action="https://formspree.io/f/xoqrgvkg"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-body text-xs uppercase tracking-wider text-gray-500"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-200 bg-white px-4 py-3 font-body text-sm text-black transition-colors focus:border-black focus:outline-none"
                  placeholder="your@email.com"
                  name="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="font-body text-xs uppercase tracking-wider text-gray-500"
                >
                  {t("subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full border border-gray-200 bg-white px-4 py-3 font-body text-sm text-black transition-colors focus:border-black focus:outline-none"
                  placeholder="Project inquiry..."
                  name="subject"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-body text-xs uppercase tracking-wider text-gray-500"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full resize-none border border-gray-200 bg-white px-4 py-3 font-body text-sm text-black transition-colors focus:border-black focus:outline-none"
                  placeholder="Tell me about your project..."
                  name="text"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="border border-black bg-black px-8 py-3 font-body text-xs uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
