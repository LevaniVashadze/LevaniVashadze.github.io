import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Element name={"Contact"}>
      <section
        id="Contact"
        className="flex h-screen items-center justify-center"
      >
        <div className="px-4 lg:w-1/2 2xl:w-1/3">
          <h3 className="mb-4 text-3xl">{t("ContactText")}</h3>
          <form method="post" action="https://formspree.io/f/xoqrgvkg">
            <input
              type="email"
              className="my-4 w-full border-4 border-black"
              aria-describedby="emailHelp"
              placeholder={t("email")}
              name="email"
            />
            <br />
            <input
              type="text"
              className="my-4 w-full border-4 border-black"
              aria-describedby="text"
              placeholder={t("subject")}
              name="subject"
            />
            <br />
            <textarea
              className="my-4 w-full border-4 border-black"
              aria-describedby="text"
              placeholder={t("message")}
              name="text"
            ></textarea>
            <br />
            <button
              type="submit"
              className="bg-black px-4 py-2 text-2xl text-white"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
