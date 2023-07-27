import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intern from "./components/Intern/Intern";
import Achievement from "./components/Achievement/Achievement";
import Workshop from "./components/Workshop/Workshop";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Intern />
      <Achievement />
      <Workshop />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
