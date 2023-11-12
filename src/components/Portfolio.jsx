import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { InstagramEmbed } from "react-social-media-embed";
import LampImg from "./LampImg";
import { PropTypes } from "prop-types";

const Portfolio = ({ sectionName }) => {
  return (
    <Box component={"section"} pb={8} id={sectionName}>
      <Container maxWidth={"xl"}>
        <Stack spacing={0} alignItems={"center"}>
          <LampImg height={200} color="purple" />
          <Stack spacing={4} textAlign={"center"}>
            <Typography variant="h2">Conheça o nosso trabalho</Typography>
            <Typography variant="body2">
              We&lsquo;ve helped numerous clients achieve their advertising
              goals. Read what they have to say about us!
            </Typography>
          </Stack>
        </Stack>

        <Stack direction={"row"} spacing={3} py={6} justifyContent={"center"}>
          <InstagramEmbed
            url="https://www.instagram.com/p/CyJiBYtPcC3/"
            width={328}
            captioned="false"
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CyJiBYtPcC3/"
            width={328}
            captioned="false"
          />
          <InstagramEmbed
            url="https://www.instagram.com/reel/CyJiBYtPcC3/"
            width={328}
            captioned="false"
          />
        </Stack>
      </Container>
    </Box>
  );
};

Portfolio.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Portfolio;
