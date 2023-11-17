import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Fade from "@mui/material/Fade";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { PropTypes } from "prop-types";

const NavBar = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeLink, setActiveLink] = useState(pages[0]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", handleSetActive);
    Events.scrollEvent.register("end", handleSetActive);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleManualScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const sections = pages.map((page) => document.getElementById(page));

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop - 200;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        setActiveLink(pages[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleManualScroll);
    return () => {
      window.removeEventListener("scroll", handleManualScroll);
    };
  });

  return (
    <AppBar position="sticky" color="background">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: { xxs: 1, sm: 0 },
          }}
        >
          <Box sx={{ display: { xxs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="current section"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xxs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <ScrollLink
                    to={page}
                    smooth={true}
                    duration={800}
                    offset={-90}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        color: activeLink === page ? "primary.main" : "inherit",
                      }}
                    >
                      {page}
                    </Typography>
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo height={60} logoColor="purple" />
          <Box
            sx={{
              display: { xxs: "none", md: "flex", gap: "1.5rem", flexGrow: 1 },
            }}
            px={6}
            component={"nav"}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  display: "block",
                  color: activeLink === page ? "primary.main" : "inherit",
                  position: "relative",
                }}
                variant="text"
                size="medium"
              >
                <ScrollLink to={page} smooth={true} duration={800} offset={-90}>
                  {page}
                </ScrollLink>
                {activeLink === page && (
                  <Fade in={true} appear={true} timeout={2800}>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "-0.25rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                      }}
                    ></Box>
                  </Fade>
                )}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { sm: "flex", xxs: "none" },
              justifyContent: "center",
              py: 2,
            }}
          >
            {" "}
            <Paper sx={{ paddingInline: 1 }}>
              <IconButton color="primary">
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <IconButton color="primary">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Paper>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

NavBar.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default NavBar;
