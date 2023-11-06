import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
      }}
      py={10}
      //   px={8}
      component={"section"}
    >
      <Container
        maxWidth={"xl"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ display: "flex", alignItems: "center" }}>
          <CardContent sx={{ padding: 8 }}>
            <Typography>Começe já a sua jornada criativa!</Typography>
            <Typography>Unleash the power of modern advertising.</Typography>
            <Stack direction={"row"} spacing={1} color={"primary.main"}>
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              <IconButton color="inherit">
                <WhatsAppIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <TelegramIcon />
              </IconButton>
            </Stack>
          </CardContent>
          <CardMedia
            component="img"
            alt="contact-us-image"
            image="/src/assets/contact_us_img.png"
            sx={{ width: "34rem" }}
          ></CardMedia>
        </Card>
      </Container>
    </Box>
  );
};

export default ContactUs;
