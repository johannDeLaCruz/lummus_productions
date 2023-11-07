import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Portfolio = () => {
  return (
    <Box component={"section"} py={8}>
      <Container maxWidth={"xl"}>
        <Stack spacing={4} alignItems={"center"}>
          <Typography variant="h2">Conheça o nosso trabalho</Typography>
          <Typography variant="body2">
            We&lsquo;ve helped numerous clients achieve their advertising goals.
            Read what they have to say about us!
          </Typography>
        </Stack>
        <div height="10rem"></div>
      </Container>
    </Box>
  );
};

export default Portfolio;
