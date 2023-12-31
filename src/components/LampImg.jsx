import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function LampImg({ height, color, isInView }) {
  const src = `./images/lamp_original_${color}.png`;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      height={200}
    >
      <Box
        component={motion.div}
        zIndex={0}
        position={"absolute"}
        initial={{ y: -230 }}
        animate={isInView ? { y: -20 } : { y: -230 }}
        transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
      >
        <img src={src} alt="lamp_img" height={height} />
      </Box>
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
