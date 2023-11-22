import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@mui/material/useMediaQuery";

const VideoPlayer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const isMobile = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      py={{ xxs: 0, md: 6 }}
      bgcolor={"primary.main"}
    >
      <Box
        ref={ref}
        width={{ xxs: "100%", lg: "70%" }}
        height={{ xxs: "100%", lg: "70%" }}
      >
        <ReactPlayer
          url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          controls
          width="100%"
          height="100%"
          playing={inView}
          muted={true}
          style={{
            lineHeight: 0,
            border: isMobile ? "none" : "white 1rem solid",
            boxShadow: isMobile ? "none" : "0 0 10px black",
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
