import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AboutUs = () => {
  return (
    <Box component={"section"}>
      <Stack direction={"row"} justifyContent={"center"} spacing={8} alignItems={"center"}>
        <Box>
          <Typography>Conheça a Lummus!</Typography>
          <Typography width={"40ch"}>
            As a new client, you can get started with Lummus Productions without
            understanding the technical details. Once you&lsquo;ve contacted us,
            our team will guide you through the process of creating effective
            advertising campaigns tailored to your needs.
          </Typography>
        </Box>
        <img src="/src/assets/about_us_img.png" alt="about-us-img" />
      </Stack>
    </Box>
  );
};

export default AboutUs;
