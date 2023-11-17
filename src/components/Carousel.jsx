import ScrollCarousel from "scroll-carousel-react";
import InstagramEmbed from "./InstagramEmbed.jsx";

const instagramLinks = [
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
];

const Carousel = () => {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={6}
      speed={5}
      onReady={() => console.log("I am ready")}
      margin={32}
      smartSpeed={true}
    >
      {instagramLinks.map((link, index) => (
        <InstagramEmbed key={index} instagramLink={link} />
      ))}
    </ScrollCarousel>
  );
};

export default Carousel;
