import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const Bio = () => {
  return (
    <Box component={"section"}>
      <Container maxWidth={"xl"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={12}
        >
          <Typography variant="h2" width={"6ch"}>
            Let&lsquo;s create something amazing together!
          </Typography>
          <Card sx={{ padding: 3 }}>
            <CardHeader
              avatar={<Avatar></Avatar>}
              title="CEO - Wolner Júnior"
              subheader="Brasília - DF"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <CardContent>
              <Stack spacing={3}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography>Project Views</Typography>
                  <Typography>1360</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography>Appreciations</Typography>
                  <Typography>102</Typography>
                </Stack>
                <Typography>Biografia:</Typography>
                <Typography maxWidth={"30ch"}>
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
