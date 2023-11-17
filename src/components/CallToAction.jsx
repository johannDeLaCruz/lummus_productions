import Box from "@mui/material/Box";
import AnimatedTypography from "./AnimatedTypography.jsx";
import AnimatedStack from "./AnimatedStack.jsx";
import Container from "@mui/material/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Box
      py={8}
      pt={{ md: 28 }}
      pb={{ md: 9 }}
      component={"section"}
      sx={{ backgroundColor: "background.main", position: "relative" }}
      zIndex={1}
    >
      <Container maxWidth={"xl"}>
        <AnimatedStack
          textAlign={"center"}
          spacing={4}
          isInView={isInView}
          ref={ref}
        >
          <AnimatedTypography variant="h2" component={motion.h2}>
            Eleve o seu negócio para outro nível
          </AnimatedTypography>
          <AnimatedTypography variant="body2" component={motion.p}>
            Encontre os nossos experts e eleve a sua marca
          </AnimatedTypography>
        </AnimatedStack>
      </Container>
    </Box>
  );
}

export default CallToAction;
