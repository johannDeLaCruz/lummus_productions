import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

const VideoPlayer = () => {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // When 50% of the video is in view
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {isInView && (
        <ReactPlayer
          url="https://drive.google.com/file/d/1-fxUZ7EyvkNehCQG8A3uxnYJsZvd1zJz"
          controls
          width="100%"
          height="100%"
          playing={true} // Autoplay when in view
        />
      )}
    </div>
  );
};

export default VideoPlayer;
