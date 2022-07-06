import React from "react";

import {
  NavBar,
  Footer,
  Landing,
  About,
  Skills,
  Education,
  Experience,
  Contact,
  Projects,
} from "../components";

export default function Main() {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />

      <Contact />
      <Footer />
    </>
  );
}
