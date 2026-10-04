import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CanvasBackground from "./components/CanvasBackground";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <>
      <CustomCursor />
      <CanvasBackground />
      <div className="relative z-10 min-h-screen text-slate-200 selection:bg-primary-500/30">
        <Navbar />
        <main className="flex flex-col gap-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
