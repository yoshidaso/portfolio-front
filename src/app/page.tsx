import React from "react";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blog from "../components/Blog";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <Projects />
      <Skills />
      <Blog />
      <ContactForm />
    </div>
  );
};

export default HomePage;
