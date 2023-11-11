import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const AboutUs = () => {
  return (
    <Box component={"section"}>
      <Container maxWidth={"xl"}>
        <Stack
          direction={{ xxs: "column", md: "row" }}
          justifyContent={"space-evenly"}
          spacing={5}
          alignItems={"center"}
          pt={8}
        >
          <Stack spacing={3}>
            <Typography variant="h2">Conheça a Lummus!</Typography>
            <Typography maxWidth={"40ch"} variant="body2">
              As a new client, you can get started with Lummus Productions
              without understanding the technical details. Once you&lsquo;ve
              contacted us, our team will guide you through the process of
              creating effective advertising campaigns tailored to your needs.
            </Typography>
          </Stack>

          <img
            src="/src/assets/about_us_img.png"
            alt="about-us-img"
            style={{ maxWidth: "100%" }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
