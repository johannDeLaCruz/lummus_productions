import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { Stack } from "@mui/material";
import { verticalPop } from "../utils/animationVariants";
import { forwardRef } from "react";

const AnimatedStack = forwardRef(({ children, isInView, ...rest }, ref) => {
  return (
    <Stack
      component={motion.div}
      initial="hidden"
      variants={verticalPop}
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      {...rest}
    >
      {children}
    </Stack>
  );
});

AnimatedStack.propTypes = {
  children: PropTypes.node.isRequired,
  isInView: PropTypes.bool.isRequired,
  rest: PropTypes.object,
};

AnimatedStack.displayName = "AnimatedStack";

export default AnimatedStack;
