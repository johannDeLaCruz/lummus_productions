import NavigationBar from "./components/NavigationBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HeroVideo from "./components/HeroVideo.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Milestones from "./components/Milestones.jsx";
import Bio from "./components/Bio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CallToAction from "./components/CallToAction.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

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
      <NavigationBar pages={pages} />
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
