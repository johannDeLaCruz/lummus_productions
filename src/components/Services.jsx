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

const Services = () => {
  const services = [
    {
      icon: <AccessibilityIcon />,
      title: "Marketing Digital",
      description:
        "Responsible for developing and implementing effective marketing strategies.",
    },
    {
      icon: <Diversity3Icon />,
      title: "Mídias Sociais",
      description:
        "Analyzes data to uncover insights and optimize advertising campaigns.",
    },
    {
      icon: <PaletteIcon />,
      title: "Gestão de Tráfego",
      description: "Manages client accounts and ensures their satisfaction.",
    },
    {
      icon: <CameraAltIcon />,
      title: "Vídeos Publicitários",
      description:
        "Identifies opportunities for business growth and develops strategies to capitalize on them.",
    },
  ];
  return (
    <Box
      sx={{ backgroundColor: "primary.main" }}
      component={"section"}
      pt={14}
      pb={10}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack alignItems={"center"}>
          <Typography variant="h6" py={4}>
            Nossos Serviços
          </Typography>
          <Typography variant="p" py={4}>
            A Lummus tem o que você precisa!
          </Typography>
        </Stack>
        <Grid container spacing={4} px={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ padding: 2 }}>
                <CardHeader
                  avatar={<Box color={"primary.main"}>{service.icon}</Box>}
                  title={service.title}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "center", p: 0 }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    height={"8ch"}
                    width={"21ch"}
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
