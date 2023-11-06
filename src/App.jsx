import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
// import HeroVideo from "./components/HeroVideo";
// import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Milestones from "./components/Milestones";



function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* <HeroVideo /> */}
      <AboutUs />
      <Services />
      <Portfolio />
      <Milestones />
    </>
  );
}

export default App;
