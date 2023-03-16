import React, { ReactElement } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = (): ReactElement => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Main;
