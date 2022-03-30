import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Grid, InputBase, Paper, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import { filterProducts } from "../../../redux/actions/products.action";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    dispatch(filterProducts(search));
  }, [search, dispatch]);

  return (
    <Grid
      container
      spacing={3}
      style={{ marginTop: "5px ", marginBottom: "10px " }}
    >
      <Grid item xs={12} md={8}>
        <Paper
          component="form"
          sx={{
            p: "0px 4px 0 0",
            display: "flex",
            alignItems: "center",
            boxShadow: "none",
            border: "2px solid #f3f3f3",
          }}
        >
          <IconButton
            type="button"
            sx={{
              p: "10px",
              borderRight: "2px solid #f3f3f3",
              borderRadius: "initial",
            }}
            aria-label="search"
          >
            <SearchIcon color="textColor" />
          </IconButton>
          <InputBase
            value={search}
            onChange={(e) => handleSearch(e)}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search among 100+ products"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          component="form"
          sx={{
            p: "0px 10px 0 0px",
            display: "flex",
            alignItems: "center",
            boxShadow: "none",
            border: "2px solid #f3f3f3",
          }}
        >
          <IconButton
            type="button"
            sx={{
              p: "10px",

              borderRight: "2px solid #f3f3f3",
              borderRadius: "initial",
            }}
            aria-label="search"
          >
            <FilterListIcon color="textColor" />
          </IconButton>
          <select
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              paddingLeft: "10px",
            }}
          >
            <option>Popular</option>
          </select>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Search;
