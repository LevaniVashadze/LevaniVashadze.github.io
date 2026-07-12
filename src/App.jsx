import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar.jsx";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer.jsx";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.add("js");
    return () => document.documentElement.classList.remove("js");
  }, []);

  useEffect(() => {
    const language = (i18n.resolvedLanguage || "en").split("-")[0];
    document.documentElement.lang = language;
  }, [i18n.resolvedLanguage]);

  return (
    <div className="App">
      <Suspense fallback={<div className="loading-screen">{t("loading")}</div>}>
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Work />
          <Contact />
        </main>
        <ProgressBar />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
