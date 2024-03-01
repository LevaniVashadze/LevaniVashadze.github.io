import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name={"Contact"}>
      <section
        id="Contact"
        className="flex h-screen items-center justify-center"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold">
            If you want me to help you do something, that you think I am able to
            do send me a message or a Email.
          </h3>
          <form method="post" action="https://formspree.io/f/xoqrgvkg">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Your Email"
              name="email"
            />
            <br />
            <input
              type="text"
              className="form-control"
              aria-describedby="text"
              placeholder="Subject"
              name="subject"
            />
            <br />
            <textarea
              className="form-control"
              aria-describedby="text"
              placeholder="Message"
              name="text"
            ></textarea>
            <br />
            <button type="submit" className="btn-lg btn-dark">
              Send
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
