import {
  Container,
  Grid,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "0",
  paddingTop: "1rem",
  paddingBottom: "1rem",
}));

const IconContainer = styled("a")(({ theme }) => ({
  width: "40px",
  height: "40px",
  background: "#f3f3f3",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "8px",
}));

const H5 = styled("h5")(({ theme }) => ({
  textTransform: "uppercase",
  marginBottom: "0",
  fontSize: "16px",
}));

const H6 = styled("h5")(({ theme }) => ({
  textTransform: "uppercase",
  marginBottom: "0",
  color: theme.palette.textColor.main,
  fontSize: "14px",
  letterSpacing: "2px",
}));

const LinkContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "0",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  borderRight: "2px solid #f3f3f3",
}));

const LabelLinkContainer = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "#000",
  textTransform: "capitalize",
  fontWeight: "600",
}));

const Header = () => {
  const links = [
    { label: "toys" },
    { label: "catalog" /* icon: `<i className="fas fa-th-large m-2"></i>` */ },
    { label: "character" },
    { label: "brand" },
    { label: "ENG" /* icon: `<i className="fas fa-globe m-2"></i>` */ },
    { label: "Alexander", icon: "d" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header className="border--bottom">
      <Container fixed>
        <Grid container>
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            sx={{
              borderRight: { md: "2px solid #f3f3f3" },
            }}
          >
            <LogoContainer>
              <IconContainer>
                <img
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-lego-edutainment-flaticons-lineal-color-flat-icons-2.png"
                  width="16px"
                  height="16px"
                  alt="Logo"
                />
              </IconContainer>
              <div>
                <H5>lego land</H5>
                <H6>red brick</H6>
              </div>
            </LogoContainer>
          </Grid>
          <Grid item md={8} lg={9} sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid container>
              {links.map(({ label }, i) => (
                <LinkContainer
                  key={label}
                  item
                  xs
                  sx={{ borderRight: i === 5 && "none !important" }}
                >
                  <LabelLinkContainer href="/">
                    {/* {icon} */}
                    {label}
                  </LabelLinkContainer>
                </LinkContainer>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                style={{ background: "none" }}
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {links.map(({ label }) => (
                  <MenuItem key={label} onClick={handleCloseNavMenu}>
                    <LabelLinkContainer href="/">{label}</LabelLinkContainer>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
