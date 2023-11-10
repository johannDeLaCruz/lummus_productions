import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import LampImg from "./LampImg";

const HeroSection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
      pb={10}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LampImg height={200} />
        </Box>
        <Stack spacing={1} alignItems={"center"}>
          <Stack direction={{ xxs: "column", lg: "row" }} spacing={2}>
            <Typography
              variant="h1"
              sx={{ display: "flex", alignItems: "center" }}
              textAlign={"center"}
            >
              Unleash Your Creativity With
            </Typography>
            <Logo height={120} logoColor="white" />
          </Stack>
          <Typography variant="body1" sx={{ maxWidth: "30ch" }} align="center">
            We&lsquo;re passionate about helping you grow your business. As a
            new client, you can get started with Lummus.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
