import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function LampImg({ height, color, isInView }) {
  const src = `/src/assets/lamp_original_${color}.png`;
  return (
    <Box
      component={motion.div}
      initial={{ y: -280 }}
      animate={isInView ? { y: -50 } : { y: -280 }}
      transition={{ delay: 0.6, type: "spring", bounce: 0.6 }}
    >
      <img src={src} alt="lamp_img" height={height} />
    </Box>
  );
}

LampImg.propTypes = {
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isInView: PropTypes.bool.isRequired,
};

LampImg.defaultProps = {
  height: 300,
  color: "white",
};
