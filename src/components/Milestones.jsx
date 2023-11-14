import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AnimatedTypography from "./AnimatedTypography";
import AnimatedStack from "./AnimatedStack";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import LampImg from "./LampImg";
import Counter from "./Counter";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      component={"section"}
      pb={12}
    >
      <Container maxWidth={"xl"}>
        <Stack spacing={0} alignItems={{ xxs: "center", md: "start" }} px={12}>
          <LampImg height={200} />
          <AnimatedStack
            spacing={4}
            alignItems={"center"}
            alignSelf={"center"}
            ref={ref}
            isInView={isInView}
          >
            <AnimatedTypography
              variant="h2"
              textAlign={"center"}
              component={motion.h2}
            >
              Nossas Conquistas
            </AnimatedTypography>
            <List
              sx={{
                display: "flex",
                flexDirection: { xxs: "column", md: "row" },
                columnGap: 12,
                rowGap: 6,
              }}
            >
              {milestonesList.map((milestone, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText
                    primary={
                      <Counter
                        end={parseInt(milestone.title.replace(/\D/g, ""))}
                      />
                    }
                    primaryTypographyProps={{
                      variant: "h4",
                      component: "span",
                      align: "center",
                      noWrap: true,
                    }}
                    secondary={milestone.description}
                    secondaryTypographyProps={{
                      variant: "body1",
                      color: "primary.contrastText",
                      align: "center",
                      noWrap: true,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </AnimatedStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Milestones;
