import ColumnContainer from "./atomic/ColumnContainer/ColumnContainer";
import FadeIn from "./atomic/FadeIn/FadeIn";
import About from "./components/About/About";
import BlurryBackground from "./components/BlurryBackground/BlurryBackground";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import GrabCV from "./components/GrabCV/GrabCV";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <BlurryBackground>
        <FadeIn>
          <HeroSection />
        </FadeIn>

        <ColumnContainer>
          <About />
          <Experience />
          <Projects />
          <GrabCV />
          <Footer />
        </ColumnContainer>
      </BlurryBackground>
    </>
  );
}

export default App;
