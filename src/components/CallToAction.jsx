import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function CallToAction() {
  return (
    <Box py={16} component={"section"}>
      <Container maxWidth={"xl"}>
        <Stack alignItems={"center"}>
          <Typography>Eleve o seu negócio para outro nível</Typography>
          <Typography>
            Encontre os nossos experts e eleve a sua marca
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default CallToAction;
