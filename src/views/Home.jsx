import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects";
import AboutMe from "./Aboutme";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
