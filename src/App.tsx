import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#FBFBFD]">
      <Header />
      <main className="space-y-8 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
