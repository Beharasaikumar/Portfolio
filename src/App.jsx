import { useState, useEffect, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center flex-col ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
         <img src="/hii.gif" alt="Animated loading icon" className="hii" />
        <br />
        <br />
        <p className="loader-text">Cooking up some cool stuff!...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;