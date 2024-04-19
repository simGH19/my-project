import Image from "next/image";
import Header from "./components/Header.tsx/header";
import Hero from "./components/Hero/hero";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Footer from "./components/Footer.tsx/footer";
import Contact from "./components/Contact/contact";
import { HoverCard } from "./components/test/page";

export default function Home() {
  return (
  <main>
  <Header />
  <Hero />
  <Projects />
  <About />
  <Contact />
  <Footer />
  </main>
  );
}
