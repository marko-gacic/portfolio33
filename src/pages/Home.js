import React from "react";
import Header from "../components/home/Header";
import Icons from "../components/globals/Icons";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
export const Home = () => {
  return (
    <>
      <Header>
        <Icons />
      </Header>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
