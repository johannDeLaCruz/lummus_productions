import ScrollCarousel from "scroll-carousel-react";
import InstagramEmbed from "./InstagramEmbed.jsx";

const instagramLinks = [
  "https://www.instagram.com/reel/CyJiBYtPcC3/",
  "https://www.instagram.com/reel/CzoX1tPsKvR/",
  "https://www.instagram.com/reel/CzKDESvPc3z/",
  "https://www.instagram.com/reel/Cw3l2kZsQi3/",
  "https://www.instagram.com/reel/CvH5dbHNE36/",
  "https://www.instagram.com/reel/CvVyQSdNoF-/",
];

const Carousel = () => {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={6}
      speed={5}
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
