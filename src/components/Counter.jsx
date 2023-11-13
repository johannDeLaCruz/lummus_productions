import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Counter = ({ end }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1, transition: { duration: 0.05 } });
    controls.start({ scale: 1.1, transition: { duration: 0.05 } });
    controls.start({ scale: 1, transition: { duration: 0.05 } });
    const interval = setInterval(() => {
      if (count < end) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 0.5);

    return () => clearInterval(interval);
  }, [count, end, controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ opacity: 0, scale: 0.8 }}
      style={{ display: "inline-block" }}
    >
      {count}
    </motion.span>
  );
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
};

export default Counter;
