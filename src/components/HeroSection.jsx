import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import LampImg from "./LampImg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedStack from "./AnimatedStack";
import { verticalPopChildren } from "../utils/animationVariants";

const HeroSection = ({ sectionName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  function useParallax(value) {
    return useTransform(value, [0, 0.15], [0, 300]);
  }

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress);

  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
      pb={12}
      id={sectionName}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          style={{ y }}
          component={motion.div}
        >
          <LampImg isInView={isInView} />
        </Box>
        <AnimatedStack
          isInView={isInView}
          spacing={1}
          alignItems={"center"}
          ref={ref}
        >
          <Stack
            direction={{ xxs: "column", lg: "row" }}
            spacing={2}
            component={motion.div}
            variants={verticalPopChildren}
          >
            <Typography
              variant="h1"
              sx={{ display: "flex", alignItems: "center" }}
              textAlign={"center"}
            >
              Unleash Your Creativity With
            </Typography>
            <Logo height={110} logoColor="white" animated={true} />
          </Stack>
          <Typography
            variant="body1"
            sx={{ maxWidth: "30ch" }}
            align="center"
            component={motion.p}
            variants={verticalPopChildren}
          >
            We&lsquo;re passionate about helping you grow your business. As a
            new client, you can get started with Lummus.
          </Typography>
        </AnimatedStack>
      </Container>
    </Box>
  );
};

HeroSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default HeroSection;
