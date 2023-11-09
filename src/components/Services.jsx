import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PaletteIcon from "@mui/icons-material/Palette";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Icon from "./Icon";
import LampImg from "./LampImg";

const Services = () => {
  const services = [
    {
      icon: AccessibilityIcon,
      title: "Marketing Digital",
      description:
        "Responsible for developing and implementing effective marketing strategies.",
    },
    {
      icon: Diversity3Icon,
      title: "Mídias Sociais",
      description:
        "Analyzes data to uncover insights and optimize advertising campaigns.",
    },
    {
      icon: PaletteIcon,
      title: "Gestão de Tráfego",
      description: "Manages client accounts and ensures their satisfaction.",
    },
    {
      icon: CameraAltIcon,
      title: "Vídeos Publicitários",
      description:
        "Identifies opportunities for business growth and develops strategies to capitalize on them.",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "primary.main" }} component={"section"} pb={10}>
      <Container maxWidth={"xl"}>
        <Stack spacing={0} alignItems={"center"}>
          <LampImg height={200} />
          <Stack
            spacing={4}
            alignItems={"center"}
            sx={{ color: "primary.contrastText" }}
            pb={7}
          >
            <Typography variant="h2">Nossos Serviços</Typography>
            <Typography variant="body1">
              A Lummus tem tudo o que você precisa!
            </Typography>
          </Stack>
        </Stack>
        <Grid container spacing={4} px={8}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ padding: 2 }}>
                <CardHeader
                  avatar={
                    <Box color={"primary.main"}>
                      <Icon icon={service.icon} size={40} />
                    </Box>
                  }
                  title={service.title}
                  titleTypographyProps={{
                    variant: "h3",
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: 0,
                    gap: 2,
                    ".MuiCardHeader-avatar": {
                      margin: 0,
                    },
                  }}
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "center", p: 0 }}
                >
                  <Typography
                    variant="body2"
                    align="center"
                    height={"9ch"}
                    width={"15ch"}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
