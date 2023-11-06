import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
// import HeroVideo from "./components/HeroVideo";
// import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Milestones from "./components/Milestones";
import Bio from "./components/Bio";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        {/* <HeroVideo /> */}
        <AboutUs />
        <Services />
        <Portfolio />
        <Milestones />
        <Bio />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
}

export default App;
