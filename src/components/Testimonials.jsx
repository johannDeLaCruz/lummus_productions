import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import AnimatedTypography from "./AnimatedTypography";
import AnimatedStack from "./AnimatedStack";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import TestimonialCard from "./TestimonialCard";
import LampImg from "./LampImg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const Testimonials = ({ sectionName }) => {
  const testimonialsItems = [
    {
      rating: <Rating value={5} readOnly />,
      description:
        "This service is amazing! It has helped us reach new heights in our advertising campaigns. Highly recommended!",
      title: "Sarah Thompson",
      subtitle: "Thompson Advertising",
      avatar: <Avatar></Avatar>,
    },
    {
      rating: <Rating value={5} readOnly />,
      description:
        "A five-star experience for us! The results we achieved with Lummus Productions were beyond our expectations.",
      title: "John Davis",
      subtitle: "Davis Production",
      avatar: <Avatar></Avatar>,
    },
    {
      rating: <Rating value={5} readOnly />,
      description:
        "Once you work with Lummus Productions, you won't look back. Their professionalism and creativity are unmatched.",
      title: "Emily Wilson",
      subtitle: "Wilson Marketing",
      avatar: <Avatar></Avatar>,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      component={"section"}
      id={sectionName}
    >
      <Container maxWidth="xl">
        <Stack spacing={0} alignItems={"center"}>
          <LampImg isInView={isInView} />
          <AnimatedStack
            spacing={4}
            textAlign={"center"}
            isInView={isInView}
            ref={ref}
          >
            <AnimatedTypography variant="h2" component={motion.h2}>
              Ouça o que os nossos clientes têm a dizer!
            </AnimatedTypography>
            <AnimatedTypography variant="body2" component={motion.p}>
              Check out what our satisfied clients have to say about our
              services.
            </AnimatedTypography>
          </AnimatedStack>
        </Stack>
        <AnimatedStack
          direction={{ xxs: "column", md: "row" }}
          spacing={6}
          py={{ xxs: 8, md: 2 }}
          justifyContent={"center"}
          alignItems={"center"}
          isInView={isInView}
        >
          {testimonialsItems.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
              sx={{
                display: "flex",
                flexDirection: "column",
                position: { md: "relative" },
                p: 4,
                transform: {
                  md: `translateY(${index % 2 === 0 ? "30%" : "50%"})`,
                },
                maxWidth: "20rem",
              }}
            />
          ))}
        </AnimatedStack>
      </Container>
    </Box>
  );
};

Testimonials.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Testimonials;
