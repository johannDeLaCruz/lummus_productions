import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AnimatedGrid from "./AnimatedGrid.jsx";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PaletteIcon from "@mui/icons-material/Palette";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Icon from "./Icon.jsx";
import LampImg from "./LampImg.jsx";
import { PropTypes } from "prop-types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedStack from "./AnimatedStack.jsx";
import AnimatedTypography from "./AnimatedTypography.jsx";
import { horizontalPopChildren } from "../utils/animationVariants.js";

const Services = ({ sectionName }) => {
  const services = [
    {
      icon: AccessibilityIcon,
      title: "Marketing Digital",
      description:
        "Responsible for developing and implementing effective marketing strategies.",
    },
    {
      icon: Diversity3Icon,
      title: "Mídias Sociais",
      description:
        "Analyzes data to uncover insights and optimize advertising campaigns.",
    },
    {
      icon: PaletteIcon,
      title: "Gestão de Tráfego",
      description: "Manages client accounts and ensures their satisfaction.",
    },
    {
      icon: CameraAltIcon,
      title: "Vídeos Publicitários",
      description:
        "Identifies opportunities for business growth and develops strategies to capitalize on them.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Box
      sx={{ backgroundColor: "primary.main", position: "relative" }}
      component={"section"}
      pb={10}
      id={sectionName}
      zIndex={2}
    >
      <Container maxWidth={"xl"}>
        <Stack spacing={0} alignItems={"center"} ref={ref}>
          <LampImg isInView={isInView} />
          <AnimatedStack
            spacing={4}
            alignItems={"center"}
            sx={{ color: "primary.contrastText" }}
            pb={7}
            isInView={isInView}
          >
            <AnimatedTypography
              variant="h2"
              component={motion.h2}
              textAlign={"center"}
            >
              Nossos Serviços
            </AnimatedTypography>
            <AnimatedTypography
              variant="body1"
              component={motion.p}
              textAlign={"center"}
            >
              A Lummus tem tudo o que você precisa!
            </AnimatedTypography>
          </AnimatedStack>
        </Stack>
        <AnimatedGrid
          container
          spacing={4}
          justifyContent={"center"}
          px={{ xxs: 1, xs: 2, md: 8, lg: 0 }}
          isInView={isInView}
          ref={ref}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={index}
              variants={horizontalPopChildren}
              component={motion.div}
            >
              <Card sx={{ padding: 2 }}>
                <CardHeader
                  avatar={
                    <Box color={"primary.main"}>
                      <Icon icon={service.icon} size={40} />
                    </Box>
                  }
                  title={service.title}
                  titleTypographyProps={{
                    variant: "h3",
                    align: "center",
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: 0,
                    gap: 2,
                    ".MuiCardHeader-avatar": {
                      margin: 0,
                    },
                  }}
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "center", p: 0 }}
                >
                  <Typography
                    variant="body2"
                    align="center"
                    minHeight={"9ch"}
                    maxWidth={"20ch"}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </AnimatedGrid>
      </Container>
    </Box>
  );
};

Services.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Services;
