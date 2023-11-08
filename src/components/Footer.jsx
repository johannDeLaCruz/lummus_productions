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
        <Stack direction={"row"} px={16} py={6} spacing={8}>
          <Stack alignItems={"flex-start"} spacing={2}>
            <LogoComplete height={100} />
            <Typography paragraph variant="caption" width={"20ch"}>
              © 2023 Lummus Productions. All rights reserved.
            </Typography>
          </Stack>
          <Grid container p={6} spacing={1}>
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
