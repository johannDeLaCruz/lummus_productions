import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Milestones from "./components/Milestones";
import Bio from "./components/Bio";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const pages = [
  "Início",
  "Sobre",
  "Serviços",
  "Portfólio",
  "Depoimentos",
  "Contato",
];

function App() {
  return (
    <>
      <NavBar pages={pages} />
      <main>
        <HeroSection sectionName={pages[0]} />
        <HeroVideo />
        <AboutUs sectionName={pages[1]} />
        <Services sectionName={pages[2]} />
        <Portfolio sectionName={pages[3]} />
        <Milestones />
        <Bio />
        <Testimonials sectionName={pages[4]} />
        <CallToAction />
        <ContactUs sectionName={pages[5]} />
      </main>
      <Footer pages={pages} />
    </>
  );
}

export default App;
