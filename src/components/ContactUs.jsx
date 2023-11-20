import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import Icon from "./Icon.jsx";
import LampImg from "./LampImg.jsx";
import { PropTypes } from "prop-types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedTypography from "./AnimatedTypography.jsx";
import AnimatedStack from "./AnimatedStack.jsx";

const contactUsIcons = [
  EmailIcon,
  WhatsAppIcon,
  InstagramIcon,
  // TwitterIcon,
  TelegramIcon,
];

const ContactUs = ({ sectionName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
      }}
      pb={10}
      component={"section"}
      id={sectionName}
    >
      <Container
        maxWidth={"xl"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2} alignItems={"center"}>
          <LampImg isInView={isInView} />
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xxs: "column", md: "row" },
              backgroundColor: "grey.50",
            }}
          >
            <CardContent sx={{ py: 6, px: { xxs: 2, sm: 6 } }}>
              <AnimatedStack
                spacing={3}
                textAlign={{ xxs: "center", md: "start" }}
                ref={ref}
                isInView={isInView}
              >
                <AnimatedTypography
                  variant="h2"
                  maxWidth={"8ch"}
                  component={motion.h2}
                >
                  Começe já a sua jornada criativa!
                </AnimatedTypography>
                <AnimatedTypography variant="body2" component={motion.p}>
                  Unleash the power of modern advertising.
                </AnimatedTypography>
                <Stack
                  direction={"row"}
                  // spacing={1}
                  justifyContent={{ xxs: "center", md: "start" }}
                  flexWrap={"wrap"}
                >
                  {contactUsIcons.map((icon, index) => (
                    <IconButton key={index}>
                      <Icon icon={icon} size={50} color={"primary"} />
                    </IconButton>
                  ))}
                </Stack>
              </AnimatedStack>
            </CardContent>
            <CardMedia
              component="img"
              alt="contact-us-image"
              image="./images/contact_us_img.png"
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

ContactUs.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default ContactUs;
