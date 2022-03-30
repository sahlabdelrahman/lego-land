import { Grid, Paper } from "@mui/material";

import FilterMobileVersion from "../filter/FilterMobileVersion";
import Search from "./search/Search";
// import FilterParameters from "./filter-parameters/FilterParameters";
import Products from "./products/Products";

import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  padding: "5px 5px 5px 10px",
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  border: "2px solid #f3f3f3",
  cursor: "pointer",
}));

const Content = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <FilterMobileVersion />
    </Box>
  );

  return (
    <Grid
      item
      xs={12}
      md={8}
      lg={9}
      className="py-4"
      style={{ paddingLeft: "2rem" }}
    >
      <h3>Catalog</h3>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {["left"].map((anchor) => (
          <Fragment key={anchor}>
            <Item onClick={toggleDrawer(anchor, true)}>Filter By</Item>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </Fragment>
        ))}
      </Box>
      <Search />
      {/* <FilterParameters /> */}
      <Products />
    </Grid>
  );
};

export default Content;
