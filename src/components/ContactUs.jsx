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
import Icon from "./Icon";
import LampImg from "./LampImg";

const contactUsIcons = [
  EmailIcon,
  WhatsAppIcon,
  InstagramIcon,
  TwitterIcon,
  TelegramIcon,
];

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
      }}
      pb={10}
      component={"section"}
    >
      <Container
        maxWidth={"xl"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2} alignItems={"center"}>
          <LampImg />
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "grey.50",
            }}
          >
            <CardContent sx={{ padding: 6 }}>
              <Stack spacing={4}>
                <Typography variant="h2" width={"8ch"}>
                  Começe já a sua jornada criativa!
                </Typography>
                <Typography variant="body2">
                  Unleash the power of modern advertising.
                </Typography>
                <Stack direction={"row"} spacing={1}>
                  {contactUsIcons.map((icon, index) => (
                    <IconButton key={index}>
                      <Icon icon={icon} size={60} color={"primary"} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
            <CardMedia
              component="img"
              alt="contact-us-image"
              image="/src/assets/contact_us_img.png"
              sx={{
                width: "34rem",
              }}
            ></CardMedia>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactUs;
