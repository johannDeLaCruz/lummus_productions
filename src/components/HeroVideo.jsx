// import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

const VideoPlayer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  console.log(inView);

  return (
    <div ref={ref}>
      <ReactPlayer
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        controls
        width="100%"
        height="100%"
        playing={inView}
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;
