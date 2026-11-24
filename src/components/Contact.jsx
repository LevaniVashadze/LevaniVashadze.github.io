import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Element name="Contact">
      <section id="Contact" className="section shell" tabIndex={-1}>
        <h2 className="section-label">{t("contact")}</h2>
        <div className="section-body reveal">
          <p className="lead">{t("contactText")}</p>
          <a className="text-link contact-email" href="mailto:vashadzelevani11@gmail.com">
            vashadzelevani11@gmail.com
          </a>

          <form
            method="post"
            action="https://formspree.io/f/xoqrgvkg"
            className="contact-form"
          >
            <label>
              {t("email")}
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              {t("subject")}
              <input type="text" name="subject" required />
            </label>
            <label className="full">
              {t("message")}
              <textarea rows="5" name="text" required />
            </label>
            <button type="submit" className="button button--primary">
              {t("send")}
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
