import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AnimatedTypography from "./AnimatedTypography.jsx";
import AnimatedStack from "./AnimatedStack.jsx";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import LampImg from "./LampImg.jsx";
import Counter from "./Counter.jsx";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Milestones = () => {
  const milestonesList = [
    {
      prefix: "+ ",
      number: 5,
      postfix: " ",
      description: "Anos De Atividade",
    },
    {
      prefix: "+ ",
      number: 200,
      postfix: " ",
      description: "Clientes Satisfeitos",
    },
    {
      prefix: "+ ",
      number: 200,
      postfix: " mil",
      description: "De Investimentos",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      component={"section"}
      pb={12}
    >
      <Container maxWidth={"xl"}>
        <Stack spacing={0} alignItems={"center"} px={12}>
          <LampImg isInView={isInView} />
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
                        end={milestone.number}
                        prefix={milestone.prefix}
                        postfix={milestone.postfix}
                        isInView={isInView}
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
