import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoComplete from "./LogoComplete";
import Button from "@mui/material/Button";

const footerItems = [
  "Início",
  "Sobre",
  "Depoimentos",
  "Portfólio",
  "Contato",
  "+55(61)98368-8716",
];

const Footer = () => {
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
            {footerItems.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Button variant="text">{item}</Button>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
