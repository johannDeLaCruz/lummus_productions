import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      pt={14}
      pb={10}
    >
      <Stack direction={"row"}>
        <Typography
          variant="h3"
          component={"h1"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          Unleash Your Creativity With
        </Typography>
        <Logo height={120} logoColor="white" />
      </Stack>
      <Typography variant="body" paragraph sx={{ width: "40ch" }}>
        We&lsquo;re passionate about helping you grow your business. As a new
        client, you can get started with Lummus.
      </Typography>
    </Box>
  );
};

export default HeroSection;
