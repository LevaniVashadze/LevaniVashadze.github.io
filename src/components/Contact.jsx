import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Element name="Contact">
      <section id="Contact" className="contact-section section-shell">
        <div className="section-rule dark-rule reveal">
          <span>04</span>
          <span>{t("contact")}</span>
        </div>

        <div className="contact-intro reveal">
          <p className="eyebrow">{t("haveProject")}</p>
          <h2>
            {t("contactTitleOne")}
            <span>{t("contactTitleTwo")}</span>
          </h2>
          <a className="email-link" href="mailto:vashadzelevani11@gmail.com">
            vashadzelevani11@gmail.com
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <form
          method="post"
          action="https://formspree.io/f/xoqrgvkg"
          className="contact-form reveal"
        >
          <label>
            <span>01 / {t("email")}</span>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label>
            <span>02 / {t("subject")}</span>
            <input
              type="text"
              name="subject"
              placeholder={t("subjectPlaceholder")}
              required
            />
          </label>
          <label className="message-field">
            <span>03 / {t("message")}</span>
            <textarea
              rows="4"
              name="text"
              placeholder={t("messagePlaceholder")}
              required
            />
          </label>
          <button type="submit">
            {t("send")}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </button>
        </form>
      </section>
    </Element>
  );
};

export default Contact;
