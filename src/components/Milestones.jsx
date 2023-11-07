import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const Milestones = () => {
  const milestonesList = [
    {
      title: "2020",
      description: "Ano de Fundação",
    },
    {
      title: "+1000",
      description: "Clientes Satisfeitos",
    },
    {
      title: "+R$ 200k",
      description: "De Investimentos",
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      component={"section"}
      py={10}
    >
      <Container maxWidth={"xl"}>
        <Stack spacing={8} alignItems={"center"}>
          <Typography variant="h2">Nossas Conquistas</Typography>
          <List sx={{ display: "flex", flexDirection: "row", gap: 18 }}>
            {milestonesList.map((milestone, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={milestone.title}
                  primaryTypographyProps={{
                    variant: "h4",
                    component: "span",
                    align: "center",
                  }}
                  secondary={milestone.description}
                  secondaryTypographyProps={{
                    variant: "body1",
                    color: "primary.contrastText",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Container>
    </Box>
  );
};

export default Milestones;
