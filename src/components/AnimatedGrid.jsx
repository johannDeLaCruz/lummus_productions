import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { horizontalPop } from "../utils/animationVariants";
import { forwardRef } from "react";

const AnimatedGrid = forwardRef(({ children, isInView, ...rest }, ref) => {
  return (
    <Grid
      component={motion.div}
      initial="hidden"
      variants={horizontalPop}
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      {...rest}
    >
      {children}
    </Grid>
  );
});

AnimatedGrid.propTypes = {
  children: PropTypes.node.isRequired,
  isInView: PropTypes.bool.isRequired,
  rest: PropTypes.object,
};

AnimatedGrid.displayName = "AnimatedGrid";

export default AnimatedGrid;
