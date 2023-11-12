import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import TestimonialCard from "./TestimonialCard";
import LampImg from "./LampImg";

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

  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      component={"section"}
      id={sectionName}
    >
      <Container maxWidth="xl">
        <Stack spacing={0} alignItems={"center"}>
          <LampImg height={200} />
          <Stack spacing={4} textAlign={"center"}>
            <Typography variant="h2">
              Ouça o que os nossos clientes têm a dizer!
            </Typography>
            <Typography variant="body2">
              Check out what our satisfied clients have to say about our
              services.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={{ xxs: "column", md: "row" }}
          spacing={6}
          py={{ xxs: 8, md: 2 }}
          justifyContent={"center"}
          alignItems={"center"}
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
        </Stack>
      </Container>
    </Box>
  );
};

Testimonials.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Testimonials;
