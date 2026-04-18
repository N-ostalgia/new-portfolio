import "./styles/global.css";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";
import useScrolled from "./hooks/useScrolled";

export default function App() {
  const scrolled = useScrolled();
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}