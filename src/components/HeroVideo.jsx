import { PropTypes } from "prop-types";
import { useRef, useEffect } from "react";
// import { useTheme } from '@mui/material/styles';
import { Container, Video } from "@mui/material";

const VideoComponent = ({ src }) => {
  //   const theme = useTheme();
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Video
        ref={videoRef}
        loop
        muted
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </Container>
  );
};

export default VideoComponent;

VideoComponent.propTypes = {
  src: PropTypes.string.isRequired,
};
