import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
      pt={14}
      pb={10}
    >
      <Container maxWidth={"xl"}>
        <Stack
          direction={"column"}
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack direction={"row"} spacing={1}>
            <Typography
              variant="h1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Unleash Your Creativity With
            </Typography>
            <Logo height={120} logoColor="white" />
          </Stack>
          <Typography variant="body1" sx={{ width: "30ch" }} align="center">
            We&lsquo;re passionate about helping you grow your business. As a
            new client, you can get started with Lummus.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
