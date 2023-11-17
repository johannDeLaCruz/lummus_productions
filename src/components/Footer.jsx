import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoComplete from "./LogoComplete";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";

const Footer = ({ pages }) => {
  return (
    <Box component={"footer"}>
      <Container maxWidth={"xl"}>
        <Stack
          direction={{ xxs: "column-reverse", sm: "row" }}
          py={6}
          spacing={6}
          justifyContent={{ xxs: "center", sm: "space-between" }}
          alignItems={"center"}
        >
          <Stack alignItems={{ xxs: "center", sm: "flex-start" }} spacing={2}>
            <LogoComplete height={100} />
            <Typography
              paragraph
              variant="caption"
              width={"20ch"}
              textAlign={{ xxs: "center", sm: "start" }}
            >
              © 2023 Lummus Productions. All rights reserved.
            </Typography>
          </Stack>
          <Grid
            container
            spacing={0}
            direction={{ xxs: "column", sm: "row" }}
            alignItems={{ xxs: "center", sm: "flex-start" }}
            flexBasis={"content"}
          >
            {pages.map((page, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ScrollLink to={page} smooth={true} duration={800} offset={-90}>
                  <Button variant="text">{page}</Button>
                </ScrollLink>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default Footer;
