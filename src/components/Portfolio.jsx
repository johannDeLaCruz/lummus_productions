import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
// import { EmbedToggler } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";

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

        <Stack direction={"row"} spacing={3} py={6} justifyContent={"center"}>
          <InstagramEmbed
            url="https://www.instagram.com/reel/CzKDESvPc3z/"
            width={328}
          />
          <InstagramEmbed
            url="https://www.instagram.com/reel/CwC0H90oOwD/"
            width={328}
          />
          <InstagramEmbed
            url="https://www.instagram.com/reel/CyJiBYtPcC3/"
            width={328}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Portfolio;
