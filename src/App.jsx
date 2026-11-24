import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = (i18n.resolvedLanguage || "en").split("-")[0];
    document.documentElement.lang = language;
  }, [i18n.resolvedLanguage]);

  return (
    <Suspense fallback={<div className="loading-screen">{t("loading")}</div>}>
      <div className="backdrop" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
