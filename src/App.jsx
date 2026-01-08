import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

import Profile from "./components/profile/Profile.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Project.jsx";
import Certificates from "./components/certificates/Certificate.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-10 bg-[#f6f1eb]">
        <Profile />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
