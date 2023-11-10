import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function CallToAction() {
  return (
    <Box py={6} pt={{ md: 24 }} pb={{ md: 8 }} component={"section"}>
      <Container maxWidth={"xl"}>
        <Stack textAlign={"center"} spacing={4}>
          <Typography variant="h2">
            Eleve o seu negócio para outro nível
          </Typography>
          <Typography variant="body2">
            Encontre os nossos experts e eleve a sua marca
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default CallToAction;
