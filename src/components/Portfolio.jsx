import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
// import { InstagramEmbed } from "react-social-media-embed";
import LampImg from "./LampImg";
import { PropTypes } from "prop-types";
import AnimatedStack from "./AnimatedStack";
import AnimatedTypography from "./AnimatedTypography";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const Portfolio = ({ sectionName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4  });
  return (
    <Box component={"section"} pb={8} id={sectionName}>
      <Container maxWidth={"xl"}>
        <Stack spacing={0} alignItems={"center"}>
          <LampImg height={200} color="purple" />
          <AnimatedStack
            spacing={4}
            textAlign={"center"}
            isInView={isInView}
            ref={ref}
          >
            <AnimatedTypography variant="h2" component={motion.h2}>
              Conheça o nosso trabalho
            </AnimatedTypography>
            <Typography variant="body2" component={motion.p}>
              We&lsquo;ve helped numerous clients achieve their advertising
              goals. Read what they have to say about us!
            </Typography>
          </AnimatedStack>
        </Stack>

        {/* <Stack direction={"row"} spacing={3} py={6} justifyContent={"center"}>
          <InstagramEmbed
            url="https://www.instagram.com/p/CyJiBYtPcC3/"
            width={328}
            captioned="false"
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CyJiBYtPcC3/"
            width={328}
            captioned="false"
          />
          <InstagramEmbed
            url="https://www.instagram.com/reel/CyJiBYtPcC3/"
            width={328}
            captioned="false"
          />
        </Stack> */}
      </Container>
    </Box>
  );
};

Portfolio.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Portfolio;
