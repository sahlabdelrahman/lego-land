import { useSelector } from "react-redux";
import "../header/header.css";

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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "0",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
}));

const IconContainer = styled("span")(({ theme }) => ({
  width: "28px",
  height: "28px",
  background: theme.palette.mainColor.main,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "8px",
}));

const LinkContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "0",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  borderRight: "2px solid #f3f3f3",
}));

const LabelLinkContainer = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "#000",
  textTransform: "capitalize",
  fontWeight: "600",
  fontSize: "14px",
}));

const NavigationBar = () => {
  const { wishListItems, cart } = useSelector((state) => state);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav className="border--bottom">
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <HomeOutlinedIcon style={{ marginRight: "5px" }} />
                <LabelLinkContainer href="/">Main page</LabelLinkContainer>
                <ArrowForwardIosOutlinedIcon
                  fontSize="8px"
                  style={{ marginRight: "5px", marginLeft: "5px" }}
                />
                <LabelLinkContainer href="/" className="secondary--color">
                  catalog
                </LabelLinkContainer>
              </div>
            </LogoContainer>
          </Grid>
          <Grid
            item
            xs={9}
            md={8}
            lg={9}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Grid container>
              <LinkContainer item xs>
                <LabelLinkContainer
                  href="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconContainer>
                    <ShuffleIcon fontSize="small" style={{ color: "white" }} />
                  </IconContainer>
                  <span>compare products</span>
                  <ArrowRightAltIcon
                    style={{ margin: "5px" }}
                    color="textColor"
                  />
                </LabelLinkContainer>
              </LinkContainer>
              <LinkContainer item xs>
                <LabelLinkContainer
                  href="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconContainer>
                    <FavoriteBorderIcon
                      fontSize="small"
                      style={{ color: "white" }}
                    />
                  </IconContainer>
                  <span>
                    wish list -{" "}
                    {wishListItems.itemsCount === 0
                      ? "empty"
                      : wishListItems.itemsCount}
                  </span>
                  <ArrowRightAltIcon
                    style={{ margin: "5px" }}
                    color="textColor"
                  />
                </LabelLinkContainer>
              </LinkContainer>
              <LinkContainer item xs style={{ borderRight: "none" }}>
                <LabelLinkContainer
                  href="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconContainer>
                    <LocalMallIcon
                      fontSize="small"
                      style={{ color: "white" }}
                    />
                  </IconContainer>
                  <span>
                    {cart.itemsCount}{" "}
                    {cart.itemsCount <= 1 ? "product" : "products"} - $
                    {cart.total}
                  </span>
                  <ArrowRightAltIcon
                    color="textColor"
                    style={{ margin: "5px" }}
                  />
                </LabelLinkContainer>
              </LinkContainer>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <LabelLinkContainer
                    href="/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconContainer>
                      <ShuffleIcon
                        fontSize="small"
                        style={{ color: "white" }}
                      />
                    </IconContainer>
                    <span>compare products</span>
                    <ArrowRightAltIcon
                      style={{ margin: "5px" }}
                      color="textColor"
                    />
                  </LabelLinkContainer>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <LabelLinkContainer
                    href="/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconContainer>
                      <FavoriteBorderIcon
                        fontSize="small"
                        style={{ color: "white" }}
                      />
                    </IconContainer>
                    <span>
                      wish list -{" "}
                      {wishListItems.itemsCount === 0
                        ? "empty"
                        : wishListItems.itemsCount}
                    </span>
                    <ArrowRightAltIcon
                      style={{ margin: "5px" }}
                      color="textColor"
                    />
                  </LabelLinkContainer>{" "}
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <LabelLinkContainer
                    href="/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconContainer>
                      <LocalMallIcon
                        fontSize="small"
                        style={{ color: "white" }}
                      />
                    </IconContainer>
                    <span>
                      {cart.itemsCount}{" "}
                      {cart.itemsCount <= 1 ? "product" : "products"} - $
                      {cart.total}
                    </span>
                    <ArrowRightAltIcon
                      color="textColor"
                      style={{ margin: "5px" }}
                    />
                  </LabelLinkContainer>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};

export default NavigationBar;
