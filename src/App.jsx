import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar.jsx";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer.jsx";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App scroll-smooth font-oswald">
      <Suspense fallback={<div>{t("loading")}</div>}>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
        <ProgressBar />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
