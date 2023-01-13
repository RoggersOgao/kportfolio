import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";

const Home: NextPage = () => {
  return (
    <div className="h-screen text-white snap-y snap-mandatory overflow-x-hidden z-0">
      <Head>
        <title>Kelly Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Header done!! */}

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience */}

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* skills */}
      <section id="skills" className="snap-center">
      <Skills />
      </section>

      {/* projects */}
    <section id="projects" className="snap-center">
      <Project />
    </section>
      {/* contact me */}

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
