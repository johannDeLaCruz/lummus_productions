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
              flexDirection: { xxs: "column", md: "row" },
              backgroundColor: "grey.50",
            }}
          >
            <CardContent sx={{ py: 6, px: { xxs: 2, sm: 6 } }}>
              <Stack spacing={4} textAlign={{ xxs: "center", md: "start" }}>
                <Typography variant="h2" maxWidth={"8ch"}>
                  Começe já a sua jornada criativa!
                </Typography>
                <Typography variant="body2">
                  Unleash the power of modern advertising.
                </Typography>
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent={{ xxs: "center", md: "start" }}
                  flexWrap={"wrap"}
                >
                  {contactUsIcons.map((icon, index) => (
                    <IconButton key={index}>
                      <Icon icon={icon} size={50} color={"primary"} />
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
                maxWidth: { xxs: "34rem", md: "50%" },
                pb: { xs: 0, sm: 4, md: 0 },
                objectFit: "cover",
                width: "100%", 
                height: "100%",
              }}
            ></CardMedia>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactUs;
