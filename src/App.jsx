import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar.jsx";

function App() {
  return (
    <div className="App scroll-smooth font-oswald">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <ProgressBar />
    </div>
  );
}

export default App;
