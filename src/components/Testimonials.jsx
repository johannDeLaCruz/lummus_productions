import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

const items = () => {
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
    <Box sx={{ backgroundColor: "primary.main" }} component={"section"} py={10}>
      <Container maxWidth="xl">
        <Stack alignItems={"center"} spacing={6} paddingBlock={4}>
          <Typography>Ouça o que os nossos clientes têm a dizer!</Typography>
          <Typography>
            Check out what our satisfied clients have to say about our services.
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={6}>
          {testimonialsItems.map((item, index) => (
            <Card key={index} sx={{ p: 4 }}>
              <CardContent>
                {item.rating}
                <Typography>{item.description}</Typography>
              </CardContent>
              <CardHeader
                avatar={item.avatar}
                title={item.title}
                subheader={item.subtitle}
              />
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default items;
