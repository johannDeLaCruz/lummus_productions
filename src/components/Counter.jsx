import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Counter = ({ end, prefix, postfix, isInView }) => {
  const controls = useAnimationControls();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({
        transition: { duration: 0.5 },
      });
      const interval = setInterval(() => {
        if (count < end) {
          setCount((prevCount) => prevCount + 1);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [count, end, controls, isInView]);

  return (
    <motion.span
      animate={controls}
      initial={{ opacity: 1 }}
      style={{ display: "inline-block" }}
    >
      {prefix}
      {count}
      {postfix}
    </motion.span>
  );
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  prefix: PropTypes.string.isRequired,
  postfix: PropTypes.string.isRequired,
  isInView: PropTypes.bool.isRequired,
};

export default Counter;
