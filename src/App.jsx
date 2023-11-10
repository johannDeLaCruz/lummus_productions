import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

// import Footer from "./components/Footer";

// import Portfolio from "./components/Portfolio";
// import Milestones from "./components/Milestones";
// import Bio from "./components/Bio";
// import Testimonials from "./components/Testimonials";
// import CallToAction from "./components/CallToAction";
// import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <HeroVideo />
        <AboutUs />
        <Services />
        {/* <Portfolio /> */}
        {/* <Milestones /> */}
        {/* <Bio /> */}
        {/* <Testimonials /> */}
        {/* <CallToAction /> */}
        {/* <ContactUs /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
