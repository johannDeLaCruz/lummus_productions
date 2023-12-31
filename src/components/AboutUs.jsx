import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AnimatedTypography from "./AnimatedTypography.jsx";
import AnimatedStack from "./AnimatedStack.jsx";
import Container from "@mui/material/Container";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const AboutUs = ({ sectionName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <Box
      component={"section"}
      id={sectionName}
      sx={{ backgroundColor: "background.main", position: "relative" }}
      zIndex={3}
    >
      <Container maxWidth={"xl"}>
        <Stack
          direction={{ xxs: "column", md: "row" }}
          justifyContent={"space-evenly"}
          spacing={5}
          alignItems={"center"}
          pt={{ xxs: 6, md: 0 }}
        >
          <AnimatedStack isInView={isInView} spacing={3} ref={ref}>
            <AnimatedTypography variant="h2" component={motion.h2}>
              Conheça a Lummus!
            </AnimatedTypography>
            <AnimatedTypography
              maxWidth={"40ch"}
              variant="body2"
              component={motion.p}
            >
              As a new client, you can get started with Lummus Productions
              without understanding the technical details. Once you&lsquo;ve
              contacted us, our team will guide you through the process of
              creating effective advertising campaigns tailored to your needs.
            </AnimatedTypography>
          </AnimatedStack>

          <img
            src="./images/about_us_img.png"
            alt="about-us-img"
            style={{ maxWidth: "100%" }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

AboutUs.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default AboutUs;
