import { PropTypes } from "prop-types";
// import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { verticalPopChildren } from "../utils/animationVariants.js";

const CustomTypography = ({ children, ...rest }) => {
//   const MotionComponent = motion[variant] || motion.div;

  return (
    <Typography
    //   component={MotionComponent}
    //   initial="hidden"
      variants={verticalPopChildren}
      //   animate={isInView ? "visible" : "hidden"}
      {...rest}
    >
      {children}
    </Typography>
  );
};

CustomTypography.propTypes = {
  children: PropTypes.node.isRequired,
//   isInView: PropTypes.bool.isRequired,
  rest: PropTypes.object,
  // variant: PropTypes.string.isRequired,
};

export default CustomTypography;
