import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
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
      pt={8}
    >
      <Container maxWidth="xl">
        <Stack alignItems={"center"} spacing={6} pt={8}>
          <Typography variant="h2">
            Ouça o que os nossos clientes têm a dizer!
          </Typography>
          <Typography variant="body2">
            Check out what our satisfied clients have to say about our services.
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={6} px={4} justifyContent={"center"}>
          {testimonialsItems.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
              sx={{
                position: "relative",
                p: 4,
                transform: `translateY(${index % 2 === 0 ? "30%" : "50%"})`,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
