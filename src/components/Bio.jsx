import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CeoAvatar from "./CeoAvatar";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const Bio = () => {
  return (
    <Box component={"section"} sx={{ position: "relative" }}>
      <Container maxWidth={"xl"}>
        <Stack
          direction={{ xxs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={6}
          px={{ md: 4, lg: 12 }}
          py={12}
        >
          <Typography variant="h2" maxWidth={"6ch"} textAlign={"center"}>
            Let&lsquo;s create something amazing together!
          </Typography>
          <Card
            sx={{
              padding: 2,
              position: { md: "absolute" },
              transform: {
                md: "translateX(calc(100vw - 120% - 2rem))",
                lg: "translateX(calc(100vw - 140% - 2rem))",
                xl: "translateX(calc(+180%))",
              },
            }}
            elevation={4}
          >
            <CardHeader
              avatar={<CeoAvatar />}
              title="CEO - Wolner Júnior"
              titleTypographyProps={{
                component: "h3",
                variant: "body2",
                fontWeight: "700",
              }}
              subheader="Brasília - DF"
              subheaderTypographyProps={{
                component: "p",
                align: "center",
                variant: "caption",
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            />
            <CardContent>
              <Stack spacing={3}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="caption" component={"h4"}>
                    Project Views
                  </Typography>
                  <Typography variant="caption" component={"span"}>
                    1360
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  variant="caption"
                >
                  <Typography variant="caption" component={"h4"}>
                    Appreciations
                  </Typography>
                  <Typography variant="caption" component={"span"}>
                    102
                  </Typography>
                </Stack>
                <Typography
                  variant="caption"
                  component={"h4"}
                  fontWeight={"400"}
                >
                  Biografia:
                </Typography>
                <Typography
                  maxWidth={"35ch"}
                  variant="caption"
                  paragraph
                  fontWeight={"400"}
                >
                  Hello there! My name is Brittany Dinan, and I am the CEO of
                  this creative advertising agency. With years of experience in
                  graphic design, my main focus is on publishing design and
                  motion design. Currently, I work as a freelancer, but I am
                  actively seeking an in-house job as a designer.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Bio;
