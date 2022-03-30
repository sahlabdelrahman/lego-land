import { useDispatch } from "react-redux";

import "./filter.css";
import Price from "./price/Price";
import Theme from "./theme/Theme";
import Age from "./age/Age";
import OtherFilters from "./other-filters/OtherFilters";

import { Button, Divider, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { applyFilter, removeFilter } from "../../redux/actions/products.action";

const Filter = () => {
  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    dispatch(applyFilter());
  };

  const handleRemoveFilter = () => {
    dispatch(removeFilter());
  };

  const ApplyFilter = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.mainColor.main,
    padding: theme.spacing(1),
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "600",
    width: "100%",
    "&.hover": {
      backgroundColor: theme.palette.mainColor.main,
      color: "#000",
    },
  }));

  const Delete = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#000",
    border: "1px solid #f3f3f3",
    fontWeight: "400",
    borderRadius: "50%",
    boxShadow: "none",
    cursor: "pointer",
  }));

  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={3}
      className="py-4 border--right"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <div className="filter__content">
        <Price />
        <Divider />
        <Theme />
        <Divider />
        <Age />
        <Divider />
        <OtherFilters />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <ApplyFilter onClick={handleApplyFilter}>
                apply filter
              </ApplyFilter>
            </Grid>
            <Grid item xs={3}>
              <Delete onClick={handleRemoveFilter}>
                <DeleteOutlinedIcon />
              </Delete>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Filter;
